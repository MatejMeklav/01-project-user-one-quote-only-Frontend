import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../globalVariables';
import {
  Link,
  useParams
} from 'react-router-dom';
import arrow_up from  './images/arrow_up.png';
import arrow_down from  './images/arrow_down.png';
import profile_logo from  './images/profile_picture.png';

export default function RandomQuote() {

   const { id } = useParams();
   const [firstName, setFirstName] = useState("");
   const[lastName, setLastName] = useState("");
   const [description, setDescription] = useState("");
   const [upVote, setUpVote] = useState(0);
   const [downVote, setDownVote] = useState(0);


   useEffect(() => {

    if(window.location.pathname == '/me'){
      const headers = {
        'Authorization': 'Bearer '+ localStorage.getItem('key'),
      };
      axios.get(url + 'me', {headers})
      .then(response => {
        const quote = response.data;
        setFirstName(quote.user.firstName);
        setLastName(quote.user.lastName);
        setDescription(quote.description);
        setDownVote(quote.downVote);
        setUpVote(quote.upVote);
        
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
      })
     }
    },[]);


    return (
      <div className='random-mine-others-quote'>
            <div className='quote'>
              <div className='quote-container-left'>
              <button className='vote-btn'><img src={arrow_up} alt="arrow up"  /></button>
              <p>{upVote-downVote}</p>
              <button className='vote-btn'><img src={arrow_down} alt="arrow down"  /></button>
              </div>
              <div className='quote-container-right'>
                <p>{description}</p>
                <div className='user-display'>
                  <img src={profile_logo} alt="profile logo"></img>
                    <Link to={'/profile/'+id}>
                      <p>{firstName + " " + lastName}</p>
                    </Link> 
                </div>
              </div>
            </div>
    </div>
    )
  
}