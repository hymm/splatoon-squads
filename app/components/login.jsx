import React from 'react';
import {Button} from 'react-bootstrap';

export default class Login extends React.Component {
  render() {
    return (
      <a href="/auth/discord">
        <Button>Login</Button>
      </a>
    );
  }
}
