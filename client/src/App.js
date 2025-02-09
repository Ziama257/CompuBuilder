import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import CpuForm from './components/addparts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element = {<CpuForm/>} path = '/' default/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
