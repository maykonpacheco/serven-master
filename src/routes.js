import React from "react";
import { Provider } from 'react-redux';
import Store from './store';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './Components/Pages/Main';
import Servicos from './Components/Pages/Servicos';
import SignIn from './Components/Pages/SignIn/Login';
import SignUp from './Components/Pages/SignUp';
import Finalize from './Components/Pages/Finalize';

import { AuthProvider } from "./Components/Pages/SignIn/Auth";
import PrivateRoute from "./privateRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Sucesso from './Components/Pages/Sucesso';

const Routes = () => {
  return (
    <Provider store={Store}>
      <AuthProvider>
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/servicos" component={Servicos} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <PrivateRoute exact path="/finalizar-agendamento" component={Finalize} />
          <Route exact path="/sucesso" component={Sucesso} />
        </Router>
      </AuthProvider>
    </Provider>
  );
};



export default Routes;

