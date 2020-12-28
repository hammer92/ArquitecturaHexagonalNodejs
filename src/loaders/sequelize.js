const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('./config/database')[env];

class SequelizeSingleton {

    constructor() {
        if (SequelizeSingleton.instance === 'object'){
            return SequelizeSingleton.instance
        }

        this.Sequelize = Sequelize

        this.newSequelize()

        this.loadModels()

        this.setAssociate()

        SequelizeSingleton.instance = this

        return this
    }
    newSequelize(){
        if (config.use_env_variable) {
            this.sequelize = new Sequelize(process.env[config.use_env_variable], config);
        } else {
            this.sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
    }
    loadModels(){
        const dirModels = path.join(__dirname, '../', 'database','models')
        fs.readdirSync(dirModels)
            .filter(file => {
                return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
            })
            .forEach(file => {
                const model = require(path.join(dirModels, file))(this.sequelize, Sequelize.DataTypes);
                this[model.name] = model;
            });
    }
    setAssociate(){
        Object.keys(this).forEach(modelName => {
            if (this[modelName].associate) {
                this[modelName].associate(this);
            }
        });
    }
}

module.exports = new SequelizeSingleton();
