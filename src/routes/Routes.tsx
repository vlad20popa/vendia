import React, {FC} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {LoginPage} from "../pages/login/LoginPage";
import App from "../App";

export const Routes: FC = () => {

  return(
    <Switch>
      <Route exact path="/home" component={App}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route path="/">
        <Redirect to="/home"/>
      </Route>
    </Switch>
  );
}