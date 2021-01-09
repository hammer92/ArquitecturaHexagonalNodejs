const Status = require('http-status')
module.exports = ({
  application: {
    security: {
      user: { getCase }
    }
  }, response: { Success, Fail }, logger
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