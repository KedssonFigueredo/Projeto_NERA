const db = require('./db');

// criando a tabela postangens

const professor = db.sequelize.define('professor', {
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

// Post.sync({force: true});
module.exports = Usuario;