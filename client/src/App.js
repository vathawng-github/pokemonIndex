// import logo from './logo.svg';
import './App.css';
import Browse from './pages/Browse/Browse';
import Contribute from './pages/Contribute/Contribute';
import Form from './pages/Form/Form';
import Home from './pages/Home/Home';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Form' element = {<Form />} />
        <Route path = '/Contribute' element = {<Contribute />} />
        <Route path = '/Browse' element = {<Browse />} />
      </Routes>

    </div>
  );
}

export default App;
