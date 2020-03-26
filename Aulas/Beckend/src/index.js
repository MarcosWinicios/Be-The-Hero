const express = require('express'); //importando o express (Express é um frameWork)
const cors = require('cors');//Define quem pode acessar a aplicação
const routes = require('./routes'); //Como estou importando um arquivo, preciso colocar o "./" senão seria interpretado como pacote
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);






/**
 * Rota/ Recurso
/**
 *Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informaççao no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * */

 /**
  * Tipos de Parametros
  * 
  * Query Paramns: Parâmetros nomeados e enviados na roa após "?" servem pra (Filtros. Paginação)
  * Rout Paramns: Parâmetros Utilizado spara identificar recursos
  * Request Body: Corpo da requisiçção, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * SQL: Mysql, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */



