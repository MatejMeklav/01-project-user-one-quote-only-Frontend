import React, { Component } from 'react';
import Quotes from './Quotes';
import RandomQuote from './RandomQuote';
import Navbar from './Navbar';
import {
    Link
  } from 'react-router-dom';
import './components.css';
export default class Profile extends Component {
  render() {
    return (
      <div className='profile-background'>
        <Navbar></Navbar>
        <div className="profile-container">
          <img src="profile_picture.png" alt="profile logo"></img>
          <h4>First and last name</h4>
          <div className="quotastic-karma-container">
            <p>Quotastic karma</p>
            <h5>1000</h5>
          </div>
          <RandomQuote></RandomQuote>
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
