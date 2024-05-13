
import { Button } from 'reactstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Example from './Layout/header';
import CustomRouter from './Layout/CustomRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Example></Example>
        <CustomRouter></CustomRouter>
      </Router>


    </div>
  );
}

export default App;
