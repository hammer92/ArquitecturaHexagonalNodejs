/**
 * this file will hold all the get use-case for company domain
 */
const { Group } = require('../domain/index')

module.exports = ({ repository: { security: { GpsRepository } }}, {}) => {
  // code for update item
  const update = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const group = Group(body)
        return GpsRepository.update(group, {
          where: { id }
        }).then((data)=> console.log(data))
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    update
  }
}
