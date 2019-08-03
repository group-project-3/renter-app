import React from 'react';
import SignIn from './components/SignIn';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import LogIn from "./pages/LogIn/LogIn"
import PostItem from './pages/PostItem/PostItem';
import RentItem from './pages/RentItem/RentItem';
import AccountSettings from './pages/AccountSettings/AccountSettings';

function App() {
  return (

      <Router>
      <Nav />
      <Jumbotron />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/PostItem" component={PostItem} />
        <Route exact path="/RentItem" component={RentItem} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/AccountSettings" component={AccountSettings} />
      </Switch>
      </Router>

  );
}

export default App;
