const Status = require('http-status')

module.exports = ({
  application: {
    security: {
      user: { authCase }
    }
  }, response: { Success, Fail }, logger
}) => {

  return (req, res) => {
    authCase.validate({ body: req.body })
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