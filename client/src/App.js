// import logo from './logo.svg';
import './App.css';
import Browse from './pages/Browse/Browse';
import Contribute from './pages/Contribute/Contribute';
import Form from './pages/Form/Form';
import Home from './pages/Home/Home';

import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import New from './pages/New/New';


function App() {
  let apiURL = '';
  if (process.env.NODE_ENV === 'production'){
     apiURL = process.env.REACT_APP_PROD_API_URL;
  } else {
     apiURL = process.env.REACT_APP_DEV_API_URL;
  }
  console.log(apiURL);

  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Form' element = {<Form />} />
        <Route path = '/Contribute' element = {<Contribute />} />
        <Route path = '/Browse' element = {<Browse />} />
        <Route path = '/Login' element = {<Login />} />
        <Route path = "/NewCollection" element = {<New />} />
      </Routes>
    </div>
  );
}

export default App;
