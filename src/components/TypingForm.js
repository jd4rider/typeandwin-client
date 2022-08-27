import {useState, useRef, useEffect} from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import socket from '../socketConfig';

const TypingForm = ({isOpen,isOver, gameID}) => {
    const [userInput, setUserInput] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        if(!isOpen) {
            textInput.current.focus();
        }
    }, [isOpen]);

    const resetForm = () => {
        setUserInput('');
    }

    const onChange = e => {
        e.preventDefault();
        let value = e.target.value;
        let lastChar = value.charAt(value.length - 1);
        if(lastChar === ' ') {
            socket.emit('userInput', {userInput, gameID});
            resetForm();
        } else setUserInput(e.target.value);
    }

    return (
        <Row className='my-3'>
            <Col className='col-sm'></Col>
            <Col className='col-sm-4'>
                <Form onSubmit={e=>e.preventDefault()}>
                    <Form.Group>
                        <Form.Control type='text' readOnly={isOpen || isOver} placeholder='Type here' value={userInput} onChange={onChange} ref={textInput}/>
                    </Form.Group>
                </Form>
            </Col>
            <Col className='col-sm'></Col>
        </Row>
    )

}

export default TypingForm;