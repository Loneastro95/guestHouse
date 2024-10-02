import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import ShowAll from './components/ShowAll';
import RoomDetails from './components/RoomDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowAll />} />
        <Route path='/roomdetail' element={<RoomDetails/>} />
      </Routes>
      
    </div>
  );
}

export default App;
