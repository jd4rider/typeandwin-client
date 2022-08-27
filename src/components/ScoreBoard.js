import {Table} from 'react-bootstrap';

const getScoreboard = (players) => {
    const scoreBoard = players.filter(player => player.WPM !== -1);
    return scoreBoard.sort((a, b) => b.WPM - a.WPM);
}

const ScoreBoard = ({players}) => {
    const scoreBoard = getScoreboard(players);
    if(scoreBoard.length === 0) {
        return <div></div>
    }
    return (
        <Table className="my-3" striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>WPM</th>
                </tr>
            </thead>
            <tbody>
                {
                    scoreBoard.map((player, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{player.nickName}</td>
                                <td>{player.WPM}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default ScoreBoard;