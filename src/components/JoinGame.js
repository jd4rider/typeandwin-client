import {useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import socket from '../socketConfig';

const JoinGame = props => {
    const [userInput, setuserInput] = useState({nickName : '', gameID : ''});

    const onChange = e => {
        setuserInput({...userInput, [e.target.name] : e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        socket.emit('join-game', userInput);
    }
    return(
        <div>
            <Row>
                <Col className='col-sm'></Col>
                <Col className='col-sm-8'>
                    <h1 className='text-center'>Join Game</h1>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Enter Game ID</Form.Label>
                            <Form.Control name='gameID' type='text' placeholder='Enter Game ID' value={userInput.gameID} onChange={onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control name='nickName' type='text' placeholder='Enter nickname' value={userInput.nickName} onChange={onChange} />
                        </Form.Group>
                        <Button variant='primary' type='submit'>Submit</Button>
                    </Form>
                </Col>
                <Col className='col-sm'></Col>
            </Row>
        </div>
    )
}

export default JoinGame;