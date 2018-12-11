import React, {Component} from "react";
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";
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


    handleSubmit = event => {
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:8080/login",
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic Og==",
                "cache-control": "no-cache",
                "Postman-Token": "b70d960f-4f61-486c-9310-7c5ced49cd0d"
            },
            "data": {
                "login": this.state.login,
                "password": this.state.password
            }
        };

        event.preventDefault();
        // this.props.userHasAuthenticated("true");
        $.ajax(settings).done(resp => {
            this.props.userHasAuthenticated(resp.toString());
            console.log(resp.toString());
            // this.props.parent.render();
            if(this.props.isAuthenticated){
                this.props.history.push("/main");
            }
            else this.rendMessage()
        });

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
