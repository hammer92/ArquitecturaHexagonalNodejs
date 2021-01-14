module.exports = ({
  application: {
    common: {
      area: { getCase }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    getCase.all().then(data => {
      res.status(Status.OK).json(Success(data))
    }).catch((error) => {
      res.status(Status.BAD_REQUEST).json(
        Fail(error.message))
    })

  }
}