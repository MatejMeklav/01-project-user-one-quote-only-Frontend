import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

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
    event.preventDefault();
    alert(`
      ____Your Details____\n
      Email : ${email}
      pass : ${password}
    `);
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
            Password
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <button>Sign up</button>
          <label>Already have an account? <button>Sign up</button></label>
        </form>
        <nav>
          <img src="footer.png" alt="footer"/>
        </nav>
      </>
    );
  }
}
