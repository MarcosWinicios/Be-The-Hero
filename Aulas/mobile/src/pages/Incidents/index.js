import React, {useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import {View,FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]); //Casos 
    const [total, setTotal] = useState(0); // Total de casos
    const [page, setPage] = useState(1); //Controlar em qual página está
    const [loading, setLoading] = useState(false); // 

    const navigation = useNavigation();
    

    function navigateToDetail(incident) {
        navigation.navigate('Detail', {incident});
    }
    async function loadIncidents() {
        if(loading){
            return;
        }

        if(total > 0 && incidents.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('/incidents', {
            params: {page}
        });

        setIncidents([...incidents, ...response.data]); // Anexa dois vetores dentro de um unico vetor
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total}</Text> 
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia </Text>

            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents} //Dispara uma função quando chegar no final da lista
                onEndReachedThreshold={0.2} // Quantos por cento do final da lista o usuário precisa estar para que a próxima lista seja carregada
                renderItem={({item: incident}) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}:</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}:</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', { //FORMATANDO PARA VALOR  EM REAL
                                style: 'currency', 
                                currency: 'BRL'
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity 
                            style= {styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/> 
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>


    );
}