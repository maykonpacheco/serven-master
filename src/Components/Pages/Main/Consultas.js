import React, { Component } from 'react';
import firebase from '../../../firebase';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

import "../../../assets/css/style.css";
import "../../../assets/css/components.css";

class Consultas extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("boards");
    this.unsubscribe = null;
    this.state = {
      boards: [],
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  
  onCollectionUpdate = querySnapshot => {
    const boards = [];
    querySnapshot.forEach(doc => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author
      });
         console.log(doc.id, " => ", doc.data());
    });
    this.setState({
      boards
    });
    console.log("Aqui", boards)

  };

  componentDidMount() {
    
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <Container>
        {this.state.boards.map(board => (
        <div class="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">{board.title}</h4>
                    <div class="card-header-action">
                      <a href="#" class="btn">R$ {board.author}</a>
                      <button type="submit" className="btn btn-primary " >Agendar</button>
                    </div>
                  </div>
              </div>
          </div>
            ))}
      </Container>
    );
  }
}

export default Consultas;

