import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const getUser = () => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      console.log(user);
      return user;
    })
    .catch(error => console.log(error));
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi {getUser().username}
          </p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
