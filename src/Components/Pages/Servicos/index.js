import React, { Component } from "react";
import firebase from "../../../firebase";

import "./styles.css";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import BotaoAgenda from "../Main/botaoAgenda";
import { Container } from "react-bootstrap";
import Moment from 'react-moment';
import 'moment-timezone';



import { connect } from "react-redux";
import { especialist } from "../../../reducers/especialist";

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
        sabado
      });
      //console.log(doc.id, " => ", doc.data());
    });
    //console.log(Especialist);
    this.setState({
      Especialist
    });
  };

  componentDidMount() {
    const especialidade = this.props.title;
    const doctorsRef = firebase.firestore().collection("Especialist");
    const query = doctorsRef.where("especialidade", "==", especialidade);
    query.get().then(this.onCollectionUpdate);
  }

  resumo = especialist => {
    this.props.dispatch({
      type: "SET_ESPECIALIST_NOME",
      payload: especialist.nome
    });
    this.props.dispatch({
      type: "SET_ESPECIALIST_ESPECIALIDADE",
      payload: especialist.especialidade
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar />
        <Container>
          
          <div className="centerService">
            <h5 className="fontData fontColor col-12 col-sm-12 col-lg-12">
              Domingo, 04 Agosto
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
                                    onClick={() => this.resumo(i)}
                                    to="/finalizar-agendamento"
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
              Segunda, 05 Agosto
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
                                    onClick={() => this.resumo(i)}
                                    to="/finalizar-agendamento"
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
              Terça, 06 Agosto
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
                                    onClick={() => this.resumo(i)}
                                    to="/finalizar-agendamento"
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
              Quarta, 07 Agosto
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
                                    onClick={() => this.resumo(i)}
                                    to="/finalizar-agendamento"
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
              Quinta, 08 Agosto
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
                                    onClick={() => this.resumo(i)}
                                    to="/finalizar-agendamento"
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
              Sexta, 09 Agosto
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
                                    onClick={() => this.resumo(i)}
                                    to="/finalizar-agendamento"
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
              Sabado, 10 Agosto
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
                                    onClick={() => this.resumo(i)}
                                    to="/finalizar-agendamento"
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

const mapStateToProps = state => {
  let { title } = state.queries;

  return { title };
};

export default connect(mapStateToProps)(Servicos);
