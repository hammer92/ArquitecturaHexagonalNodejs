module.exports = ({
  application: {
    common: {
      menu: { putCase }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    putCase.updateSetting({ id: req.params.idSetting, body: req.body })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}