import React, { Component } from "react";
import firebase from "../../../firebase";
//import './styles.css';
import queryString from "query-string";

class Valor extends Component {
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

  render() {
    return (
      <div>
        {this.state.boards.map(i => (
          <div className="centerService">
            <div className="col-12 col-sm-12 col-lg-12">
              <div class="card">
                <div className="card-header">
                  <h4 className="fontColor">Valor do serviço: {i.author}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Valor;
