import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../globalVariables';
export default class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = { quotes: [] };
  }

  componentDidMount() {
    if (this.props.type === true) {
      axios.get(url + 'list').then((response) => {
        const quotes = response.data;
        this.setState({ quotes });
      });
      console.log('MOST UPVOTED QUOTES');
    } else if (this.props.type === false) {
      axios.get(url + 'list/Date').then((response) => {
        const quotes = response.data;
        this.setState({ quotes });
      });
      console.log('MOST RECENT QUOTES');
    }
  }

  subtract(upvotes, downvotes) {
    return upvotes - downvotes;
  }

  render() {
    return (
      <div className="quotes-list-grid">
        {this.state.quotes.map((quote) => (
          <div className="grid-element" key={quote.id}>
            <div className="quote-container-left">
              <button className="vote-btn">
                <img
                  src="./arrow_up.png"
                  alt="arrow up"
                  onClick={this.upvote}
                />
              </button>
              <p>{this.subtract(quote.upVote, quote.downVote)}</p>
              <button className="vote-btn">
                <img
                  src="./arrow_down.png"
                  alt="arrow down"
                  onClick={this.downvote}
                />
              </button>
            </div>
            <div className="quote-container-right">
              <p>{quote.description}</p>
              <div className="user-display">
                <img src="profile_picture.png" alt="profile logo"></img>
                <p>{quote.user.firstName + ' ' + quote.user.lastName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
