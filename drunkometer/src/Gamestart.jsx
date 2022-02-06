import React, { useState } from 'react';
import Challenge from './Challenge';
import challenges from './Challenges';

function Game(props) {
    const total = challenges.length;
    const [progress, setProgress] = useState(0);

    return (
        <div>
            {progress < total ?
                <><Challenge id={challenges[progress].id}
                    text={challenges[progress].text}
                    hastimer={challenges[progress].hastimer}
                    completed={challenges[progress].completed}
                    timelimit={challenges[progress].timelimit} />
                    <button onClick={() => setProgress(progress => progress + 1)}>
                        Next Challenge
                    </button></>
                :
                <h1>the end</h1>
                
            }
        </div>
    );
}

export default Game;