import React, { Component } from "react";
import firebase from "../../../firebase";
//import './styles.css';

import { Container } from "react-bootstrap";
import Navbar from "../../Navbar";
//import Footer from "../../Footer";
import queryString from "query-string";

class Finalize extends Component {

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
      console.log(doc.id, " => ", doc.data());
    });
    console.log(Especialist);
    this.setState({
      Especialist
    });
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const { especialidade } = values;
    const doctorsRef = firebase.firestore().collection("Especialist");
    const query = doctorsRef.where("especialidade", "==", especialidade);
    query.get().then(this.onCollectionUpdate);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container>
        <div className="centerService">
            <h5 className="fontData fontColor col-12 col-sm-12 col-lg-12">
             Resumo
            </h5>
            {this.state.Especialist.map(
              board =>
                board.domingo.filter(el => el.value).length && (
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                  {board.domingo.map(board => (
                    <h4 className="fontColor">{board.especialidade}</h4>
                    ))}
                  </div>
                  
                </div>
              </div>
               ))}
          </div>
          <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">Médico: João Bosco da Silva </h4>
                  </div>
                </div>
              </div>
          </div>
          <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">Valor do serviço:  R$74,00</h4>
                  </div>
                  
                </div>
              </div>
          </div >
          <div className="text-center">
        <button className="btn btn-primary text-center">Finalizar Agendamento</button>
        </div>
        </Container>
      </div>
    );
  }
}

export default Finalize;
