import React, { Component } from "react";
import firebase from "../../../firebase";

import "./styles.css";
import Navbar from "../../Navbar";
import { Link } from 'react-router-dom';


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
      console.log(doc.id, " => ", doc.data());
    });
    console.log(Especialist)
    this.setState({
      Especialist
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container>       
          <div className="centerService">
            <h5 className="fontData fontColor col-12 col-sm-12 col-lg-12">
              Domingo, 12 de Abril
            </h5>
            {this.state.Especialist.map(board => (
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
                            { board.value === true ?  
                          <button type="submit" className="btn btn-primary">
                            {board.hour} 
                          </button>
                          : null
                            } 
                          </div>
                         ))}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Segunda, 13 de Abril
            </h5>
            {this.state.Especialist.map(board => (
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
                            { board.value === true ?  
                          <button type="submit" className="btn btn-primary">
                            {board.hour} 
                          </button>
                          : null
                            } 
                          </div>
                         ))}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Terça, 14 de Abril
            </h5>
            {this.state.Especialist.map(board => (
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
                            { board.value === true ?  
                          <button type="submit" className="btn btn-primary">
                            {board.hour} 
                          </button>
                          : null
                            } 
                          </div>
                         ))}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Quarta, 15 de Abril
            </h5>
            {this.state.Especialist.map(board => (
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
                            { board.value === true ?  
                          <button type="submit" className="btn btn-primary">
                            {board.hour} 
                          </button>
                          : null
                            } 
                          </div>
                         ))}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Quinta, 16 de Abril
            </h5>
            {this.state.Especialist.map(board => (
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
                            { board.value === true ?  
                          <button type="submit" className="btn btn-primary">
                            {board.hour} 
                          </button>
                          : null
                            } 
                          </div>
                         ))}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Sexta, 17 de Abril
            </h5>
            {this.state.Especialist.map(board => (
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
                            { board.value === true ?  
                          <button type="submit" className="btn btn-primary">
                            {board.hour} 
                          </button>
                          : null
                            } 
                          </div>
                         ))}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <div className="centerService">
            <h5 className="fontColor fontData col-12 col-sm-12 col-lg-12">
              Sabado, 18 de Abril
            </h5>
            {this.state.Especialist.map(board => (
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
                            { board.value === true ?  
                          <button type="submit" className="btn btn-primary">
                            {board.hour} 
                          </button>
                          : null
                            } 
                          </div>
                         ))}
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Servicos;
