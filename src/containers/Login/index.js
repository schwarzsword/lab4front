import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./Login.css";
import $ from 'jquery';
import axios from "axios";
import LoaderButton from "../../components/LoaderButton";

export default class Login extends Component {
    state = {
        login: "",
        password: "",
    };

    validateForm() {
        return this.state.login.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    rendMessage() {
        document.getElementById("message").innerText = "Неверное имя пользователя или пароль";
    }

    // settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "http://localhost:8080/login",
    //     "method": "POST",
    //     "headers": {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //         "Authorization": "Basic Og==",
    //         "cache-control": "no-cache",
    //     },
    //     "data": {
    //         "login": this.state.login,
    //         "password": this.state.password
    //     }
    // };


    handleSubmit = event => {
        event.preventDefault();
        // this.props.userHasAuthenticated("true");
        // $.ajax(this.settings).done(function (response) {
        //     console.log(response);
        // });
        // axios.post("localhost:8080/login", {"login": this.state.login, "password": this.state.password}, {
        //     withCredentials:true,
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //         "Authorization": "Basic Og==",
        //         "cache-control": "no-cache",
        //     }
        // }).then(resp => console.log(resp));
        this.props.history.push("/main");

    };

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="login" bsSize="large">
                        <ControlLabel>Login</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.login}
                            onChange={this.handleChange}
                            placeholder={"Введите имя пользователя"}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in…"
                    />

                </form>
                <ControlLabel
                    id={"message"}> {this.props.isAuthenticated ? "Пользователь авторизован" : "Пользователь не авторизован"}</ControlLabel>
            </div>
        );
    }
}
