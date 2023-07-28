import React from 'react';
import { Link } from 'react-router-dom'; // Adicione esta linha
import '../GamesGrid/GamesGrid.css';
import minerIcon from './minerIcon.jpg';

function GamesGrid() {
  return (
    <div id="games-grid">
      <div className="game">
        <Link to="/miner" className="game-link" data-game="miners"> {/* Substitua o elemento <a> pelo componente <Link> */}
          <img src={minerIcon} alt="Miners" />
          <p>Miners</p>
        </Link>
      </div>
    </div>
  );
}

export default GamesGrid;
