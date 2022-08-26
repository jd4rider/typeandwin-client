import {useState} from 'react';
import { Button } from 'react-bootstrap';

import socket from '../socketConfig';

const StartBtn = ({player, gameID}) => {
    const [showStartBtn, setshowStartBtn] = useState(true);

    const {isPartyLeader} = player;

    const onClick = e => {
        socket.emit('timer', {playerID: player._id, gameID});
        setshowStartBtn(false);
    }


    return(
        <div>
            {(isPartyLeader && showStartBtn) && <Button onClick={onClick}>Start Game</Button>}
        </div>
    )
}

export default StartBtn;