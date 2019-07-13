import React, { Component } from 'react';
import firebase from '../../../firebase';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';


class Consultas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Servicos: []
    };
  }

  componentDidMount() {
    const Servicos = firebase.database().ref("Servicos");
    Servicos.on("value", snapshot => {
      let Servicos = snapshot.val();
      let newState = [];
      for (let nome in Servicos) {
        newState.push({
          id: nome,
          nome: Servicos[nome].nome,
          descricao: Servicos[nome].descricao,
          valor: Servicos[nome].valor
        });
      }
      this.setState({
        Servicos: newState
      });
    });
  }

  render() {
    return (
      <Container>
        <div id="body-all">
          <div id="body-header">
            <Row>
              <Col>
                <h1>Consultas</h1>
              </Col>
            </Row>
            {this.state.Servicos.map(nome => {
              return (
                <Row className="row-1">
                    <Col className="body-main">
                      <h2>{nome.nome}</h2>
                      <p>{nome.descricao}</p>
                    </Col>
                    <Col className="price" md="auto">
                      <p>R$ {nome.valor}</p>
                    </Col>
                
                  <div className="Schedule">
                    <Col>
                    <Link to={`/servicos/${nome.id}`} className='Schedule' variant="primary" size="lg">Agendar</Link>
                    </Col>
                  </div>
                </Row>
              );
            })}
          </div>
        </div>
        <button onClick={this.logout}>Logout</button>
      </Container>
    );
  }
}

export default Consultas;

