import React, { Component } from "react";
import firebase from "../../../firebase";

import "./styles.css";
import Navbar from "../../Navbar";

import { Container, Row, Button, Card } from "react-bootstrap";

class Servicos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Servicos: [],
      Agendamento: []
    };
  }
  // envio de dados usando o firebase
  componentDidMount() {
    const Servicos = firebase.database().ref("Servicos");
    Servicos.on("value", snapshot => {
      let Servicos = snapshot.val();
      let newState = [];
      for (let data in Servicos) {
        newState.push({
          id: data,
          data: Servicos[data].data,
          crm: Servicos[data].crm,
          hora: Servicos[data].hora,
          medico: Servicos[data].medico
        });
      }
      this.setState({
        Servicos: newState
      });
    });
  }

  onSubmit = async event => {
    event.preventDefault();
    const Agendamento = {
      ...this.state.Agendamento,
      createdAt: new Date().getTime()
    };
    await firebase
      .database()
      .ref("Agendamentos")
      .push(Agendamento);
    this.setState({
      Agendamento: ""
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container>
        <div className="centerService">
          <h3 className="fontColor col-12 col-sm-12 col-lg-12">
            Domingo, 12 de Abril
          </h3>
          <div className="col-12 col-sm-12 col-lg-12">
            <div class="card">
              <div className="card-header">
                <h4 className="fontColor">Nome</h4>
                <div className="card-header-action">
                  <a href="#" className="btn">
                    Nome
                  </a>
                  <button type="submit" className="btn btn-primary ">
                    Agendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Container>
      </div>
    );
  }
}

export default Servicos;
