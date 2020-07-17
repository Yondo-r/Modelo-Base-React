import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Site from './Site'
import Rodape from './Componentes/Rodape'
import Cabecacalho from './Componentes/Cabecalho'
import Inicio from './Componentes/Inicio'
import Servicos from './Componentes/Servicos'
import Portifolio from './Componentes/Portifolio'
import Precos from './Componentes/Precos'
import Contatos from './Componentes/Contatos'
import Admin from './Admin/Admin';
import Login from './Admin/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Cabecacalho />

          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/portifolio' component={Portifolio} />
          <Route path='/precos' component={Precos} />
          <Route path='/contatos' component={Contatos} />

          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
