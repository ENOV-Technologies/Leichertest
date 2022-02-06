import React, { useState } from 'react';
import Challenge from './Challenge';
import challenges from './Challenges';

function Game(props) {
    const [gamestate, setProgress] = useState({ progress: 0, score: 0 });

    return (
        <>
            {gamestate.progress < props.gamesize ?
                <><div className="card-header">
                    Challenge number: {gamestate.progress + 1} / {props.gamesize}
                </div>
                    <div className="card-body">
                        <Challenge id={challenges[gamestate.progress].id}
                            text={challenges[gamestate.progress].text}
                            hastimer={challenges[gamestate.progress].hastimer}
                            completed={challenges[gamestate.progress].completed}
                            timelimit={challenges[gamestate.progress].timelimit} />
                        <div className="btn-group">
                            <button className="btn btn-success" onClick={() => setProgress({ progress: gamestate.progress + 1, score: gamestate.score + 1 })}>
                                Pass
                            </button>
                            <button className="btn btn-danger" onClick={() => setProgress({ progress: gamestate.progress + 1, score: gamestate.score + 0 })}>
                                Fail
                            </button>
                        </div>
                    </div></>
                :
                <div className="card-body">
                    {gamestate.score < (0.8 * props.gamesize) ? <h1>You've had to much to drink</h1>
                        :  <h1>You are fine</h1>
                    }
                </div>
            }
        </>
    );
}

export default Game;