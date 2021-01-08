const Status = require('http-status')
module.exports = ({
  application: {
    security: {
      groups: { putCase }
    }
  }, response: { Success, Fail }, logger
}) => {

  return (req, res) => {
    putCase.update({ id: req.params.idGroup, body: req.body })
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