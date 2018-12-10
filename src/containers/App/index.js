import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import "./App.css";
import Routes from '../Routes'

export default class App extends Component {

    state = {
        isAuthenticated: sessionStorage.getItem("authFlag") === "true",
    };

    userHasAuthenticated = authenticated => {
        sessionStorage.setItem("authFlag", authenticated);
    };

    handleLogout = event => {
        this.userHasAuthenticated("false");
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(this.state.isAuthenticated === nextState.isAuthenticated){
    //         return true;
    //     }
    //     else return false;
    // }


    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };
        return (
            <div className="App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Home</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {this.state.isAuthenticated
                                ? <Fragment>
                                    <LinkContainer to="/login">
                                        <NavItem onClick={this.handleLogout}>Logout</NavItem>
                                    </LinkContainer>
                                </Fragment>
                                : <Fragment>
                                    <LinkContainer to="/login">
                                        <NavItem>Login</NavItem>
                                    </LinkContainer>
                                </Fragment>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes childProps={childProps}/>
            </div>
        );
    }
}
