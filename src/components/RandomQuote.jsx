import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../globalVariables';
import {
  Link,
  useParams
} from 'react-router-dom';
import arrow_up from  './images/arrow_up.png';
import arrow_down from  './images/arrow_down.png';
import arrow_up_orange from  './images/arrow_up_orange.png';
import arrow_down_orange from  './images/arrow_down_orange.png';
import profile_logo from  './images/profile_picture.png';
import jwtDecode from 'jwt-decode';

export default function RandomQuote() {

   const { id } = useParams();
   const [quoteId, setQuoteId] = useState("");
   const [firstName, setFirstName] = useState("");
   const [userId, setUserId] = useState("");
   const[lastName, setLastName] = useState("");
   const [description, setDescription] = useState("");
   const [upVote, setUpVote] = useState(0);
   const [downVote, setDownVote] = useState(0);
   const [usersUpVotes, setUsersUpVotes] = useState();
   const [usersDownVotes, setUsersDownVotes] = useState();



   useEffect(() => {

    if(window.location.pathname == '/me'){
      const headers = {
        'Authorization': 'Bearer '+ localStorage.getItem('key'),
      };
      axios.get(url + 'me', {headers})
      .then(response => {
        const quote = response.data;
        setQuoteId(quote.id);
        setFirstName(quote.user.firstName);
        setLastName(quote.user.lastName);
        setDescription(quote.description);
        setDownVote(quote.downVote);
        setUpVote(quote.upVote);
        setUserId(quote.user.id);
        setUsersDownVotes(quote.usersDownVoted);
        setUsersUpVotes(quote.usersUpVoted);
        
      })
     }else if(id != undefined){
              axios.get(url + 'users/'+id)
      .then(response => {
        const quote = response.data;
        console.log(quote);
        setFirstName(quote.user.firstName);
        setLastName(quote.user.lastName);
        setDescription(quote.description);
        setDownVote(quote.downVote);
        setUpVote(quote.upVote);
        setUsersDownVotes(quote.usersDownVoted);
        setUsersUpVotes(quote.usersUpVoted);
        setQuoteId(quote.id);
        setUserId(quote.user.id);
      })
  
     } else{
      axios.get(url + 'list/random')
      .then(response => {
        const quote = response.data[0];
        setFirstName(quote.user.firstName);
        setLastName(quote.user.lastName);
        setDescription(quote.description);
        setDownVote(quote.downVote);
        setUpVote(quote.upVote);
        setUserId(quote.user.id);
        setUsersDownVotes(quote.usersDownVoted);
        setUsersUpVotes(quote.usersUpVoted);
        setQuoteId(quote.id);
        setUserId(quote.user.id);
      })
    }

    const key = localStorage.getItem('key');
    console.log(key);
    if (key) {
      const dateNow = new Date();
      const decoded = jwtDecode(key);
      if (decoded.exp * 1000 < dateNow.getTime()) {
        setUserId("empty");
      }else{
        console.log(userId);
      }
    }
    },[]);
      let idCheck = ""
      if(id === undefined){
        idCheck = userId;
      }else{
        idCheck = id;
      }

      

    return (
      <div className='random-mine-others-quote'>
            <div className='quote'>
              <div className='quote-container-left'>
              <button className='vote-btn'>
                <img 
                  src = {usersUpVotes?.some((user) => user.id === userId) ? arrow_up_orange : arrow_up}
                  alt="arrow up"
                  onClick={() => {
                    axios({ method: 'post', url: url+'users/'+quoteId+'/upvote',
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
              <p>{upVote-downVote}</p>
              <button className='vote-btn'>
                <img 
                  src = {usersDownVotes?.some((user) => user.id === userId) ? arrow_down_orange : arrow_down} 
                  alt="arrow down"
                  onClick={
                    () => {
                      axios({ method: 'put', url: url+'users/'+quoteId+'/downvote',
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
              <div className='quote-container-right'>
                <p>{description}</p>
                <div className='user-display'>
                  <img src={profile_logo} alt="profile logo"></img>
                    <Link to={'/profile/'+idCheck}>
                      <p>{firstName + " " + lastName}</p>
                    </Link> 
                </div>
              </div>
            </div>
    </div>
    )
  
}