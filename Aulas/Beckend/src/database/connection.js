const knex = require('knex'); 
const configuration = require('../../knexfile'); // importando as configurações

const connection = knex(configuration.development);

module.exports = connection;
