import './App.css';
import Homepage from './components/Homepage';
import Yourdecks from './components/Yourdecks';
import DeckBuilder from './components/Deckbuilder';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='w-screen h-screen bg-neutral-800'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/yourdecks' element={<Yourdecks />} />
          <Route path='deck-builder' element={<DeckBuilder />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;
