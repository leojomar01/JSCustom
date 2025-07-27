import './App.css';
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Main/Nav';
import Basketball from './components/Basketball/Basketball';


function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/basketball' element={<Basketball/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
