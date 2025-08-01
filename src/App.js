import './App.css';
import {BrowserRouter ,Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Main/Nav';
import Basketball from './components/Basketball/Basketball';
import Background from './components/Background/Background';


function App() {

  return (
    
    <div className="App">
      <BrowserRouter >
        <AppContent/>
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation("");

  return(
     <div className="App">
          <Background location={location.pathname}/>
          <Nav/>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='/basketball' element={<Basketball/>}/>
            <Route path='/volleyball' element={<Basketball/>}/>
          </Routes>
      
    </div>
  )

}

export default App;
