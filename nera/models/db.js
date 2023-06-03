const Sequelize = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('tfztquzi','tfztquzi','3C2XIEWlNRrY4aas-GsdMxYlmEk_hw89',{
    host:"babar.db.elephantsql.com",
    port: "5432",
    dialect: 'postgres'
});

module.exports = {
    Sequelize: Sequelize ,
    sequelize: sequelize
}