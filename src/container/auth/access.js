const Status = require('http-status')
const access = ({ permision, body, user, TokRepository }) => {
  return new Promise(async (resolve, reject) => {

  })
}

module.exports = ({ repository: { UsrRepository }, response: { Success, Fail } }) => {
  return (req, res, next) => {

    access({ body: req.body, user: req.user })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}