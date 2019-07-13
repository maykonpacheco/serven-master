import React, { Component } from 'react';

import './styles.css';

import { Container } from 'react-bootstrap';



class Finalize extends Component {
  render() {
    return (
      <Container>
        <header className='header-finalize'>
          <h1>Psiquiatria</h1>
          <p>Segunda, 15/04 às 07:00</p>
        </header>
        <div className='body-finalize'>
          <div className='body-client'>
            
          <h3>Maykon Pacheco</h3>
          <p>CPF: 04825051170</p>
            <span className='row-body'></span>
          </div>
          <div className='body-doctor'> 
          <h3>Douglas Wenzel Rodrigues</h3>
          <p>Crefito-SP 224937</p>
            <span className='row-body'></span>
          </div>
          <div>
          <p>Valor do serviço:</p>
          <h4>R$74,00</h4>
          <p>Você pode pagar online com cartão de crédito ou no dia de sua visita com dinheiro ou cartão de débito em até 10x sem juros.</p>
          </div>
        </div>
        <button>FINALIZAR AGENDAMENTO</button>
      </Container>
    );
  }
}

export default Finalize;
