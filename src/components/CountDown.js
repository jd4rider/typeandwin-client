import {useState, useEffect} from 'react';
import socket from '../socketConfig';

const CountDown = () => {
    const [timer, setTimer] = useState({countDown : ''});

    useEffect(() => {
        socket.on('timer', time => {
            setTime(time);
        });
        return () => {
            socket.removeAllListeners();
        }
    }, []);

    return(
        <div>
            {time}
        </div>
    )
}

export default CountDown;