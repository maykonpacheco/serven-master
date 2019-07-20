import React, { Component } from 'react';
import firebase from '../../../firebase';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import queryString from 'query-string';

import "../../../assets/css/style.css";
import "../../../assets/css/components.css";

class Consultas extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Especialist");
    this.unsubscribe = null;
    this.state = {
      Especialist: [],
      key: ""
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("Especialist")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
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
    const Especialist = [];
    querySnapshot.forEach(doc => {
      const { nome, especialidade, segunda, domingo, terca, quarta, quinta, sexta, sabado } = doc.data();
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
      //console.log(doc.id, " => ", doc.data());
    });
    console.log("Aqui", Especialist)
    this.setState({
      Especialist
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {

    return (
      
      <Container>
        {this.state.Especialist.map((item => 
        
        <div className="col-12 col-sm-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="fontColor">{item.especialidade}</h4>
                    <div className="card-header-action">
                      <a href="#" className="btn">R$ </a>
                     
                      {console.log("teste",  item.especialidade)}
                      <Link to={{ pathname: "/servicos", search: "?especialidade="+item.especialidade }} className="btn btn-primary ">Agendar</Link>
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

/*
`/Servicos/${this.props.Especialist.filter(item => 
  item.especialidade === "cardiologista"
  )}`}


  */
