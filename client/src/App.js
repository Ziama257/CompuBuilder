import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import PartForm from './components/addparts';
import BuildDisplay from './components/compubuilderScreen';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element = {<BuildDisplay/>} path = '/' default/>
        <Route element = {<PartForm/>} path = '/newparts'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
