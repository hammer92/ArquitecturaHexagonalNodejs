module.exports = {
    development: {
        host: `http://${process.env.DB_HANA_HOST || '192.168.1.9'}:${process.env.DB_HANA_PORT || 30015}/{${process.env.DB_HANA_DATABASE || 'PHARMASAN_PRUEBAS'}}` ,
        user: process.env.DB_HANA_USER || 'SYSTEM',
        password: process.env.DB_HANA_PASS || 'B1Pharmasan',
    },
    test: {
        host: process.env.CI_HANA_HOST || '192.168.1.9',
        port: process.env.CI_HANA_PORT || 30015,
        uid: process.env.CI_HANA_USER || 'SYSTEM',
        pwd: process.env.CI_HANA_PASS || '',
        currentSchema: process.env.CI_HANA_DATABASE || ''
    },
    production: {
        host: process.env.PROD_DB_HANA_HOST || '192.168.1.9',
        port: process.env.PROD_DB_HANA_PORT || 30015,
        uid: process.env.PROD_DB_HANA_USER || 'SYSTEM',
        pwd: process.env.PROD_DB_HANA_PASS || '',
        currentSchema: process.env.PROD_DB_HANA_DATABASE || ''
    }
};