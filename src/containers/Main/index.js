import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Radio} from "react-bootstrap";
import "./Main.css";
import axios from 'axios';
import Canvas from "../../components/Canvas";

export default class Main extends Component {
    state = {
        isLoading: false,
        // x: 0,
        // y: null,
        // r: 4
        points: []
    };
    message = null;

    validateForm() {
        return true
    }

    interact = event => {

    };

    componentDidMount() {
        console.log(this.state.points);
        axios.get('localhost:8080/results/get',{withCredentials:true})
            .then(res => {
                console.log(this.state.points);
                this.setState({points: res.data})
            })
    }

    validate() {
    }

    handleChange = event => {
        if (event.target.value < -3 || event.target.value > 5) {
            this.message = "Введенные данные некорректны"
        } else {
            this.message = null;
            this.setState({
                [event.target.id]: event.target.value
            });
        }
    };

    render() {
        return (
            <div className="main">
                <div className="form container" id={"Form"}>
                    <form onSubmit={this.validate()}>
                        <FormGroup id={"x"} bsSize="large">
                            <ControlLabel>Выберите координату X:</ControlLabel><br/>
                            <Radio name="xRadio" inline>
                                -4
                            </Radio>{' '}
                            <Radio name="xRadio" inline>
                                -3
                            </Radio>{' '}
                            <Radio name="xRadio" inline>
                                -2
                            </Radio><br/>
                            <Radio name="xRadio" inline>
                                -1
                            </Radio>{' '}
                            <Radio name="xRadio" inline>
                                0
                            </Radio>{' '}
                            <Radio name="xRadio" inline>
                                1
                            </Radio><br/>
                            <Radio name="xRadio" inline>
                                2
                            </Radio>{' '}
                            <Radio name="xRadio" inline>
                                3
                            </Radio>{' '}
                            <Radio name="xRadio" inline>
                                4
                            </Radio>
                        </FormGroup>
                        <FormGroup id={"y"} controlId="y" bsSize="large">
                            <ControlLabel>Введите координату Y:</ControlLabel>
                            <FormControl
                                type="text"
                                // value={this.state.y}
                                onChange={this.handleChange}
                                placeholder={"Введите число в пределах [-3;5]"}
                            />
                            <ControlLabel style={{color: "crimson"}}>{this.message}</ControlLabel>
                        </FormGroup>
                        <FormGroup id={"x"} controlId={"r"} bsSize="large">
                            <ControlLabel>Выберите радиус R:</ControlLabel><br/>
                            <Radio name="rRadio" inline>
                                1
                            </Radio>{' '}
                            <Radio name="rRadio" inline>
                                2
                            </Radio>{' '}
                            <Radio name="rRadio" inline>
                                3
                            </Radio>{' '}
                            <Radio name="rRadio" inline>
                                4
                            </Radio>
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Добавить точку
                        </Button>
                    </form>
                </div>
                {/*<Canvas*/}
                {/*id={"graph"}*/}
                {/*classname={"graph"}*/}
                {/*context={this}*/}

                {/*/>*/}
                <div id={"pointTable"} className={"container table"}>

                </div>
            </div>
        );
    }
}