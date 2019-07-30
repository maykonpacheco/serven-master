import React, { Component } from "react";
import firebase from "../../../firebase";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import queryString from "query-string";
import BotaoAgenda from "./botaoAgenda";

import "../../../assets/css/style.css";
import "../../../assets/css/components.css";

class Consultas extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("boards");
    this.unsubscribe = null;
    this.state = {
      boards: [],
      key: ""
    };
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
    });
    this.setState({
      boards
    });
   
  };

  componentDidMount() {
    
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {


    return (
      <Container>
        {this.state.boards.map((board, index )=> (
                
          <div  className="col-12 col-sm-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="fontColor">{board.title}</h4>
                <div className="card-header-action">
                  <a href="#" className="btn">
                    R$ {board.author}
                  </a>
                </div>
                
                <div className="card-header-action">
                 
                        <BotaoAgenda data={board} />

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
