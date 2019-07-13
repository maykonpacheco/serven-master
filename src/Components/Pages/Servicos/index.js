import React, { Component } from "react";
import firebase from "../../../firebase";

import "./styles.css";
import Navbar from "../../Navbar";

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
      const { nome, hour, domingo } = doc.data();
      Especialist.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nome,
        domingo,
        hour
      });
      console.log(doc.id, " => ", doc.data());
    });
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
            <h5 className="fontColor col-12 col-sm-12 col-lg-12">
              Domingo, 12 de Abril
            </h5>
            {this.state.Especialist.map(board => (
              <div className="col-12 col-sm-12 col-lg-12">
                <div class="card">
                  <div className="card-header">
                    <h4 className="fontColor">{board.nome}</h4>
                  </div>
                  {board.domingo.map(board => (
                    <div className="card-header left-button">
                      <div class="col mb-4 mb-lg-0 text-center">
                        <div class="row">
                         {
                          <button type="submit" className="btn btn-primary">
                            {board.hour}
                          </button>
                         } 
                          {console.log("aqui", board.value)}
                        </div>
                      </div>
                    </div>
                  ))}
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
