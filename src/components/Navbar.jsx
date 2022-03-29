import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    console.log(window.location.pathname)
      if (window.location.pathname === '/login') {
        
        return (
            <div>
                <ul>
            <li>
             <Link to="/signup">
                <button type="button">Sign up</button>
             </Link>
            </li>
          </ul>
            </div>
          )
      }else if(window.location.pathname === '/signup'){
        return (
            <div>
            <ul>
                <li>
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                </li>
            </ul>
            </div>
        )
        
      }else if('/home') {
          return(
            <div>
            <ul>
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
          )
    
      }
    
  }
}
