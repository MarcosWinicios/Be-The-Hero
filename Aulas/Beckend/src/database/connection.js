const knex = require('knex'); 
const configuration = require('../../knexfile'); // importando as configurações


// SE O A VARIÁVEL 'ENV' for == 'test', Vai ser utilizada a configuração de conecção com o banco teste
// SENÃO,  Será utilizada a configuração de conecção com o banco de desenvolvimento
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;
