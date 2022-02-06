import React, { useState } from 'react';
import './App.css';
import Game from './Gamestart';



function App() {
  const [hasStarted, setStart] = useState(false);

  return (
    <div className="container-fluid">
      {hasStarted ? <Game /> : <button onClick={() => setStart(!hasStarted)}></button>}
    </div>
  );
}

export default App;