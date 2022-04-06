import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../globalVariables';
import {
  Link,
} from 'react-router-dom';
import arrow_up from  './images/arrow_up.png';
import arrow_down from  './images/arrow_down.png';
import profile_logo from  './images/profile_picture.png';

export default class RandomQuote
 extends Component {
   constructor(props){
     super(props);
   }
   state = {
      id: "",
      description: "",
      upVote: 0,
      downVote: 0,
      idUser: "",
      firstName: "",
      lastName: "",
      email: "",     
   }

   componentDidMount() {
     if(this.props.Random === false){
       console.log(this.props.userId)
              axios.get(url + 'users/'+this.props.userId)
      .then(response => {
        const quote = response.data[0];
        this.setState({id: quote.id, description: quote.description, firstName: quote.user.firstName, lastName: quote.user.lastName,
          idUser: quote.user.id, upVote: quote.upVote, downVote: quote.downVote})
      })
  
     }else{
      axios.get(url + 'list/random')
      .then(response => {
        const quote = response.data[0];
        this.setState({id: quote.id, description: quote.description, firstName: quote.user.firstName, lastName: quote.user.lastName,
           idUser: quote.user.id, upVote: quote.upVote, downVote: quote.downVote})
      })
     }
    
  }

  subtract(upvotes, downvotes){
    return upvotes-downvotes;
  }

  render() {
    return (
      <div className='random-mine-others-quote'>
            <div className='quote'>
              <div className='quote-container-left'>
              <button className='vote-btn'><img src={arrow_up} alt="arrow up" onClick={this.upvote} /></button>
              <p>{this.subtract(this.state.upVote, this.state.downVote)}</p>
              <button className='vote-btn'><img src={arrow_down} alt="arrow down" onClick={this.downvote} /></button>
              </div>
              <div className='quote-container-right'>
                <p>{this.state.description}</p>
                <div className='user-display'>
                  <img src={profile_logo} alt="profile logo"></img>
                    <Link to={'/profile/'+this.state.idUser}>
                      <p>{this.state.firstName + " " + this.idUser}</p>
                    </Link> 
                </div>
              </div>
            </div>
    </div>
    )
  }
}