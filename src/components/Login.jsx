import React, { Component } from 'react';
import Navbar from './Navbar';
import './components.css';
import axios from 'axios';
import { url } from '../globalVariables';
import Footer from './Footer';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', status : 0, redirect: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    axios
      .post(url + 'login', {

        email: email,
        password: password,
      })
      .then(response => { 
        this.setState({status:response.status});
        localStorage.setItem("key", response.data.key)
      })
      .catch(error => {
          console.log(error.response)
          this.setState({status:error.response.status})
      });
    event.preventDefault();
  }
  render() {
    var msg = "";
    if(this.state.status === 401){
        msg = "Email or password is invalid!";
    }else if(this.state.status === 201) {
      return (
        <p>Sucess!</p>
      )
    }
    return (
      <>
      <nav className="content">
        <Navbar></Navbar>
        <nav className="form-container">
          <nav className="upper-part">
            <h1>Welcome <span className='colored-text'>back!</span></h1>
            <p>
              Thank you for comming back. Hope you have a good day and inspire
              others.
            </p>
            <p>{msg}</p>
          </nav>
          
          <form className="form-container-login" onSubmit={this.handleSubmit}>
            <label className="form-label">Email</label>
            <input
              className="login-form-input"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <label className="form-label">Password</label>
            <input
              className="login-form-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="login-form-btn">Login</button>
          </form>
        </nav>
      </nav>
      <Footer></Footer>  
      </>
      
    );
  }
}
