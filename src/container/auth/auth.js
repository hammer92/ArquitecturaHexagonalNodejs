const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
const userToken = require('./domain/userToken')

/**
 * middleware to check the if auth vaid
 */

module.exports = ({ config, repository: { UsrRepository, TokRepository } }) => {
  const params = {
    secretOrKey: config.authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
  }

  const strategy = new Strategy(params, (payload, done) => {
    UsrRepository.findOne({
      attributes: [
        'id', 'userName', 'config', 'admin', 'type', 'base'
      ],
      include: { association: 'token', where: { id: payload.token } },
      where: {
        id: payload.id,
        state: true
      }
    })
      .then((user) => {
        if(user) {
          return done('Usuario no encontrado', null)
        }
        return TokRepository.updateLastUsedAt(user.token.id).then(() => {
          done(null, userToken(user))
        }).catch((error) => done(error, null))
      })
      .catch((error) => done(error, null))
  })

  passport.use(strategy)

  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    done(null, user)
  })

  return {
    initialize: () => {
      return passport.initialize()
    },
    authenticate: () => {
      return passport.authenticate('jwt')
    }
  }
}
