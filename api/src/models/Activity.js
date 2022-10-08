const sequelize = require('sequelize')
const DataTypes = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Activity', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            validate: {
                isInt: {
                    msg: 'Id must be an integer'
                }
            }
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isString(){
                    if(typeof this.name !== 'string'){
                        throw new Error('Name must be a string')
                    }
                }
            }
        }, 

        difficult: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt:{
                    msg: 'The entry difficult must be an integer or be beetween 0 and 10',
                    min: 0,
                    max: 10
                }
            }
        },

        duration: {
            type: DataTypes.REAL,
            allowNull: false,
            validate:{
                isInt:{
                    msg: 'The entry difficult must be an integer or be beetween 0 and 24',
                    min: 0,
                    max: 24

                }
            }
        }, 

        season: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            // Falta la validación para seasons - array de todos los arrays posibles 
        }

    }, {
        timestamps: false
    })
}