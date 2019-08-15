import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import LogIn from "./pages/LogIn/LogIn"
import PostItem from './pages/PostItem/PostItem';
import RentItem from './pages/RentItem/RentItem';
import DatePick from './components/DatePick/DatePick';
import { UserProvider } from './UserContext'
import API from './utils/API'

class App extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    let user_session = localStorage.getItem("x-session-token")
    if (user_session) {
      API.getAuthenticatedUser(user_session)
        .then(userObject => {
          this.setState({ user: userObject.data })
        })
    } else {
      console.log('user not logged in')
    }
  }

  render() {
    return (
      <Router>
        <UserProvider value={this.state.user}>
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/datepick" component={DatePick} />
            <Route exact path="/PostItem" component={PostItem} />
            <Route exact path="/RentItem" component={RentItem} />
            <Route exact path="/LogIn" component={LogIn} />
            <Route exact path="/Register" component={Register} />
          </Switch>
        </UserProvider>
      </Router>
    );
  }
}
export default App;