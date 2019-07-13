import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './Components/Pages/Main';
import Servicos from './Components/Pages/Servicos';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Finalize from './Components/Pages/Finalize';


const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Servicos" component={Servicos} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Finalize" component={Finalize} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
