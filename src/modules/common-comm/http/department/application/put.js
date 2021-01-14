const { Department }  = require('../domain')
module.exports = ({
  repository: {
    common: { department: { DepRepository } }
  }
}, {}) => {
  // code for update item
  const update = ({ id, body }) => {
    return Promise
      .resolve()
      .then(() =>{
        const department = Department(body)
        return DepRepository.update(department, {
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
