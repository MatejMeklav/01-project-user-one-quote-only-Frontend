import React, { Component } from 'react';
import Navbar from './Navbar';
import './components.css';

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
      <nav className="content">
        <Navbar></Navbar>
        <nav className="form-container">
          <nav className="upper-part">
            <h1>Welcome back!</h1>
            <p>
              Thank you for comming back. Hope you have a good day and inspire
              others.
            </p>
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
        <footer>
          <img src="footer.png" alt="footer" />
        </footer>
      </nav>
    );
  }
}
