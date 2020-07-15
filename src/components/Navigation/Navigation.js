import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../../App";


const Navigation = () => {
  return (
    <Fragment>
      <BrowserRouter>
   

        <Suspense fallback={() => <h1>Loading ...</h1>}>
          <Switch>
            <Route path="/" exact component={App}></Route>

          </Switch>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

export default Navigation;