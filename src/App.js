import AllRouter from "./commponets/AllRouter/AllRouter";
import Nabare from "./commponets/NavBare/Nabare";
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="app" >
    
    <Router>
       
        <AllRouter/>
    </Router>
     
    </div>
  );
}

export default App;
