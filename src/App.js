import './App.css';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Rooms from './components/Rooms';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Gallery/>
      <Rooms/>
      <Footer/>
    </div>
  );
}

export default App;
