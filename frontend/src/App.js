import './App.css';
import Homepage from './components/Homepage';
import Yourdecks from './components/Yourdecks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='w-screen h-screen bg-neutral-800'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/yourdecks' element={<Yourdecks />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;
