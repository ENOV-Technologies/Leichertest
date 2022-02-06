import React, { useState } from 'react';
import './style.css';
import Game from './Game';


function App() {
  const [state, setState] = useState({hasStarted: false, gameType: 0});

  return (
    <div className="card">
      {state.hasStarted ? <Game gamesize={state.gameType} />
        : <div className="btn-group-vertical start-controls" role="group" >
          <button className="btn btn-warning" onClick={() => setState({hasStarted:true, gameType: 10})}>Play Full Game 10</button>
          <button className="btn btn-warning" onClick={() => setState({ hasStarted: true, gameType: 5 })}>Play Quick 5</button>
          <button className="btn btn-warning" onClick={() => setState({ hasStarted: true, gameType: 1 })}>Single Challenge</button>
        </div>  }
    </div>

  );
}

export default App;