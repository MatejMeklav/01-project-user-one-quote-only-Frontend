import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    console.log(window.location.pathname)
      if (window.location.pathname === '/login') {
        
        return (
            <div className='navbar'>
              <img src="quotastic_logo.png" alt="footer"/>
                <ul>
            <li>
             <Link to="/signup">
                <button type="button" className='sign-up-btn'>Sign up</button>
             </Link>
            </li>
          </ul>
            </div>
          )
      }else if(window.location.pathname === '/signup'){
        return (
            <div className='navbar'>
              <img src="quotastic_logo.png" alt="footer"/>
            <ul>
                <li>
                    <Link to="/login">
                        <button className='login-btn' type="button">Login</button>
                    </Link>
                </li>
            </ul>
            </div>
        )
        
      }else if('/home') {
          return(
            <div className='navbar'>
              <img src="quotastic_logo.png" alt="footer"/>
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
    
  }
}
