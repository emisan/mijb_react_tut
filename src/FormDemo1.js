import React, { Component } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default class FormDemo1 extends Component {
    state = {
        userName: "",
        city: "",
        email: "",
        password: "",
        description: ""
    }

    onChangeHandler = (event) => {
        // this.setState({userName:event.target.value}) <--- if so, each input will change only this property
        // to handle different properties use the name-param of the element, but the given name-value must be the same as the state.property field-name
        let name = event.target.name;
        name = name.slice(0, name.length-1);
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    onSubmitHandler = (elementId, event) => {
        event.preventDefault(); // so that, submit event will not change previously set state properties
        document.getElementById(elementId).innerHTML = "<h3>User name is " + this.state.userName + ", lives in city " + this.state.city + "</h3>";
    }

    render() {
        return (
            <div>
                <Form onSubmit={(evt) => this.onSubmitHandler("submittedValue1", evt)}>
                    <Container size="sm" className="d-grid gap-1">
                        <Row>
                            <Col>
                                <Label>User name</Label>
                            </Col>
                            <Col>
                                <Input
                                    name="userName1"
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    placeholder="Enter your user name"
                                    required />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label>Password</Label>
                            </Col>
                            <Col>
                                <Input
                                    name="password1"
                                    onChange={this.onChangeHandler}
                                    type="password"
                                    placeholder="Enter your user password"
                                    required />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label>City</Label>
                            </Col>
                            <Col>
                                <Input
                                    name="city1"
                                    onChange={this.onChangeHandler}
                                    type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label>Description</Label>
                            </Col>
                            <Col>
                                <Input name="description1" onChange={this.onChangeHandler} type="text" />
                            </Col>
                        </Row>
                        <Input style={{ width: 60 }} type="submit" value="Save" />
                    </Container>
                </Form>
                <div id="submittedValue1"></div>
                <Form onSubmit={(evt) => this.onSubmitHandler("submittedValue2", evt)}>
                    <FormGroup>
                        <Label>User name</Label>
                        <Input
                            name="userName2"
                            onChange={this.onChangeHandler}
                            type="text"
                            placeholder="Enter your user name"
                            required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            name="password2"
                            onChange={this.onChangeHandler}
                            type="password"
                            placeholder="Enter your user password"
                            required />
                    </FormGroup>
                    <FormGroup>
                        <Label>City</Label>
                        <Input
                            name="city2"
                            onChange={this.onChangeHandler}
                            type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input name="description2" onChange={this.onChangeHandler} type="text" />
                    </FormGroup>
                    <Input style={{ width: 60 }} type="submit" value="Save" />
                </Form>
                <div id="submittedValue2"></div>
            </div>
        );
    }
}