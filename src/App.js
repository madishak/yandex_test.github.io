// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from './components/About';
import Game from './components/Game';
import NotFoundPage from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='game' element={<Game />}/>
          <Route path='*' element={<NotFoundPage />} />
          
        </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
