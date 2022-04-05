import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../globalVariables';
import {
  Link,
} from 'react-router-dom';

export default class RandomQuote
 extends Component {
   state = {
     quotes: []
   }

   componentDidMount() {
    axios.get(url + 'list/random')
      .then(response => {
        const quotes = response.data;
        console.log(quotes);
        this.setState({ quotes });
      })
  }

  subtract(upvotes, downvotes){
    return upvotes-downvotes;
  }

   
  render() {
    return (
      <div className='random-mine-others-quote'>
      {
        this.state.quotes
          .map(quote =>
            <div className='quote' key={quote.id}>
              <div className='quote-container-left'>
              <button className='vote-btn'><img src="./arrow_up.png" alt="arrow up" onClick={this.upvote} /></button>
              <p>{this.subtract(quote.upVote, quote.downVote)}</p>
              <button className='vote-btn'><img src="./arrow_down.png" alt="arrow down" onClick={this.downvote} /></button>
              </div>
              <div className='quote-container-right'>
                <p>{quote.description}</p>
                <div className='user-display'>
                  <img src="profile_picture.png" alt="profile logo"></img>
                    <Link to={'/profile'}>
                      <p>{quote.user.firstName + " " + quote.user.lastName}</p>
                    </Link>
                     
                </div>
              </div>
            </div>
          )
      }
    </div>
    )
  }
}