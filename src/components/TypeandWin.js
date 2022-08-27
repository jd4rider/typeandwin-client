import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CountDown from './CountDown';
import StartBtn from './StartBtn';
import DisplayWords from './DisplayWords';
import TypingForm from './TypingForm';
import ProgressBarTAW from "./ProgressBarTAW";
import ScoreBoard from './ScoreBoard';
import DisplayGameCode from './DisplayGameCode';
import socket from '../socketConfig';

const findPlayer = players => {
    return players.find(player => player.socketID === socket.id);
};

const TypeandWin = ({gameState}) => {
    let params = useParams();
    let history = useNavigate();
    const {_id, players, words, isOpen, isOver} = gameState;
    const player = findPlayer(players);
    
    useEffect(() => {
        if(_id == '') {
            history('/');
        };
    }, [gameState]);
    return (
        <div className="text-center">
            <DisplayWords words={words} player={player}/>
            <ProgressBarTAW players={players} player={player} wordsLength={words.length}/>
            <TypingForm isOpen={isOpen} isOver={isOver} gameID={_id}/>
            <CountDown />
            <StartBtn player={player} gameID={_id} />
            <DisplayGameCode gameID={_id}/>
            <ScoreBoard players={players} />
        </div>
    )
}



export default TypeandWin;
