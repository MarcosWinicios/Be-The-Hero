import axios from 'axios'; // Cliente HTTP: Responsável por fazer as chamadas ao backend e obter as respostas

const api = axios.create({
    
    baseURL: 'http://localhost:3333', // Parte da URL que vai ser mantida em todas as chamadas
})



export default api;