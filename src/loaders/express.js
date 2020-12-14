const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('../shared/infrastructure/router');
const config = require('./config');

const { ResponseError } = require('../shared/infrastructure/serializer')

module.exports = (app) => {

    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable('trust proxy');

    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());


    // Some sauce that always add since 2014
    // "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
    // Maybe not needed anymore ?
    app.use(require('method-override')());

    // Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());
    /// Middleware serializer Response
    // Load API routes
    app.use(config.api.prefix, routes(app));

    /// catch 404 and forward to error handler
    app.use(ResponseError._404);
    /// error handlers  Celebrate
    app.use(ResponseError.fromValidation);

    app.use(ResponseError.internal);

}