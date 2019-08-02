import React, { Component } from "react";
import firebase from "../../../firebase";

import "./styles.css";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import queryString from "query-string";
import BotaoAgenda from "../Main/botaoAgenda";
import { Container } from "react-bootstrap";

class Servicos extends Component {
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
        valor,
        segunda,
        domingo,
        terca,
        quarta,
        quinta,
        sexta,
        sabado,
        crm
        
      } = doc.data();
      Especialist.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nome,
        valor,
        crm,
        especialidade,
        domingo,
        segunda,
        terca,
        quarta,
        quinta,
        sexta,
        sabado,
        
      });
     //console.log(doc.id, " => ", doc.data());
    });
    //console.log(Especialist);
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
   // console.log("valor ", this.props.location.hash)
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <div className="centerService">
            <h5 className="fontData fontColor col-12 col-sm-12 col-lg-12">
              Domingo
            </h5>

            {this.state.Especialist.map(
              i =>
                i.domingo.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{i.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {i.domingo.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <Link
                                    to={{
                                      pathname: "/finalizar-agendamento",
                                      search: "?nome=" + i.nome
                                      
                                 
                                    }}
                                    className="btn btn-primary"
                                  >
                                    {board.hour}{console.log("valor", this.state.Especialist)}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Segunda
            </h5>
            {this.state.Especialist.map(
              i =>
                i.segunda.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{i.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {i.segunda.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <Link
                                    to={{
                                      pathname: "/finalizar-agendamento",
                                      search: "?nome=" + i.nome
                                    }}
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Terça
            </h5>
            {this.state.Especialist.map(
              i =>
                i.terca.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{i.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {i.terca.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <Link
                                    to={{
                                      pathname: "/finalizar-agendamento",
                                      search: "?nome=" + i.nome
                                    }}
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Quarta
            </h5>
            {this.state.Especialist.map(
              i =>
                i.quarta.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{i.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {i.quarta.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <Link
                                    to={{
                                      pathname: "/finalizar-agendamento",
                                      search: "?nome=" + i.nome
                                    }}
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Quinta
            </h5>
            {this.state.Especialist.map(
              i =>
                i.quinta.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{i.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {i.quinta.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <Link
                                    to={{
                                      pathname: "/finalizar-agendamento",
                                      search: "?nome=" + i.nome
                                    }}
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Sexta
            </h5>
            {this.state.Especialist.map(
              i =>
                i.sexta.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{i.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {i.sexta.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <Link
                                    to={{
                                      pathname: "/finalizar-agendamento",
                                      search: "?nome=" + i.nome
                                    }}
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Sabado
            </h5>
            {this.state.Especialist.map(
              i =>
                i.sabado.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{i.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {i.sabado.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <Link
                                    to={{
                                      pathname: "/finalizar-agendamento",
                                      search: "?nome=" + i.nome
                                    }}
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default Servicos;
