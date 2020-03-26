
exports.up = function(knex) { // Responsável pela Criação da tabela
    return knex.schema.createTable('ongs', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // o segundo parametro é para definir o tamanho da string
     
    });
};

exports.down = function(knex) {// Responsável pela ação a ser feita caso algo de errado na criação da tabela
   return knex.schema.dropTable('ongs');
};
