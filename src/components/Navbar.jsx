import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import img from  './images/quotastic_logo.png';
import img2 from  './images/quotastic_logo_white.png';
import profile_logo from  './images/profile_picture.png';
import create_logo from  './images/create_logo.png';



export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {login: false};
  }

  componentDidMount() {
    const key = localStorage.getItem('key');
    
        if(key){
            var dateNow = new Date();
            const decoded = jwtDecode(key);
            console.log(decoded);
            if(decoded.exp * 1000 < dateNow.getTime()){
                this.setState({login: false})
                console.log("falsenavbar");
            }else {
                this.setState({login: true})
                console.log("truenavbar");
            }
        }
    
  }

  render() {
    if(this.state.login === false){
      switch(window.location.pathname) {
        case '/login':
          return (
            <div className='navbar'>
              <img id='logo' src={img} alt="footer"/>
                <ul>
            <li>
             <Link to="/signup">
                <button type="button" className='sign-up-btn'>Sign up</button>
             </Link>
            </li>
          </ul>
            </div>
          )
        case '/signup':
          return (
            <div className='navbar'>
              <img id='logo' src={img} alt="footer"/>
            <ul>
                <li>
                    <Link to="/login">
                        <button className='login-btn' type="button">Login</button>
                    </Link>
                </li>
            </ul>
            </div>
         )
        case '/home':
        case '/me':
          return(
            <div className='navbar'>
              <img id='logo' src={img} alt="footer"/>
            <ul>
                <li>
                    <Link to="/signup">
                      <button type="button" className='sign-up-btn'>Sign up</button>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                      <button type="button" className='login-btn'>Login</button>
                    </Link>
                </li>
            </ul>
        </div>
          )
        default:
          if(window.location.pathname.includes('/profile')){
            return(
              <div className='navbar'>
                <img id='logo' src={img} alt="footer"/>
              <ul>
                  <li>
                      <Link to="/signup">
                        <button type="button" className='sign-up-btn'>Sign up</button>
                      </Link>
                  </li>
                  <li>
                      <Link to="/login">
                        <button type="button" className='login-btn'>Login</button>
                      </Link>
                  </li>
              </ul>
          </div>
            )
          }
          // code block
      }

    }else if (this.state.login == true){
          return(
            <div className='navbar-logged-in'>
              <img id='logo' src={img} alt="logo"/>
            <ul className='navbar-li-logged-in'>
                <li>
                    <Link to="/home">
                      <button type="button" className='logged-in-navbar-btn'>Home</button>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                      <button type="button" className='logged-in-navbar-btn'>Settings</button>
                    </Link>
                </li>
                <li>
                      <button type="button" className='logged-in-navbar-btn'>Logout</button>
                </li>
                <li>
                  
                     <Link to="/me">
                     <button className='logged-in-navbar-btn-img'>
                        <img className='profile-img' src={profile_logo} alt="profile image"/>
                     </button>
                     </Link>
                </li>
                <li>
                  
                    <Link to="/create">
                    <button className='logged-in-navbar-btn-img'>
                        <img src={create_logo} alt="create logo"/>
                    </button>
                     </Link>
                </li>
            </ul>
            </div>
          )
    }
      
  }
}
