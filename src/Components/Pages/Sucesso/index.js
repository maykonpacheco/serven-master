import React, { Component } from "react";
//import './styles.css';
//import Consultas from './Consultas';
import Navbar from "../../Navbar";
import { Container } from "@material-ui/core";
//import Footer from "../../Footer";
import AppsIcon from "@material-ui/icons/Apps";
import CheckIcon from "@material-ui/icons/Check";
import "../../../assets/css/style.css";
import "../../../assets/css/components.css";

class Sucesso extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <div class="alert alert-success alert-has-icon text-center">
            <div class="alert-body">
              <div class="alert-title"></div>
              <h5>Maykon, seu agendamento foi realizado.</h5><br/>
              Trazer exames anteriores, receitas médicas e medicamentos (nome e dosagem) em uso.<br/>
              Antes do atendimento médico, você precisa passar pela recepção e por uma pré-consulta.<br/>
              O tempo estimado de permanência na unidade é de 1 hora.
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Sucesso;
