const { City }  = require('../domain')
module.exports = ({
  repository: {
    common: {  city: { CitRepository } }
  }
}, {}) => {
  // code for update item
  const update = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const city = City(body)
        return CitRepository.update(city, {
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
