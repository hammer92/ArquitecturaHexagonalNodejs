const glob = require('glob')
const { head } = require('ramda')

module.exports = (path, type) => {
  let modules = {}
  glob.sync( `src/modules/**/${path}` ).forEach( function( file ) {
    const pathArray = file.split('/')

    let repoName = head(head(pathArray.splice(2,1)).split('-').splice(0,1))

    if(pathArray.length === 5){
      repoName = head(pathArray.splice(-1,1))
    }

    if(pathArray.length === 7){
      const app = head(pathArray.splice(-4,1))
      repoName = repoName+"."+app
    }

    if(pathArray.length === 6){
      const app = head(pathArray.splice(-3,1))
      repoName = repoName+"."+app
    }

    modules[repoName] = file
  });
  return modules
}