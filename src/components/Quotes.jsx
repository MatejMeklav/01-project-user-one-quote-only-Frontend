import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../globalVariables';

export default class Quotes
 extends Component {
   state = {
     quotes: []
   }

   componentDidMount() {
    axios.get(url + 'list')
      .then(response => {
        const quotes = response.data;
        this.setState({ quotes });
      })
  }

  subtract(upvotes, downvotes){
    return upvotes-downvotes;
  }

   
  render() {
    return (
      <ul className='quotes-list'>
      {
        this.state.quotes
          .map(quote =>
            <li key={quote.id}>
              <div className='quote-container-left'>
              <button className='vote-btn'><img src="./arrow_up.png" alt="arrow up" onClick={this.upvote} /></button>
              <p>{this.subtract(quote.upVote, quote.downVote)}</p>
              <button className='vote-btn'><img src="./arrow_down.png" alt="arrow down" onClick={this.downvote} /></button>
              </div>
              <div className='quote-container-right'>
                <p>{quote.description}</p>
                <div className='user-display'>
                  <img src="profile_picture.png" alt="profile logo"></img>
                  <p>{quote.user.firstName + " " + quote.user.lastName}</p>
                </div>
              </div>
            </li>
          )
      }
    </ul>
    )
  }
}
