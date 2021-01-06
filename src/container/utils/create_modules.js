const path = require('path')

module.exports = function createModuleRoutes (modulesUri) {
  const modulesPath = path.resolve('src/modules', modulesUri)
  const Modules = require(modulesPath)

  return Modules()
}