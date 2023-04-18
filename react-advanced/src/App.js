import { useState, useRef, useEffect } from 'react';

import './App.css';
import Timer from './Timer';
import video from './video.mp4';

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
        <source src={video} type='video/mp4'/>
      </video>

      <button onClick={toggleFunc}>Toggle</button>
      {toggle && <Timer />}
    </div>
  );
}

export default App;
