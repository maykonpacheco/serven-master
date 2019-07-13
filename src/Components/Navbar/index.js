import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import BarChart from "@material-ui/icons/BarChart";
import SentimentSatisfied from "@material-ui/icons/SentimentSatisfied";
import AppsIcon from "@material-ui/icons/Apps";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import firebase from "../../firebase";

import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/components.css";

import "./styles.css";


class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="section">
          <div class="section-header">
            <h1>Seven</h1>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  <Tooltip title="Agendamentos">
                    <BarChart />
                  </Tooltip>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Especialist">
                  <Tooltip title="Especialistas">
                    <SentimentSatisfied />
                  </Tooltip>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Queries">
                  <Tooltip title="Consultas">
                    <AppsIcon />
                  </Tooltip>
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href=""
                  onClick={() => firebase.auth().signOut()}
                >
                  SAIR
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
