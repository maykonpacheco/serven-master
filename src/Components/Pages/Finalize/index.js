import React, { Component } from "react";
import firebase from "../../../firebase";
//import './styles.css';
import { Container } from "react-bootstrap";
import Navbar from "../../Navbar";
//import Footer from "../../Footer";
import queryString from "query-string";

import { connect } from "react-redux";
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

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { especialidade } = this.state;

    this.ref
      .add({
        especialidade
      })
      .then(docRef => {
        this.setState({
          especialidade: ""
        });
        this.props.history.push("/");
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

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
        sabado,
        valor
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
        sabado,
        valor
      });
      //console.log(doc.id, " => ", doc.data());
    });
    //console.log(Especialist);
    this.setState({
      Especialist
    });
  };

  componentDidMount() {
    const nome = this.props.title;
    const resumoRef = firebase.firestore().collection("Especialist");
    const query = resumoRef.where("nome", "==", nome);
    query.get().then(this.onCollectionUpdate);
  }

  render() {
    console.log("props", this.props);

    return (
      <div>
        <Navbar />
        <Container>
          <form onSubmit={this.onSubmit}>
            <div className="centerService">
              <h5 className="fontData fontColor col-12 col-sm-12 col-lg-12">
                Resumo
              </h5>
            </div>

            <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">
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
              <button type="submit" className="btn btn-primary text-center">
                Finalizar Agendamento
              </button>
            </div>
          </form>
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
