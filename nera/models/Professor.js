const db = require('./db');

// criando a tabela postangens

const Professor = db.sequelize.define('professor', {
    id_professor: { type: db.Sequelize.INTEGER, 
    autoIncrement: true, 
    allowNull: false, 
    primaryKey: true },    
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    id_usuario: { type: db.Sequelize.INTEGER, 
        foringKey: true },
}, { freezeTableName: true });

//Professor.sync({force: true});
module.exports = Usuario;