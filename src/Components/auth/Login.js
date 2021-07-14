import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/userAction';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password,
    };
    const redirect = () => {
      return this.props.history.push('/users/home');
    };
    this.props.dispatch(startLogin(formData, redirect));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

export default connect()(Login);
