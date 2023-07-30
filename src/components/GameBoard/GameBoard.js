import React, { useEffect, useState } from 'react';
import { initializeApiService, apiService } from '../services/apiService'; // Ajuste a importação aqui
import './GameBoard.css';
import LugarEscolhido from './images/LugarEscolhido.svg';
import LugarOculto from './images/LugarOculto.svg';

function GameBoard() {
  const [gameToken, setGameToken] = useState('');
  const [gameData, setGameData] = useState([]); // Inicializa como um array vazio
  const [showScroll, setShowScroll] = useState(false);

  const imageMap = {
    "LugarOculto": LugarOculto,
    "LugarEscolhido": LugarEscolhido
  }

  useEffect(() => {
    const initialize = async () => {
      await initializeApiService();
    };
    initialize();
  }, []);


  const loadGame = async (token) => {
    console.log(token);
    try {
      // fazer uma requisição GET para /game, passando o token no header
      const response = await apiService.get('/game', { headers: { gameToken: token } });
      console.log('loadGame response', response);
      console.log('loadGame response.data', response.data);
      setGameData(response.data);
    } catch (error) {
      console.error('Error loading game', error);
    }
  };

  const createRows = (board) => {
    let rows = [];
    if (board && board.length > 0) {
      for (let i = 0; i < board.length; i += 5) {
        const row = board.slice(i, i + 5);
        console.log('row', row);
        rows.push(row);
      }
    }
    console.log('rows', rows);
    return rows;
  };

  const newGame = async () => {
    console.log('apiService:', apiService);
    
    if (!apiService) {
      console.log('Serviço de API não inicializado. Tentando inicializar...');
      await initializeApiService();
    }
  
    console.log('apiService after initializeApiService:', apiService);
    
    if (apiService) {
      try {
        const response = await apiService.post('/newgame');
        const newGameToken = response.data.gameToken;
        setGameToken(newGameToken);
  
        loadGame(newGameToken);
      } catch (error) {
        console.error('Error creating new game', error);
      }
    } else {
      console.error("Serviço de API não inicializado");
    }
  };

  const [isAnimating, setIsAnimating] = useState(false);

  const handleNewGameClick = async () => {
    // Check if already animating, prevent starting a new animation if the previous one is not finished
    if (isAnimating) {
      return;
    }

    setIsAnimating(true);

    try {
      const readTexts = [
        "Lendo casa de aposta...",
        "Lendo casa de aposta..",
        "Lendo casa de aposta.",
        "Lendo casa de aposta..",
        "Lendo casa de aposta..."
      ];

      let currentIndex = 0;

      function updateReadText() {
        setButtonText(readTexts[currentIndex]);
        currentIndex = (currentIndex + 1) % readTexts.length;
      }

      const readInterval = setInterval(updateReadText, 500);

      setTimeout(async function () {
        clearInterval(readInterval);

        setButtonText("Leitura 100% concluída");
        newGame();

        await new Promise(resolve => setTimeout(resolve, 2000));

        setButtonText("Gerar Oportunidade");
        setIsAnimating(false);
      }, 3000);
    } catch (error) {
      console.error('Error creating new game', error);
      setIsAnimating(false); // Make sure to reset animation state on error
    }
  };



  const rows = createRows(gameData);
  const [buttonText, setButtonText] = useState("Gerar Oportunidade"); // Set initial button text
  const buttonDisabled = isAnimating;

  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '3vw', overflow: 'auto' }}>
        {rows.length > 0 ? (
          rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="cell">
                  <img src={imageMap[cell]} alt="cell" />
                </div>
              ))}
            </div>
          ))
        ) : (
          Array.from({ length: 5 }, (_, rowIndex) => (
            <div key={rowIndex} className="row">
              {Array.from({ length: 5 }, (_, cellIndex) => (
                <div key={cellIndex} className="cell">
                  <img src={imageMap["LugarOculto"]} alt="cell" />
                </div>
              ))}
            </div>
          ))
        )}
    
        <button
          className="generateOpportunityButton"
          onClick={handleNewGameClick}
          disabled={buttonDisabled}
        >
          {buttonText}
        </button>
    
        <div style={{ overflow: 'hidden', '-webkit-overflow-scrolling': 'touch' }}>
          <iframe
            src="https://sshortly1.com/t6Ujfu"
            style={{ width: '100vw', height: '150vw', marginTop: '50px' }}
            allow="autoplay"
            seamless="seamless"
            title="myFrame"
          />
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
