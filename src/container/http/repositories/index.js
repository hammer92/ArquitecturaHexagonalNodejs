const paginateGlobal = require('./paginate')
const updateGlobal = require('./update')
const globModule = require('src/container/utils/globModule')
const { assoc } = require('ramda')
module.exports = ({ database }) => {

  const repositoriesModule = {}
  const base = { paginateGlobal, updateGlobal }

  const http = globModule('http/**/infrastructure/repositories/index.js')

  Object.keys(http).forEach(modelName =>{
    const [modules, app] = modelName.split('.')
    const repository = require(http[modelName])({ database }, base)
    repositoriesModule[modules] = assoc(app,repository, repositoriesModule[modules] || {})
  })
  return repositoriesModule
}