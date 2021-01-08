module.exports = ({
  application: {
    common: {
      setting: { getCase }
    }
  }, response: { Success, Fail }, logger, Status
}) => {

  return (req, res) => {
    getCase.allSetting(req).then(data => {
      res.status(Status.OK).json(Success(data))
    }).catch((error) => {
      res.status(Status.BAD_REQUEST).json(
        Fail(error.message))
    })

  }
}