import React, {Component} from 'react';
import {url} from '../globalVariables';
import axios from 'axios';
import './mobile.css';

export default class CreateQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'All our dreams can come true, if we have the courage to pursue them.',
      status: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const headers = {
      'Authorization': 'Bearer '+ localStorage.getItem('key'),
    };
    const {description} =
          this.state;
    axios
        .post(url + 'myquote', {
          description: description,
        }, {headers})
        .then(
            (response) => {
              console.log(response);
              this.setState({status: response.status});
            },
            (error) => {
              console.log(error);
              this.setState({status: error.response.status});
            },
        );
    event.preventDefault();
  }
  render() {
    return (
      <div className='create-quote-container'>
        <h4>Are you felling <span className='colored-text'> inspired?</span></h4>
        <p>You can post one quote. You can delete it on your profile or edit in this window.</p>
        <form className='form-container-create' onSubmit={this.handleSubmit}>
          <textarea
            className="textarea"
            type="textarea"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <nav className='buttons-submit-cancel'>
            <button className="sign-up-form-btn">Submit</button>
            <button id='cancel'>Cancel</button>
          </nav>
        </form>
      </div>

    );
  }
}
