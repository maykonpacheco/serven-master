import React, { Component } from "react";

//import './styles.css';

import { Container } from "react-bootstrap";
import Navbar from "../../Navbar";
//import Footer from "../../Footer";
class Finalize extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
        <div className="centerService">
            <h5 className="fontData fontColor col-12 col-sm-12 col-lg-12">
             Resumo
            </h5>
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">Consulta</h4>
                  </div>
                    <div className="card-header row">
                      <div class="col mb-4 mb-lg-0 text-center">
                        <div class="row">
                          <div className="button-hour">
                          <p>Psiquiatria - Segunda, 15/04 às 07:00</p>      
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">Especialista</h4>
                  </div>
                    <div className="card-header row">
                      <div class="col mb-4 mb-lg-0 text-center">
                        <div class="row">
                          <div className="button-hour">
                          <p>Maykon Pacheco - CPF: 04825051170</p>      
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">Valor do serviço:</h4>
                  </div>
                    <div className="card-header row">
                      <div class="col mb-4 mb-lg-0 text-center">
                        <div class="row">
                          <div className="button-hour">
                          <h5>R$74,00</h5>      
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        <button className="btn btn-primary">Finalizar Agendamento</button>
        </Container>
      </div>
    );
  }
}

export default Finalize;
