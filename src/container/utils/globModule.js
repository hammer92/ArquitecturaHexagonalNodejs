const glob = require('glob')
module.exports = (path, nameModulo = true) => {
  let modules = {}
  glob.sync( `src/modules/**/${path}` ).forEach( function( file ) {
    let repoName

    if(nameModulo){
      repoName = file.split('/').splice(2,1).pop().split('-').splice(0,1).pop()
    }else {
      repoName = file.split('/').splice(-1,1).pop()
    }

    modules[repoName] = file
  });
  return modules
}