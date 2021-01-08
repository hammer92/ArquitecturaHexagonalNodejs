module.exports = ({
  application: {
    common: {
      setting: { postCase }
    }
  }, response: { Success, Fail }, logger, Status
}) => {
  return (req, res) => {
    postCase.createSetting({ body: req.body })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        logger.error(error)
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}