import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import PartForm from './components/addparts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element = {<PartForm/>} path = '/' default/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
