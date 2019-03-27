import React, { Component } from 'reactn';
import { Card, Button, Container } from 'semantic-ui-react';
const shared = require('./helpers/auth');

class SignIn extends Component {
  render() {
    return (
      <Container className="margin-top-65">
       <Card className="content-center">
           <Card.Content className="center">
                <p>Welcome to Graphite Business</p>
               <Button onClick={shared.handleSignIn} secondary>Sign In</Button>
           </Card.Content>
       </Card>
      </Container>
    );
  }
}

export default SignIn;
