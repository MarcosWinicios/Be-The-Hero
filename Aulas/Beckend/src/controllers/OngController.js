const connection = require('../database/connection'); //Importando a conecção com o banco

const crypto = require('crypto');

module.exports = {
    //FUNÇÃO PARA LISTAR ONGS
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },


    async create(request, response){ // O "async" é pra que essa função seja assincrona
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // Utilizado para gerar o id
    
        await connection('ongs').insert({ // Faz com que esse código seja executado antes de prosseguir
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};