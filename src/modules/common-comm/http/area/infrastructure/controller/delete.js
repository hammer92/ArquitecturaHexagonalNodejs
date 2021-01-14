module.exports = ({
  application: {
    common: {
      area: { deleteCase }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    deleteCase.remove({ id: req.params.idArea })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}