import React, {Component} from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";

export default class LoginModul extends Component {

    state = {
        userName: "", password: ""
    }

    inputHandler = (event) => {
        // this.setState({userName:event.target.value}) <--- if so, each input will change only this property
        // to handle different properties use the name-param of the element, but the given name-value must be the same as the state.property field-name
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    renderLogin() {
        return(
        <div className="LoginForm">
            {this.state.userName !== "" && this.state.password !== ""
             ?
             <BrowserRouter>
                <Navigate to="/App" replace={true}/>
             </BrowserRouter>
             :
                <Form onSubmit={this.handleSubmit}>
                    <Container size="sm" className="d-grid gap-1">
                        <Row>
                            <Col>
                                <Label>Benutzer</Label>
                            </Col>
                            <Col>
                                <Input 
                                    name="userName" 
                                    type="text"
                                    placeholder="Geben Sie bitte den Benutzernamen ein"
                                    onChange={this.inputHandler}
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
                                    type="password"
                                    placeholder="Geben Sie bitte das Passwort ein"
                                    onChange={this.inputHandler}
                                    required/>
                            </Col>
                        </Row>
                        <Input style={{width: 60}} type="submit" value="Login"/>
                    </Container>
                </Form>
            }
        </div>
        );
    }

    render() {
        return(
            this.renderLogin()
        );
    }
}