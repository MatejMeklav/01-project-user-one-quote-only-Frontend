import React, { Component } from 'react'
import Navbar from './Navbar'
import './components.css';
import {
    Link
  } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <>
            <Navbar></Navbar>
            <nav className='upper-container-home'>
            <nav className='welcome-text-container'>
               <h1>Welcome<br></br> to Quotastic</h1> 
               <h5>Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.</h5>
               <Link className='sign-up-btn' to="/signup" >Sign up</Link>
  
                                                                                                                                    
            </nav>
            <nav className='image-container'>
                <img id='image-top' src="quote_top.png" alt="quote"/>
                <img id='image-mid' src="quote_mid.png" alt="quote"/>
                <img id='image-bottom' src="quote_bottom.png" alt="quote"/>
            </nav>
            </nav>
            <nav id='fantastic-quotes-text'>
                 <h2>Explore the world of fantastic quotes</h2>   
            </nav> 
            <nav id='most-upvoted-quotes-headline'>
                <h4>Most upvoted quotes</h4>
            </nav>  
            <nav id='most-upvoted-quotes-text'>
                <p>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>                                      
            </nav>  
            <nav>
                MOST UPVOTED QUOTES LIST
            </nav>
            <nav id='bottom-nav'>
                <Link className='login-btn' to='/signup'>Sign up to see more</Link> 
            </nav>
            <footer>
                <img src="footer.png" alt="footer"/>
            </footer>
                
        </>
      
    )
  }
}
