import React, { useState } from "react";
import { Form, Input, Label } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import './css/Login.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName !== "" && password !== "") {
            setAuthenticated(true)
            localStorage.setItem("authenticated", true);
            console.log(userName + " . " + password);
            navigate("/app");
        }
    };
    return (
        <div className="mainLoginForm">
            <div className="loginLogo"></div>
            <div className="title">
                Login
                <div className="inputUserName">
                    <Input
                        name="userName"
                        type="text"
                        placeholder="Geben Sie bitte den Benutzernamen ein"
                        onChange={(ev) => setUsername(ev.target.value)}
                        required />
                </div>
                <div className="inputPassword">
                    <Input
                        name="password"
                        type="password"
                        placeholder="Geben Sie bitte das Passwort ein"
                        onChange={(ev) => setPassword(ev.target.value)}
                        required />
                </div>
                <div className="loginSubmitBtn"><Input onClick={handleSubmit} type="submit" value="Anmelden" /></div>
            </div>
        </div>
    );
}


export default LoginForm;