import React, {Component} from "react";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";

export default class FormDemo1 extends Component {
    state = {
        userName:"",
        city:"", 
        email:"",
        password:"", 
        description:""
    }

    onChangeHandler = (event) => {
        // this.setState({userName:event.target.value}) <--- if so, each input will change only this property
        // to handle different properties use the name-param of the element, but the given name-value must be the same as the state.property field-name
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }

    onSubmitHandler = (event) => {
        event.preventDefault(); // so that, submit event will not change previously set state properties
        document.getElementById("submittedValue").innerHTML = "<h3>User name is " + this.state.userName + ", lives in city " + this.state.city + "</h3>";
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <Container size="sm" className="d-grid gap-1">
                        <Row>
                            <Col>
                                <Label>User name</Label>
                            </Col>
                            <Col>
                                <Input 
                                    name="userName" 
                                    onChange={this.onChangeHandler} 
                                    type="text"
                                    placeHolder="Enter your user name"
                                    required/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label>Password</Label>
                            </Col>
                            <Col>
                                <Input 
                                    name="password" 
                                    onChange={this.onChangeHandler} 
                                    type="password"
                                    placeHolder="Enter your user password"
                                    required/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label>City</Label>
                            </Col>
                            <Col>
                                <Input 
                                    name="city" 
                                    onChange={this.onChangeHandler} 
                                    type="text"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label>Description</Label>
                            </Col>
                            <Col>
                                <Input name="description" onChange={this.onChangeHandler} type="text"/>
                            </Col>
                        </Row>
                        <Input style={{width: 60}} type="submit" value="Save"/>
                    </Container>
                </Form>
                <div id="submittedValue"></div>
            </div>
        );
    }
}