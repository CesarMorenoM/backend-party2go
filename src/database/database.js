import Sequelize from 'sequelize'

export default new Sequelize(
    'runner',
    'postgres',
    'p@ssw0rd',{
        host:'localhost',
        dialect: 'postgres'
    }
)