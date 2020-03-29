import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident';
/*
    BrowserRouter --> As rotas precisam estar dentro dele
    Switch --> Faz com que as rotas sejam executadas uma de cada vez
    exact --> Faz com que o react interprete a rota com esse atributo se for exatamente igual
*/
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Logon} /> 
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}