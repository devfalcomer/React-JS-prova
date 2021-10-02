import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ObrasArtes from './pages/ObrasArtes';

const Rotas = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={ObrasArtes}></Route>
                <Route exact path="/artwork" component={ObrasArtes}></Route>
            </Switch>
        </>
    )
}

export default Rotas
