import React, { useContext, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toast } from "react-bootstrap";
import MyNavbar from "./components/layout/Navbar";
import "./App.css";

import About from "./pages/About";

import Home from "./pages/Home";
import Spinner from "./components/layout/Spinner";
import NotFound from "./pages/NotFound";
import AppContext from "./context/app/appContext";

const App = () => {
  const appContext = useContext(AppContext);
  const { isLoading, setIsLoading, toast, setToast } = appContext;

  const errMsg = () => (
    <Toast
      onClose={() => setToast(null)}
      show={toast ? true : false}
      delay={toast.delay}
      autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <small>{toast.title}</small>
      </Toast.Header>
      <Toast.Body>{toast.content}</Toast.Body>
    </Toast>
  );
  return (
    <Fragment>
      {toast && errMsg()}
      <Router>
        <div className="App">
          <MyNavbar title="My Locations" />
          {isLoading && <Spinner />}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" render={About} setIsLoading={setIsLoading}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
