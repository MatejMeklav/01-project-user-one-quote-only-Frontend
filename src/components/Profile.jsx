import React, { useEffect, useState} from 'react';
import Quotes from './Quotes';
import RandomQuote from './RandomQuote';
import Navbar from './Navbar';
import jwtDecode from 'jwt-decode';
import {
    Link, useParams,
  } from 'react-router-dom';
import './components.css';
import axios from 'axios';
import { url } from '../globalVariables';

import profile_logo from  './images/profile_picture.png';
export default function Profile() {
  
    const { id } = useParams();
    const [login, setLogin] = useState(false);
    const [firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const [userId, setUserId] = useState("");
    const [karma, setKarma] = useState("");
    const [random, setRandom] = useState(false);
    useEffect(() => {
    const key = localStorage.getItem('key');
    setUserId(id);
    if (key) {
      const dateNow = new Date();
      const decoded = jwtDecode(key);
      if (decoded.exp * 1000 < dateNow.getTime()) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    }
    if(window.location.pathname == '/me'){
      const headers = {
        'Authorization': 'Bearer '+ localStorage.getItem('key'),
      };
      axios.get(url + 'me',{headers}).then((response) => {
        const userquote = response.data;
        setFirstName(userquote.user.firstName);
        setLastName(userquote.user.lastName);
        setKarma(userquote.upVote-userquote.downVote);
        setUserId(userquote.user.id);
        setRandom(false);
        console.log("profileeee");
        console.log(userquote);
        console.log(userquote.user.id);
      });



    }else{
      console.log(id+" iddd");
      axios.get(url + 'users/'+id).then((response) => {
        const userquote = response.data;
        setFirstName(userquote.user.firstName);
        setLastName(userquote.user.lastName);
        setKarma(userquote.upVote-userquote.downVote);
        setUserId(userquote.user.id);
        setRandom(false);
      });
    }
    
    },[]);
    return (
      <div className='profile-background'>
        <Navbar></Navbar>
        <div className="profile-container">
          <div className='logo-name-container'>
            <img src={profile_logo} alt="profile logo"></img>
            <h4>{firstName} {lastName}</h4>
          </div>
          <div className="quotastic-karma-container">
            <p>Quotastic karma</p>
            <h5>{karma}</h5>
          </div>
          <div className='quote-profile'>
            <h5>Quote</h5>
            <RandomQuote Random = {random} userId = {userId}></RandomQuote>
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
