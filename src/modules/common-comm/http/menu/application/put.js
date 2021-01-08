const { Setting }  = require('../domain')
module.exports = ({ common: { menu: { menRepository } } } , {}) => {
  // code for update item
  const updateSetting = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const setting = Setting(body)
        return menRepository.update(setting, {
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
