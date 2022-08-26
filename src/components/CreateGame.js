import {useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import socket from '../socketConfig';

const CreateGame = props => {
    const [nickName, setNickName] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        socket.emit('create-game', nickName);
    }
    return(
        <div>
            <Row>
                <Col className='col-sm'></Col>
                <Col className='col-sm-8'>
                    <h1 className='text-center'>Create Game</h1>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type='text' placeholder='Enter nickname' value={nickName} onChange={e => setNickName(e.target.value)} />
                        </Form.Group>
                        <Button variant='primary' type='submit'>Submit</Button>
                    </Form>
                </Col>
                <Col className='col-sm'></Col>
            </Row>
        </div>
    )
}

export default CreateGame;