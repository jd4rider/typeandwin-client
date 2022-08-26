import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import GameMenu from './components/GameMenu';
import CreateGame from './components/CreateGame';
import JoinGame from './components/JoinGame';
import socket from './socketConfig';
import TypeandWin from './components/TypeandWin';

function App() {
  const [gameState, setGameState] = useState({_id : '', isOpen : false, players : [], words : []});

  const history = useNavigate();

  useEffect(() => {
    socket.on('updateGame', game => {
      console.log(game);
      setGameState(game);
    });
    return () => {
      socket.removeAllListeners();
    }
  }, []);
  useEffect(() => {
    if(gameState._id !== ''){
      history(`/game/${gameState._id}`);
      //console.log('/game/' + gameState._id);
    }
  }, [gameState._id]);

  return (
    
      <Routes>
        <Route exact path="/" element={<GameMenu/>}/>
        <Route exact path="/game/create" element={<CreateGame/>}/>
        <Route exact path="/game/join" element={<JoinGame/>}/>
        <Route exact path="/game/:gameId" element={<TypeandWin gameState={gameState}/>}/>
      </Routes>

  );
}

export default App;
