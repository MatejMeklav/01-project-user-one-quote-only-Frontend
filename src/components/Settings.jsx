import React, { Component } from 'react';
import { url } from '../globalVariables';
import axios from 'axios';

export default class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          repeatedPassword: '',
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
            'Authorization': 'Bearer '+ localStorage.getItem('key')
        };
        const { email, firstName, lastName, password, repeatedPassword } =
          this.state;
        axios
          .put(url + 'me/update-user', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            repeatedPassword: repeatedPassword,
          }, { headers })
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
    var msg = "";
    if(this.state.status === 400){
        msg = "Invalid input data!";
    }else if(this.state.status === 200) {
        msg = "Change was successful.";
    }
    return (
      <div className='settings-container'>
        <h4>Profile <span className='colored-text'>settings</span></h4>  
        <p>Change your profile settings</p>
        <p>{msg}</p>
        <form className='form-container-sign-up' onSubmit={this.handleSubmit}>
          <label className="form-label">Email</label>
            <input
              className="sign-up-form-input"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          <nav className='name-container'>
            <nav  className="form-label">
            <label>First Name </label>
            <input
              className="sign-up-form-input"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            </nav>
            <nav  className="form-label">
            <label>Last Name</label>
            <input
              className="sign-up-form-input"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            </nav>
        </nav>
          <label className="form-label">Password</label>
            <input
              className="sign-up-form-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          
          <label className="form-label"> Confirm password</label>
            
            <input
              className="sign-up-form-input"
              type="password"
              name="repeatedPassword"
              value={this.state.repeatedPassword}
              onChange={this.handleChange}
            />
          <nav className='buttons-submit-cancel'>
            <button className="sign-up-form-btn">Submit</button>
            <button id='cancel'>Cancel</button> 
          </nav>
        </form>

      </div>
    )
  }
}
