const express =require('express');
const { celebrate, Segments, Joi} = require('celebrate');//Biblioteca Utilizada para fazzer validações

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



const routes = express.Router();

routes.post('/sessions', SessionController.create);


//FUNÇÃO PARA LISTAR ONGS
routes.get('/ongs', OngController.index);
//FUNÇÃO PARA CADASTRAR ONGS
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

//ROTA PARA LISTAR CASOS ESPECÍFICOS DE UMA ONG
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);


// FUNÇÃO PARA CADASTRAR CASOS (incidents)
routes.post('/incidents', IncidentController.create);
//FUNCÇÃO PARA LISTAR CASOS
routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

//FUNCÇÃO PARA DELETAR UM CASO
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }), 
}), IncidentController.delete );




module.exports =routes; //Exportando rotas para que possa ser acessada pelo index