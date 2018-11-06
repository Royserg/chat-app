import React, { Component } from 'react';
import { VERIFY_USER } from '../Events';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "",
      error: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { socket } = this.props;
    const { nickname } = this.state;

    /* === Also take a callback setUser? ===*/
    socket.emit(VERIFY_USER, nickname, this.setUser);

    console.log("submitting name: " + nickname);
  }

  handleChange = (e) => {
    this.setState({ nickname: e.target.value });
  }

  setUser = ({user, isUser}) => {
    console.log(`user: ${user}, isUser: ${isUser}`);
    if (isUser) {
      this.setError("Username taken");
    } else {
      this.props.setUser(user);
    }
  }

  setError = (message) => {
    this.setState({ error: message });
  }

  render() { 
    const { nickname, error } = this.state;

    return ( 
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login--form">

          <label htmlFor="nickname">
            <h2>Your Cool Nickname</h2>
          </label>

          <input 
            placeholder="MyCoolNickname"
            onChange={this.handleChange} 
            type="text"
            ref={(input) => { this.textInput = input }}
            id="nickname"
            value={nickname}
          />
          <div className="error">{error ? error : null}</div>
        </form>
      </div>
     );
  }
}
 
export default LoginForm;