import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import "../../../assets/css/style.css";
import "../../../assets/css/components.css";

class BotaoAgenda extends Component {
  render() {
    return (
      <Container>
        <Link
          to="/servicos"
          className="btn btn-primary"
          onClick={this.props.onClick}
        >
          Agendar
        </Link>
      </Container>
    );
  }
}

export default BotaoAgenda;
