import React, { Component } from 'react'

export default class Settings extends Component {

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
          .post(url + '////', {
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
      <div>
        <h4>Profile settings</h4>  
        <p>Change your profile settings</p>
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
          <nav className='buttons-settings'>
            <button className="sign-up-form-btn">Submit</button>
            <button>Cancel</button> 
          </nav>
        </form>

      </div>
    )
  }
}
