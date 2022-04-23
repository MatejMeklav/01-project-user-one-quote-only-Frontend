import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../globalVariables';
import {
  Link, useParams
} from 'react-router-dom';
import arrow_up from  './images/arrow_up.png';
import arrow_up_orange from  './images/arrow_up_orange.png';
import arrow_down from  './images/arrow_down.png';
import profile_logo from  './images/profile_picture.png';
import arrow_down_orange from  './images/arrow_down_orange.png';
import jwtDecode from 'jwt-decode';

export default function Quotes(props) {

  
  const [quotes, setQuotes] = useState();
  const [userId, setUserId] = useState();
  const [likedState, setLikedState] = useState("");


  useEffect(() => {

    console.log(props.number);
    
    if (props.type === true) {
      axios.get(url + 'list').then((response) => {
        const quotes = response.data;
        if(window.innerWidth < 500){
          setQuotes(quotes.slice(0, 4*props.number));
        }else{
          setQuotes(quotes.slice(0, props.number*9));
        }

      });

      console.log('MOST UPVOTED QUOTES');
    } else if (props.type === false) {
      axios.get(url + 'list/Date').then((response) => {
        const quotes = response.data;
        quotes.liked = true;
        if(window.innerWidth < 500){
          setQuotes(quotes.slice(0, 4*props.number));
        }else{
          setQuotes(quotes.slice(0, props.number*9));
        }
    });
  }

  const key = localStorage.getItem('key');
  console.log(key);
  if (key) {
    const dateNow = new Date();
    const decoded = jwtDecode(key);
    if (decoded.exp * 1000 < dateNow.getTime()) {
      setUserId("empty");
    }else{
      setUserId(decoded.sub);
    }
  }
  },[]);

  return (
    <div className="quotes-list-grid">
      {quotes?.map((quote) => (
        <div className="grid-element" key={quote.id}>
          <div className="quote-container-left">
            <button className="vote-btn">
              <img
                src = {quote.usersUpVoted.some(user => user.id === userId) ? arrow_up_orange : arrow_up}
                alt="arrow up"
                onClick={() => {
                  axios({ method: 'post', url: url+'users/'+quote.id+'/upvote',
                  headers: { 'Authorization': 'Bearer ' + localStorage.getItem('key') } }).then((response) => {
                     console.log(response);
                  }).catch((error) => {
                   if (error.response) {
                     console.log(error.response.data);
                     console.log(error.response.status);
                     console.log(error.response.headers);
                   }
                   });
                }
                }
              />
            </button>
            <p id='likes-id'>{subtract(quote.upVote, quote.downVote)}</p>
            <button className="vote-btn">
              <img
                 src = {quote.usersDownVoted.some(user => user.id === userId) ? arrow_down_orange : arrow_down}
                alt="arrow down"
                onClick={
                  () => {
                    axios({ method: 'put', url: url+'users/'+quote.id+'/downvote',
                    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('key') } }).then((response) => {
                       console.log(response);
                    }).catch((error) => {
                     if (error.response) {
                       console.log(error.response.data);
                       console.log(error.response.status);
                       console.log(error.response.headers);
                     }
                     });
                  }
                }
              />
            </button>
          </div>
          <div className="quote-container-right">
            <p>{quote.description}</p>
            <div className="user-display">
              <img src={profile_logo} alt="profile logo"></img>
              <Link to={'/profile/'+quote.user.id}>
                <p>{quote.user.firstName + ' ' + quote.user.lastName}</p>
              </Link>  
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const subtract=(upvotes, downvotes)=>{
  return upvotes - downvotes;
}