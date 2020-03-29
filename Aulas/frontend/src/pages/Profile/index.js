import React, {useState, useEffect} from 'react';  //useEffect serve pra que a gente dispare alguma função em um determinado momento do componente
import imgLogo from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
export default function Profile(){
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    useEffect(() => { //(Qual função deve ser carregada, quando a função vai ser executada)
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    },[ongId] ); 

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id)); //Mantém apenas os incidentes que o id for diferente do que foi DELETADO
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear(); //Remove os dados do usuario que estão no Storage

        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={imgLogo} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
        
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color= "#e02041"></FiPower>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
                <ul> 
                    {incidents.map(incident => ( //Percorre o Array vindo do banco setando os componentes do li
                        <li key={incident.id}> 
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                                <FiTrash2 size={20}  color="#a8a8b3"/>
                            </button>
                        </li>
                    ))}
                </ul>
        </div>
    );
}