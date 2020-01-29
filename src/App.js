import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const getUser = () => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      console.log(error);
      return user;
    })
    .catch(err => console.log(err));
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi {getUser()}
          </p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
