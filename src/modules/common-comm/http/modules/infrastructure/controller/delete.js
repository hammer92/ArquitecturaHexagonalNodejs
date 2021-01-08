module.exports = ({
  application: {
    common: {
      modules: { deleteCase }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    deleteCase.removeSetting({ id: req.params.idSetting })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}