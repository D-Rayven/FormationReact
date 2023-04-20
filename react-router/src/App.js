import './App.css';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
