module.exports = ({
  application: {
    security: {
      group: { getCase }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    getCase.allPaginate(req).then(data => {
      res.status(Status.OK).json(Success(data))
    }).catch((error) => {
      res.status(Status.BAD_REQUEST).json(
        Fail(error.message))
    })

  }
}