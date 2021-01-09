const { Setting } = require('../domain')
module.exports = ({
  repository: {
    common: { setting: { setRepository } }
  }
}, {}) => {
  // code for create new item
  const createSetting = ({ body }) => {
    return Promise
      .resolve()
      .then(() => {
        const setting = Setting(body)
        return setRepository.create(setting)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    createSetting
  }
}