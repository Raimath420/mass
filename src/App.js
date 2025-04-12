import './App.css';
import { Navbar } from './Components/Navbar';
import { Photos } from './Components/Photos';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Slider/> 
      <Photos/>
    </div>
  );
}

export default App;
