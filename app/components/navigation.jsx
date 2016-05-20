import React from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {observer} from 'mobx-react';


@observer
export default class Navigation extends React.Component {
  getUserItem() {
    console.log(this.props.user)
    if (this.props.user && Object.keys(this.props.user).length != 0) {
      return (
        <NavDropdown eventKey={3} title={this.props.user.discord.username} id="basic-nav-dropdown">
          <LinkContainer to={'/users/' + this.props.user._id + '/profile/'} >
            <MenuItem eventKey={3.1}>Profile</MenuItem>
          </LinkContainer>
          <MenuItem divider/>
          <MenuItem eventKey={3.2} href="/logout">Logout</MenuItem>
        </NavDropdown>
      );
    } else {
      return (
        <NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/auth/discord">
            <div className="btn btn-default" style={{background: "#7289DA"}} >
              <img src={require("../img/Discord-Logo+Wordmark-White.png")} style={{width: 100}} alt="Discord"/>
            </div>
          </MenuItem>
        </NavDropdown>
      );
    }
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>
              Splat
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/users'>
              <NavItem eventKey={2}>Users</NavItem>
            </LinkContainer>
            <LinkContainer to='/teams'>
              <NavItem eventKey={3}>Teams</NavItem>
            </LinkContainer>
            <LinkContainer to='/events'>
              <NavItem eventKey={4}>Events</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            {this.getUserItem()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
