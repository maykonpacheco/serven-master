import React, { Component } from "react";
import firebase from "../../../firebase";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import "../../../assets/css/style.css";
import "../../../assets/css/components.css";
import Consulta from "./Consultas";

class BotaoAgenda extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Especialist");
    this.unsubscribe = null;
    this.state = {
      Especialist: [],
      key: ""
    };
  }

  onCollectionUpdate = querySnapshot => {
    const Especialist = [];
    querySnapshot.forEach(doc => {
      const {
        nome,
        especialidade,
        segunda,
        domingo,
        terca,
        quarta,
        quinta,
        sexta,
        sabado
      } = doc.data();
      Especialist.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nome,
        especialidade,
        domingo,
        segunda,
        terca,
        quarta,
        quinta,
        sexta,
        sabado
      });
    });
    
    this.setState({
      Especialist
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    
  }

  render() {
   
     
    let especialidade = this.props.data.title; 
  
    return (
      <Container>
       
        <Link

          to={{
            pathname: "/servicos",
            search: "?especialidade=" + especialidade
          }}
          className="btn btn-primary"
        >
         
          Agendar
        </Link>
      </Container>
    
    );
  }
}

export default BotaoAgenda;
//{console.log(especialidade === this.props.data.title ? "SIM" : "NÃO")}