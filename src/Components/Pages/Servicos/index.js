import React, { Component } from 'react';
import firebase from '../../../firebase';

import './styles.css';

import { Container, Row, Button, Card } from 'react-bootstrap';

class Servicos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Servicos: [],
      Agendamento: []
    };
  }
    // envio de dados usando o firebase
    componentDidMount() {
    const Servicos = firebase.database().ref("Servicos");
    Servicos.on("value", snapshot => {
      let Servicos = snapshot.val();
      let newState = [];
      for (let data in Servicos) {
        newState.push({
          id: data,
          data: Servicos[data].data,
          crm: Servicos[data].crm,
          hora: Servicos[data].hora,
          medico: Servicos[data].medico
        });
      }
      this.setState({
        Servicos: newState
      });
    });
  }

  onSubmit = async event => {
    event.preventDefault();
    const Agendamento = {
      ...this.state.Agendamento,
      createdAt: new Date().getTime()
    };
    await firebase
      .database()
      .ref("Agendamentos")
      .push(Agendamento);
    this.setState({
      Agendamento: ""
    });
  };

  render() {
    return (
      <Container>
        <div id="body-all">
          <div id="body-header">
            {this.state.Servicos.map(data => {
              return (
                <div>
                  <Row>
                    <h1>{data.data}</h1>
                  </Row>
                  <Card>
                    <Card.Body>
                      <Card.Title>{data.medico}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {data.crm}
                      </Card.Subtitle>
                      <Card.Text>
                        <Button 
                          variant="primary"
                          type="submit"
                          onSubmit={this.state.onSubmit}

                        >{data.hora}</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    );
  }
}


export default Servicos;