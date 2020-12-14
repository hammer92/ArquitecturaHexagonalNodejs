const hana = require('@sap/hana-client');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/dadabaseHana')[env];

module.exports = (query, params = [])=>{
    const conn = hana.createConnection()
    return new Promise((resolve, reject)=>{
        conn.connect(config, function(err) {
            if(err){
                conn.disconnect()
                return reject(err)
            }
            conn.exec(query,params, function (error, result) {
                conn.disconnect();
                if(error) return reject(error)
                return resolve(result)
            })
        })
    })
}