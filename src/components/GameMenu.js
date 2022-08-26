import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const GameMenu = props => {
    let history = useNavigate();
    return (
        <div className='text-center'>
            <h1>Welcome to TypeAndWin</h1>
            <Button className='btn-lg' style={{'marginRight': 3}} variant='primary' onClick={() => history('/game/create')}>
                Create Game
            </Button>
            <Button className='btn-lg' variant='primary' onClick={() => history('/game/join')}>
                Join Game
            </Button>
        </div>
    )
};

export default GameMenu;