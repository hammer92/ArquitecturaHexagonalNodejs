module.exports = ({
  application: {
    common: {
      city: { getCase: { all } }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    all().then(data => {
      res.status(Status.OK).json(Success(data))
    }).catch((error) => {
      res.status(Status.BAD_REQUEST).json(
        Fail(error.message))
    })

  }
}