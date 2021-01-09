const { Login }  = require('../domain')
module.exports = ({
  repository: {
    security: { user: { UsrRepository } }
  },
  jwt:{ signin }
}, {}) => {  // code for create new item
  const validate = ({ body }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const credentials = Login(body)
        const userCredentials = await UsrRepository.findOne({
          attributes: [
            'id', 'userName', 'password', 'config', 'admin', 'type', 'base'
          ],
          where: {
            userName: credentials.userName,
            state: true
          }
        })

        const validatePass = UsrRepository.validatePassword(userCredentials.password)

        if (!validatePass(credentials.password)) {
          throw new Error('Invalid Credentials')
        }
        const signIn = signin()

        resolve({
          token: signIn({
            id: userCredentials.id,
            config: userCredentials.config,
            admin: userCredentials.admin,
            type: userCredentials.type,
            base: userCredentials.base
          })
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  return {
    validate
  }
}