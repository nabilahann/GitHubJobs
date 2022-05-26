import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import Home from './components/Home';
import JobDetail from './components/JobDetail';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [login, setLogin] = useState(false);

  function handleLoginStateChange(value) {
      setLogin(value);
      localStorage.setItem('login', JSON.stringify(value));
  }

  function logout() {
      setLogin(false);
      localStorage.setItem('login', JSON.stringify(false));
      window.location.reload();
  }
  
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand"> <b>Github</b> Jobs</span>
          {JSON.parse(localStorage.getItem('login')) && <span><button className='btn btn-danger' onClick={() => logout()}>logout</button></span>}
          
        </div>
      </nav>
      <div className="Content">        
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <Login onLoginStateChange = {(value) => handleLoginStateChange(value)}/>} />
            <Route path="/" element={ <Home login={JSON.parse(localStorage.getItem('login'))}/>} />
            <Route path="/detail/:id" element={ <JobDetail login={JSON.parse(localStorage.getItem('login'))}/>} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
