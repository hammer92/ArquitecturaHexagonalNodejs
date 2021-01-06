const paginate = require('./paginate')
const globModule = require('src/container/utils/globModule')
module.exports = ({ database }) => {

  const repositoriesModule = {}
  const base = {paginate}

  const http = globModule('http/**/infrastructure/repositories/index.js')
  Object.keys(http).forEach(modelName => repositoriesModule[modelName] = require(http[modelName])({ database }, base));

  return repositoriesModule
}