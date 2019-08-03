import React from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SignIn />
    </div>
  );
}

export default App;
