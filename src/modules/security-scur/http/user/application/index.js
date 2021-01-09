const authCase = require('./auth')
const getCase = require('./get')
const postCase = require('./post')
const putCase = require('./put')
const deleteCase = require('./delete')
module.exports = (repository, base) => {
  return {
    authCase: authCase(repository, base),
    getCase: getCase(repository, base),
    postCase: postCase(repository, base),
    putCase: putCase(repository, base),
    deleteCase: deleteCase(repository, base),
  }
}