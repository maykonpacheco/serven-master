import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../firebase';
import './styles.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="container-main" >
        <form className='form-signin'>
            <input 
            id='input-one' 
            value={this.state.email} 
            onChange={this.handleChange} 
            type="email" name="email" 
            aria-describedby="emailHelp" 
            placeholder="Endereço de e-mail"
            />
            <input  
            id='input-two' 
            value={this.state.password} 
            onChange={this.handleChange} 
            type="password" 
            name="password" 
            placeholder="Password" 
            />
          <button onClick={this.login} id='button-signin' type="submit">Entrar</button>
          <button onClick={this.signup}>Signup</button>
        </form>
      
      </div>
    );
  }
}
export default Login;
