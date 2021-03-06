import React, { useEffect, useState} from 'react';
import './components.css';
import {
  Link,
} from 'react-router-dom';
import Quotes from './Quotes';
import jwtDecode from 'jwt-decode';
import RandomQuote from './RandomQuote';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Home(props) {
  const[login, setLogin] = useState(false);
  const[numOfElementsRecent, setNumOfElementsRecent] = useState(1);
  const[numOfElementsMostUpVoted, setNumOfElementsMostUpVoted] = useState(1);


  useEffect(()=>{
    const key = localStorage.getItem('key');
    if (key) {
      const dateNow = new Date();
      const decoded = jwtDecode(key);
      console.log(decoded);
      if (decoded.exp * 1000 < dateNow.getTime()) {
        setLogin(false);
        console.log('false');
      } else {
        setLogin(true);
        console.log('true');
      }
    }

    console.log(numOfElementsRecent);
    console.log(numOfElementsMostUpVoted);

  },[numOfElementsRecent, numOfElementsMostUpVoted])
  
  switch (login) {
    case false:
      return (
        <nav className='home-background'>
        <NavBar></NavBar>
          <nav className='upper-container-home'>
            <nav className='welcome-text-container'>
              <h1>Welcome<br></br> to <span className='colored-text'>Quotastic</span></h1>
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
            <h2>Explore the world of <span className='colored-text'>fantastic quotes</span></h2>
          </nav>
          <nav className = 'quotes-headline'>
            <h4>Most upvoted quotes</h4>
          </nav>
          <nav className='quotes-text'>
            <p>Most upvoted quotes on the platform. Sign up or login to like the quotes and keep them saved in your profile</p>
          </nav>
          <Quotes type = {true} number = {1}></Quotes>
          <nav id='bottom-nav'>
            <Link className='login-btn' to='/signup'>Sign up to see more</Link>
          </nav>
          <Footer></Footer>

        </nav>
      );
    case true:
      return (
        <nav className='home-background'>
          <NavBar></NavBar>
          <nav className='headline-paragraph-container'>
            <h4>Quote of the day</h4>
            <p id='paragraph'>Quote of the day is randomly choosen quote.</p>
            <RandomQuote Random = {true}></RandomQuote>
          </nav>
          <nav className = 'quotes-headline'>
            <h4>Most upvoted quotes</h4>
          </nav>
          <nav className='quotes-text'>
            <p>Most upvoted quotes on the platform. Give a like to the ones you like to keep them saved in your profile.</p>
          </nav>
          <Quotes type = {true} number = {numOfElementsMostUpVoted} key = {numOfElementsMostUpVoted} ></Quotes>
          <nav id='mid-nav' >
            <Link onClick={() => setNumOfElementsMostUpVoted(numOfElementsMostUpVoted+1)} className='login-btn' to='/home'>Load more</Link>
          </nav>

          <nav className = 'quotes-headline'>
            <h4>Most recent quotes</h4>
          </nav>
          <nav className='quotes-text'>
            <p>Recent quotes updates as soon user adds new quote. Go ahed
                         show them that you seen the new quote and like the ones you
                          like.</p>
          </nav>
          <Quotes type = {false} number = {numOfElementsRecent} key = {numOfElementsRecent}></Quotes>
          <nav id='bottom-nav'>
            <Link onClick={() => setNumOfElementsRecent(numOfElementsRecent+1)} className='login-btn' to='/home'>Load more</Link>
          </nav>

          <Footer></Footer>

        </nav>
      );
    default:
  }
}
