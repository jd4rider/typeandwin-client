import { ProgressBar } from 'react-bootstrap';

const calculatePercentage = (player, wordsLength) => {
    if(player.currentWordIndex !== 0) {
        return (parseInt((player.currentWordIndex / wordsLength) * 100).toFixed(2));
    }
    return 0;
}



const ProgressBarTAW = ({players, player, wordsLength}) => {
    const percentage = calculatePercentage(player, wordsLength);
    const progressTypes = ['progress-bar progress-bar-striped progress-bar-animated bg-success', 
                        'progress-bar progress-bar-striped progress-bar-animated bg-info', 
                        'progress-bar progress-bar-striped progress-bar-animated bg-warning', 
                        'progress-bar progress-bar-striped progress-bar-animated bg-danger'];
    let looper = -1;
    return (
        <div>
            { 
                <div>
                    <h5 className='text-start'>{player.nickName}</h5>
                    <div className="progress my-1" key={player._id} style={{'height': '30px', 'backgroundColor': 'darkgray'}}>
                        <div className={'progress-bar progress-bar-striped progress-bar-animated'} role='progressbar' animated key={player._id} style={{'width': percentage+'%' }} label={`${player.nickName} ${percentage}%`} >
                        {`${player.nickName} ${percentage}%`} 
                        </div>
                    </div>
                </div>
            } 
            {
               players.map(playerObj => { 
                    const percentage = calculatePercentage(playerObj, wordsLength);
                    if (looper == 4) {
                        looper = 0;
                    } else {
                        looper++;
                    }
                    return playerObj._id !== player._id && (
                        <div>
                            <h5 className='text-start'>{playerObj.nickName}</h5>
                            <div className="progress my-1" key={playerObj._id} style={{'height': '30px', 'backgroundColor': 'darkgray'}}>
                            <div className={progressTypes[looper]} role='progressbar' key={playerObj._id} style={{'width': percentage+'%' }} animated  label={`${playerObj.nickName} ${percentage}%`} >
                                {`${playerObj.nickName} ${percentage}%`}
                                </div>
                            </div>
                        </div> 
                    )
               })
            }     
        </div>
    )
}

export default ProgressBarTAW;