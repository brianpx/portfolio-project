import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import auth0 from '../../services/auth0';

  const BsNavLink = (props) => {
    const { route, title } = props
    return (
      <Link href={route}>
        <a className="nav-link port-navbar-link">{title}</a>
      </Link>
    )
  }

const Login = () => {
  return ( 
    <span onClick ={auth0.login} className="nav-link port-navbar-link clickable">Login</span>

)
  }

const Logout = () => {
  return (
    <span className="nav-link port-navbar-link clickable">Logout</span>

)
  }

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className = "port-navbar port-default absolute" color="transparent"  dark  expand="md">
          <NavbarBrand className = "port-navbar-brand"  href="/">mededSocial</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item"><BsNavLink route="/" title="Home"></BsNavLink></NavItem>
              <NavItem className="port-navbar-item"><BsNavLink route="/about" title="About"></BsNavLink></NavItem>
              <NavItem className="port-navbar-item"><BsNavLink route="/portfolio" title="Portfolio"></BsNavLink></NavItem>
              <NavItem className="port-navbar-item"><BsNavLink route="/blog" title="Blog"></BsNavLink></NavItem>
              <NavItem className="port-navbar-item"><BsNavLink route="/cv" title="CV"></BsNavLink></NavItem>

              
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}

              <NavItem className="port-navbar-item">
                <Login/>
              </NavItem>
              <NavItem className="port-navbar-item">
                <Logout/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}