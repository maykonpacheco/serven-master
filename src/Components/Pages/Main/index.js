import React, { Component } from 'react';
import './styles.css';
import firebase from '../../../firebase';

//import Search from '../../Components/Search'; 
import Test from './Test';


class Main extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    

  }

  logout() {
    firebase.auth().signOut();
}



  render() {
    return (
      <div>
        <Test />
       
      </div>
     
    );
  }
}

export default Main;

