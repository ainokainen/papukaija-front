import React, { Component } from 'react';
/* import classNames from 'classnames';
import keycode from 'keycode';
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import all from 'prop-types-extra/lib/all';
import warning from 'warning'; */

/* import {
  bsClass,
  bsStyles,
  getClassSet,
  prefix,
  splitBsProps
} from './utils/bootstrapUtils';
import createChainedFunction from './utils/createChainedFunction';
import ValidComponentChildren from './utils/ValidComponentChildren'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import Popper from "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Nav,
        NavItem,
        NavDropdown,
        MenuItem} from "react-bootstrap";
import  "./Navigation.css";

class Navigation extends Component {
    handleSelect(eventKey, event) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
    }
    render() {
        return (
            <div className="row">
            <Nav bsStyle="tabs" activeKey="1" onSelect={k=>this.handleSelect(k)}>
                <NavItem className="navitem" eventKey="1" href="/home">
                NavItem 1
                </NavItem>
                <NavItem eventKey="2" href="Item">
                NavItem 2
                </NavItem>
                <NavItem eventKey="3" disabled>
                NavItem dis
                </NavItem>
            <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                <MenuItem eventKey="4.1">Action</MenuItem>
                <MenuItem eventKey="4.2">Another action</MenuItem>
                <MenuItem eventKey="4.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      </div>
    );
  }
}

export default Navigation ;
