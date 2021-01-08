const { Setting }  = require('../domain')
module.exports = ({ common: { modules: { modRepository } } } , {}) => {
  // code for update item
  const updateSetting = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const setting = Setting(body)
        return modRepository.update(setting, {
          where: { id },
        }).then(([status, result])=> result)
      })
      .catch(error => {
        throw new Error(error)
      })
  }


  return {
    updateSetting
  }
}
