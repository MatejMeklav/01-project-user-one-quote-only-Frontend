import React, { Component } from 'react';
import Quotes from './Quotes';
import RandomQuote from './RandomQuote';
import Navbar from './Navbar';
import jwtDecode from 'jwt-decode';
import {
    Link,
    Navigate,
  } from 'react-router-dom';
import './components.css';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  componentDidMount() {
    const key = localStorage.getItem('key');

    if (key) {
      const dateNow = new Date();
      const decoded = jwtDecode(key);
      console.log(decoded);
      if (decoded.exp * 1000 < dateNow.getTime()) {
        this.setState({login: false});
        console.log('false');
      } else {
        this.setState({login: true});
        console.log('true');
      }
    }
  }
  render() {
   
    return (
      <div className='profile-background'>
        <Navbar></Navbar>
        <div className="profile-container">
          <div className='logo-name-container'>
            <img src="profile_picture.png" alt="profile logo"></img>
            <h4>John Scottdd</h4>
          </div>
          <div className="quotastic-karma-container">
            <p>Quotastic karma</p>
            <h5>1000</h5>
          </div>
          <div className='quote-profile'>
            <h5>Quote</h5>
            <RandomQuote></RandomQuote>
          </div>
          <div className="likes-container">
            <h5>Likes</h5>
            <Quotes type={false}></Quotes>
          </div>
        </div>
        <nav id="bottom-nav">
          <Link className="login-btn" to="/#">
            Load more
          </Link>
        </nav>
      </div>
    );
  }
}
