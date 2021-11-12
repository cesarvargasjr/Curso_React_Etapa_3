import { Switch, Route } from 'react-router-dom'
import React from 'react'
import './Content.css'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'


const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route exact path="/"> {/* O "exact" faz com que só acesse a tela home se for só a "/", caso contrário tela sem conteúdo, pode-se fazer o 404. */}
                <Home />
            </Route>
            <Route path="*"> {/* Exemplo do Not Found 404. */}
                <NotFound /> 
            </Route>
        </Switch>
    </main>
)

export default Content