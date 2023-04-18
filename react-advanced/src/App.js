import { useState, useRef, useEffect } from 'react';

import './App.css';
import Timer from './Timer';

function App() {

  const ref = useRef();

  console.log(ref);
  useEffect(() => {
    console.log(ref);
    setTimeout(() => {
      ref.current.pause();
    }, 3000);
  }, [])

  const [toggle, setToggle] = useState(false);

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">

      <video ref={ref} width="750" height="500" autoPlay controls muted>
      </video>

      <button onClick={toggleFunc}>Toggle</button>
      {toggle && <Timer />}
    </div>
  );
}

export default App;
