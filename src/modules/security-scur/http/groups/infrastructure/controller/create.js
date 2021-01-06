const Status = require('http-status')
module.exports = ({ application: { security: { postCase } }, response: { Success, Fail }, logger }) => {

  return (req, res) => {
    postCase.create({ body: req.body })
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