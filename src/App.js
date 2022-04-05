import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Settings from './components/Settings';
import CreateQuote from './components/CreateQuote';
import Profile from './components/Profile';
import ProfileOthers from './components/ProfileOthers';

function App() {
  return (
    <>
    <Router>
      <div className = "App">
        <Routes>
                <Route exact path='/home' element={< Home />}></Route>
                <Route exact path='/signup' element={< Signup />}></Route>
                <Route exact path='/login' element={< Login />}></Route>
                <Route exact path='/settings' element={< Settings />}></Route>
                <Route exact path='/create' element={< CreateQuote />}></Route>
                <Route exact path='/me' element={< Profile />}></Route>
                <Route exact path='/profile' element={< ProfileOthers />}></Route>
          </Routes>
      </div>
    </Router>
    </>
    
    
  );
}

export default App;
