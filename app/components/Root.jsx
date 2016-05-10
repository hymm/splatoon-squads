import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap-loader';

export default class Root extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <Button>Login</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}
