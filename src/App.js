import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import GamesGrid from './components/GamesGrid/GamesGrid';
import GameBoard from './components/GameBoard/GameBoard'; // Não esqueça de importar o GameBoard
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={GamesGrid} />
        <Route path="/miner" component={GameBoard} />
        <Route path="/.." component={GamesGrid} />
        <ScrollToTop />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
