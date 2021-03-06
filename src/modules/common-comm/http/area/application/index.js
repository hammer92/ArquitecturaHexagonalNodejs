const getCase = require('./get')
const postCase = require('./post')
const putCase = require('./put')
const deleteCase = require('./delete')
module.exports = (repository, base) => {
  return {
    getCase: getCase(repository, base),
    postCase: postCase(repository, base),
    putCase: putCase(repository, base),
    deleteCase: deleteCase(repository, base),
  }
}