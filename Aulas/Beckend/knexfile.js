// Update with your config settings.

module.exports = {

  development: { //BANCO UTILIZADO NO DESENVOLVIMENTO DA APLICAÇÃO
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true, // Utilizado para que o padrão das colunas de dados sejam sempre null
  },

  test: { //BANCO UTILIZADO NOS TESTES DA APLICAÇÃO
    client: 'sqlite3',
    connection: {
      filename: './src/database/teste.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true, // Utilizado para que o padrão das colunas de dados sejam sempre null
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
