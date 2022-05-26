import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import Home from './components/Home';
import JobDetail from './components/JobDetail';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand"> <b>Github</b> Jobs</span>
        </div>
      </nav>
      <div className="Content">        
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <Login />} />
            <Route path="/" element={ <Home />} />
            <Route path="/detail/:id" element={ <JobDetail/>} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
