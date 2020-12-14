const glob = require( 'glob' );
const express = require('express')
const router = express.Router()

module.exports = (app) => {
    glob.sync( '**/modules/*/routes.*' ).forEach( function( file ) {
        require(`../../../${file}`)(router, app)
    });
    return router
}