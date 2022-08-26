import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import CountDown from './CountDown';
import StartBtn from './StartBtn';
import socket from '../socketConfig';

const findPlayer = players => {
    return players.find(player => player.socketID === socket.id);
};

const TypeandWin = ({gameState}) => {
    let params = useParams();
    let history = useNavigate();
    const {_id, players} = gameState;
    const player = findPlayer(players);
    
    useEffect(() => {
        if(_id == '') {
            history('/');
        };
    }, [gameState]);
    return (
        <div className="text-center">
            {/* <CountDown /> */}
            <StartBtn player={player} gameID={_id} />
        </div>
    )
}



export default TypeandWin;
