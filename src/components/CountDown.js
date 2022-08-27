import {useState, useEffect} from 'react';
import socket from '../socketConfig';

const CountDown = () => {
    const [timer, setTimer] = useState({countDown : '', msg: ''});

    useEffect(() => {
        socket.on('timer', time => {
            setTimer(time);
        });
        socket.on('done', () => {
            socket.removeListener('timer');
        });
    }, []);

    const {countDown, msg} = timer;

    return(
        <div>
            <h1>{countDown}</h1>
            <h3>{msg}</h3>
        </div>
    )
}

export default CountDown;