module.exports = ({
  application: {
    common: {
      modules: { getCase }
    }
  }, response: { Success, Fail }, logger, Status
}) => {

  return (req, res) => {
    res.status(Status.OK).json(Success(getCase))
    /*getCase.allSetting(req).then(data => {
      res.status(Status.OK).json(Success(data))
    }).catch((error) => {
      res.status(Status.BAD_REQUEST).json(
        Fail(error.message))
    })*/

  }
}