import React, { Component } from "react";
import firebase from "../../../firebase";

import "./styles.css";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import queryString from "query-string";

import { Container, Row, Button, Card } from "react-bootstrap";

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
              Domingo
            </h5>
            {console.log("Aqui =>2", this.state.Especialist)}
            {this.state.Especialist.map(
              board =>
                board.domingo.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{board.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {board.domingo.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <Link
                                  to={{
                                    pathname: "/finalizar-agendamento",
                                    search: "?especialidade=" + board.especialidade
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
              Segunda
            </h5>
            {this.state.Especialist.map(
              board =>
                board.segunda.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{board.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {board.segunda.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </button>
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
              board =>
                board.terca.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{board.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {board.terca.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </button>
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
              board =>
                board.quarta.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{board.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {board.quarta.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </button>
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
              board =>
                board.quinta.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{board.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {board.quinta.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </button>
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
              board =>
                board.sexta.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{board.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {board.sexta.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </button>
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
              board =>
                board.sabado.filter(el => el.value).length && (
                  <div className="col-12 col-sm-12 col-lg-12">
                    <div class="card">
                      <div className="card-header">
                        <h4 className="fontColor">{board.nome}</h4>
                      </div>
                      <div className="card-header row">
                        <div class="col mb-4 mb-lg-0 text-center">
                          <div class="row">
                            {board.sabado.map(board => (
                              <div className="button-hour">
                                {board.value && (
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    {board.hour}
                                  </button>
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
