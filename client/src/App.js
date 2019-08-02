import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import LogIn from "./pages/LogIn/LogIn"


function App() {
  return (

      <Router>
      <Nav />
      <Jumbotron />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/Register" component={Register} />
      </Switch>
      </Router>

  );
}

export default App;
