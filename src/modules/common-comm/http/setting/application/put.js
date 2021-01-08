const { Setting } = require('../domain')
module.exports = ({ common: { setting: { setRepository } } }, {}) => {
  // code for update item
  const updateSetting = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() => {
        const setting = Setting(body)
        return setRepository.update(setting, {
          where: { id },
        }).then(([status, result]) => result)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    updateSetting
  }
}
