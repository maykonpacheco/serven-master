import React, { Component } from "react";
import firebase from "../../../firebase";
//import './styles.css';
import { Container } from "react-bootstrap";
import Navbar from "../../Navbar";
//import Footer from "../../Footer";
import queryString from "query-string";

import { connect } from "react-redux";

class Finalize extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('Agendamento');
    this.state = {
      especialidade: '',
      profissional: '',
      valor: '',
      email: ''
    };
  }
  
  


  handleClick = (e) => {
    e.preventDefault();

    const  email  = firebase.auth().currentUser.email
    const { especialidade, nome, value } = this.props;
    console.log("salvor", email)

    this.ref.add({
      especialidade,
      nome,
      value, 
      email
    }).then((docRef) => {
      this.setState({
        especialidade: '',
        nome: '',
        value: '',
        email: ''
      });
      this.props.history.push("/sucesso")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  componentDidMount() {
    const nome = this.props.title;
    const resumoRef = firebase.firestore().collection("Especialist");
    const query = resumoRef.where("nome", "==", nome);
    query.get().then(this.onCollectionUpdate);
    console.log("User",firebase.auth().currentUser.email);
    const email = firebase.auth().currentUser.email
    console.log("salvor", email)

    
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
            </div>

            <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4  className="fontColor">
                      Especialidade: {this.props.title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">
                      Data e hora: Segunda, 05 Agosto às 15:00
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">
                      Profissional: {this.props.nome}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">
                      Valor do serviço: {this.props.value}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button onClick={this.handleClick} className="btn btn-primary text-center">
                Finalizar Agendamento
              </button>
          
            </div>
          
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { title, value } = state.queries;
  let { nome, especialidade } = state.especialist;

  return { title, value, nome, especialidade };
};

export default connect(mapStateToProps)(Finalize);
