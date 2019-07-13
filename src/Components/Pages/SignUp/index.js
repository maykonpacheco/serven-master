import React, { Component } from 'react';
import firebase from '../../../firebase';
import './styles.css';
import Login from '../SignIn/Login';
import create from './create';

class SignUp extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
    render() {
      return (
     <div>
        {this.state.user ? (
          <Login />
        ) :
          (
            <create />
          )}
      </div>
    );
  }
}
 
export default SignUp;