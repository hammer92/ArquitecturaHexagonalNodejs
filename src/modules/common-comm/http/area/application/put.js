const { Area }  = require('../domain')
module.exports = ({
  repository: {
    common: { area: { AreRepository } }
  }
}, {}) => {
  // code for update item
  const update = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const area = Area(body)
        return AreRepository.update(area, {
          where: { id },
        }).then(([status, result])=> result)
      })
      .catch(error => {
        throw new Error(error)
      })
  }


  return {
    update
  }
}
