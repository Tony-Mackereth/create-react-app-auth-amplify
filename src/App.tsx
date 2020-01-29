import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { CognitoUser } from '@aws-amplify/auth';
Amplify.configure(aws_exports);

const getUser = (): CognitoUser => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      console.log(user);
      return user;
    });
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi {getUser().getUsername()}
          </p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
