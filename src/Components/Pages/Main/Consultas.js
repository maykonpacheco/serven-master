import React, { Component } from "react";
import firebase from "../../../firebase";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import BotaoAgenda from "./botaoAgenda";
import "../../../assets/css/style.css";
import "../../../assets/css/components.css";


import { connect } from 'react-redux';

class Consultas extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("boards");
    this.unsubscribe = null;
    this.state = {
      boards: [],
      key: ""
    };
  }

  onCollectionUpdate = querySnapshot => {
    const boards = [];
    querySnapshot.forEach(doc => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author
      });
    });
    this.setState({
      boards
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  agendar = board => {
    this.props.dispatch({ type: 'SET_QUERY_TITLE', payload: board.title });
    this.props.dispatch({ type: 'SET_QUERY_VALUE', payload: board.author });
  };

  render() {
   

    return (
      <Container>
        {this.state.boards.map((board, index) => (
          <div className="col-12 col-sm-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="fontColor">{board.title}</h4>
               
                <div className="card-header-action">
                  <Link
                    className="btn"
                  >
                    R$ {board.author}
                  </Link>
                </div>
                <div className="card-header-action">
                  <BotaoAgenda onClick={() => this.agendar(board)} />
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  let { title, value } = state.queries;

  return {
    title,
    value
  };
};

export default connect(mapStateToProps)(Consultas);
