import React, { Component } from 'react';
import Navbar from './Navbar';
import { url } from '../globalVariables';
import axios from 'axios';
import './components.css';
import Footer from './Footer';
import {
  Link
} from 'react-router-dom';
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
    axios
      .post(url + 'signup', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        repeatedPassword: repeatedPassword,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
      );
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <nav className="form-container-two">
        <h1>What is your <span className='colored-text'>name?</span></h1>
        <p>
          Your name will appear on quotes and your public profle.
        </p>
        <nav>
          <img src="profile_picture.png" alt="profile logo"></img>
        </nav>
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
          
          <button className="sign-up-form-btn">Sign up</button>
        </form>
        <nav className='lower-part'>
           <p>Already have an account?</p>
          <Link to = '/login'>
          Sign in
          </Link>
           
        </nav>
        </nav>
        <Footer></Footer> 
      </>
    );
  }
}
