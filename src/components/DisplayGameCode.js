import React from "react"
import {useRef, useState} from 'react'; 
import {Form, Row, Col, Button, Alert, InputGroup} from 'react-bootstrap';


const DisplayGameCode = ({gameID}) => {
    const [copySuccess, setCopySuccess] = useState(false);
    const textInputRef = useRef(null);
    

    const copyToClipboard = e => {
        textInputRef.current.select();
        document.execCommand('copy');
        setCopySuccess(true);
    }

    return (
        <Row>
            <Col className='col-sm'></Col>
            <Col className='col-sm-8'>
                <h1 className='text-center'>Game Code</h1>
                <>
                    <InputGroup className='mb-3'>
                        <Form.Control type='text' readOnly value={gameID} ref={textInputRef}/>
                        <Button variant="outline-secondary" id="button-addon2" onClick={copyToClipboard}>
                            Copy Game Code
                        </Button>
                    </InputGroup>
                </>
                {copySuccess &&  <Alert key={'success'} variant={'success'}>
                    Successfully Copied Game Code
                </Alert>}
            </Col>
            <Col className='col-sm'></Col>
        </Row>
    )
}

export default DisplayGameCode