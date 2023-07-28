import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameBoard from './components/GameBoard';
import OtherComponent from './components/OtherComponent'; // Outro componente de exemplo, substitua por seus próprios componentes

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/game" component={GameBoard} />
        <Route path="/other" component={OtherComponent} /> {/* Outra rota de exemplo, substitua por suas próprias rotas */}
        {/* ... Adicione mais rotas conforme necessário */}
      </Switch>
    </Router>
  );
}

export default AppRoutes;
