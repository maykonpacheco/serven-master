import React, { Component } from "react";
import firebase from "../../../firebase";
//import './styles.css';

import { Container } from "react-bootstrap";
import Navbar from "../../Navbar";
//import Footer from "../../Footer";
import queryString from "query-string";

class Finalize extends Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Especialist");
    this.unsubscribe = null;
    this.state = {
      Especialist: [],
      key: "",
      especialidade: "",
      Data: '',
      Hora: '',
      especialista: '',
      valor: ''
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { especialidade } = this.state;

    this.ref.add({
      especialidade
    }).then((docRef) => {
      this.setState({
        especialidade: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  onCollectionUpdate = querySnapshot => {
    const Especialist = [];
    querySnapshot.forEach(doc => {
      const {
        nome,
        especialidade,
        segunda,
        domingo,
        terca,
        quarta,
        quinta,
        sexta,
        sabado
      } = doc.data();
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
      //console.log(doc.id, " => ", doc.data());
    });
    //console.log(Especialist);
    this.setState({
      Especialist
    });
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const { nome } = values;
    const resumoRef = firebase.firestore().collection("Especialist");
    const query = resumoRef.where("nome", "==", nome);
    query.get().then(this.onCollectionUpdate);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <form onSubmit={this.onSubmit}>
        <div className="centerService">
            <h5 className="fontData fontColor col-12 col-sm-12 col-lg-12">
             Resumo
            </h5>         
          </div>
          {this.state.Especialist.map(board => (
          <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">Especialidade: {board.especialidade}</h4>
                  </div>
                </div>
              </div>
           </div>  
           ))}   
            {this.state.Especialist.map(board => (
          <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    {console.log("Aqui", board.domingo[0].hour)}
                    <h4 className="fontColor">Data e hora: Quinta-feira {board.hour}</h4>
                    </div>
                </div>
              </div>
          </div>
             ))} 
           {this.state.Especialist.map(board => (
          <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">Profissional: {board.nome} </h4>
                  </div>
                </div>
              </div>
          </div>
      ))} 
          <div className="centerService">
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">Valor do serviço:  R$74,00</h4>
                  </div>
                  
                </div>
              </div>
          </div >
         
          <div className="text-center">
        <button  type="submit" className="btn btn-primary text-center">Finalizar Agendamento</button>
        </div>
        </form>
        </Container>
      </div>
      
    );
  }
}

export default Finalize;
