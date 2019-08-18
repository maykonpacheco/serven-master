import React, { Component } from "react";
import firebase from "../../../firebase";

import "./styles.css";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import BotaoAgenda from "../Main/botaoAgenda";
import { Container } from "react-bootstrap";
import * as moment from "moment";

import { connect } from "react-redux";
import { especialist } from "../../../reducers/especialist";
import medico from '../../../assets/img/medico.png';

import 'moment/locale/pt-br';





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
        data,
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
        data,
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
    this.props.dispatch({
      type: "SET_ESPECIALIST_SEMANA",
      payload: especialist.semana
    })
  };

  render() {
    let semana = [];

    for (let i=0;i<7;i++) {
      semana.push(moment(new Date()).add(i,'days'))
    }
    let semanaIndex = semana.map(i => i.format('dddd').toLowerCase().replace("-feira", ""));

    return (
      <div>
        <Navbar />
        <Container>
        {semana.map((dia, index) => 
            <div className="centerService">
              <h5 className="fontData fontColor col-12 col-sm-12 col-lg-12">
              {dia.format('dddd, LL')}
              </h5>

              {this.state.Especialist.map(
                i =>
                  i[semanaIndex[index]] && (
                    <div className="col-12 col-sm-12 col-lg-12">
                      <div class="card">
                        <div className="card-header">
                          <div class="login-brand">
                              <img src={medico} alt="logo" width="70" class="shadow-light rounded-circle"/>
                          </div>
                          <h4 className="fontColor">{i.nome}</h4>
                        </div>
                        <div className="card-header row">
                          <div class="col mb-4 mb-lg-0 text-center">
                            <div class="row">
                              {i[semanaIndex[index]].map(board => (
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
          
        )}
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
