import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class MainNavBar extends Component {
    render() {
        return (
            <div>
              <Navbar>
                <NavbarBrand>MIJB ReactApp</NavbarBrand>
                <Collapse isOpen={true}>
                  <Nav className="ml-right" navbar>
                    <NavItem>
                      <NavLink>
                        <Link to ="form1">Form Demo 1</Link>
                      </NavLink>
                    </NavItem>
                    <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart}/>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
    }
}