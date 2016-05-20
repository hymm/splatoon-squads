import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Navigation from './navigation';
import UserStore from '../stores/current-user-store';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.userStore = new UserStore();
    this.userStore.getCurrentUser();
  }

  render() {
    return (
      <div>
        <DevTools />
        <Navigation user={this.userStore.currentUser} />
        <Grid>
          <Row>
            <Col>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
