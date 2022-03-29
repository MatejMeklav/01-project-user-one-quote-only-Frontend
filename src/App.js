import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
      <div className = "App">
        
        
        <Routes>
                <Route exact path='/home' element={< Home />}></Route>
                <Route exact path='/signup' element={< Signup />}></Route>
                <Route exact path='/login' element={< Login />}></Route>
          </Routes>
      </div>
    </Router>
    </>
    
    
  );
}

export default App;
