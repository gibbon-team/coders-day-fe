import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "./container/app/App";

export const Root = (props) => {

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/app" component={App} />
        </Switch>
      </BrowserRouter>
  )
}
