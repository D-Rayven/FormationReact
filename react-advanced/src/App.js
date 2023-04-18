import { useState, useRef, useEffect } from 'react';

import './App.css';
import Timer from './Timer';

import Video from './video.mp4';

function App() {

  const [toggle, setToggle] = useState(1);


  const toggleFunc = () => {
    setToggle(toggle + 1);
  }

  return (
    <div className="App">
      <h1>{toggle}</h1>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
