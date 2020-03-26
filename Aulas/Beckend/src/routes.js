const express =require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



const routes = express.Router();

routes.post('/sessions', SessionController.create);


//FUNÇÃO PARA LISTAR ONGS
routes.get('/ongs', OngController.index);
//FUNÇÃO PARA CADASTRAR ONGS
routes.post('/ongs', OngController.create);

//ROTA PARA LISTAR CASOS ESPECÍFICOS DE UMA ONG
routes.get('/profile', ProfileController.index);


// FUNÇÃO PARA CADASTRAR CASOS (incidents)
routes.post('/incidents', IncidentController.create);
//FUNCÇÃO PARA LISTAR CASOS
routes.get('/incidents', IncidentController.index);
//FUNCÇÃO PARA DELETAR UM CASO
routes.delete('/incidents/:id', IncidentController.delete );




module.exports =routes; //Exportando rotas para que possa ser acessada pelo index