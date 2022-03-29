import React, { Component } from 'react';
import Navbar from './Navbar';
import { url } from "../globalVariables";
import axios from 'axios';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      repeatedPassword: '',
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
    const { email, firstName, lastName, password, repeatedPassword } =
      this.state;
      axios.post(url+'signup', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        repeatedPassword: repeatedPassword,
      })
      .then((response) => {
          console.log(response);
      }, (error) => {
        console.log(error);
      });
    event.preventDefault();
    
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <h1>Welcome back!</h1>
        <p>
          Thank you for comming back. Hope you have a good day and inspire
          others.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Confirm password
            <input
              type="password"
              name="repeatedPassword"
              value={this.state.repeatedPassword}
              onChange={this.handleChange}
            />
          </label>
          <button>Sign up</button>
        </form>
        <nav>
          <img src="footer.png" alt="footer"/>
        </nav>
      </>
    );
  }
}
