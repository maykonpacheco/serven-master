import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import "../../../assets/css/style.css";
import "../../../assets/css/components.css";

class BotaoAgenda extends Component {
  render() {
    let especialidade = this.props.data.title;
    let valor = this.props.data.author;


    return (
      <Container>
        <Link
          to={{
            pathname: "/servicos",
            search: "?especialidade=" + especialidade
          }}
          className="btn btn-primary"
        >
          Agendar
        </Link>
      </Container>
    );
  }
}

export default BotaoAgenda;
