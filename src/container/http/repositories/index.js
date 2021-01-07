const paginateGlobal = require('./paginate')
const updateGlobal = require('./update')
const globModule = require('src/container/utils/globModule')
module.exports = ({ database }) => {

  const repositoriesModule = {}
  const base = { paginateGlobal, updateGlobal }

  const http = globModule('http/**/infrastructure/repositories/index.js')
  Object.keys(http).forEach(modelName => repositoriesModule[modelName] = require(http[modelName])({ database }, base))

  return repositoriesModule
}