import { useState } from 'react';

import './App.css';
import Content from './Content';

function App() {

  const [toggle, setToggle] = useState(1);


  const toggleFunc = () => {
    setToggle(toggle + 1);
  }

  return (
    <div className="App">
      <Content num={5}/>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
