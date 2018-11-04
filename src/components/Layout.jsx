import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../Events';
const socketUrl = "http://172.16.102.125:3231"

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: null,
    };

  }

  componentDidMount() {
    this.initSocket();
  }

  /* client connects to socket */
  initSocket = () => {
    const socket = io(socketUrl);
    socket.on('connect', () => {
      console.log('connected');
    })
    this.setState({socket});
  }

  /* Save user to state
  *  @param user {id:number, name:string}
  */
  setUser = (user) => {
    const { socket } = this.state;
    /* send user to server to add into list of connected users */
    socket.emit(USER_CONNECTED, user);

    this.setState({})
  }

  /* set user in state to null */
  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  }

  render() { 
    const {title} = this.props;
    
    return ( 
        <div className="container">
          {title}
        </div>
    );
  }
}
 
export default Layout;