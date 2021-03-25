import React, { useState, useEffect } from "react";
// import queryString from 'query-string';
import { Container } from 'react-bootstrap';
import { checkCookie } from '../../helpers/functionCookies';

import logo from "./logo 05.png"
import LoginPage from "./loginComponents/LoginPage"
import SingUp from "./loginComponents/Signup"
import MainPage from "./loginComponents/MainPage"

function Login({ socket }) {
    const [PageLogin, setPageLogin] = useState("Login");
    const [UsernameCheck, setUsernameCheck] = useState("");
    const [PassWordCheck, setPassWordCheck] = useState("");
    const [DataUsername, setDataUsername] = useState([]);
    const [Message, setMessage] = useState("Enter your Username!");
    const [LoginStatus, setLoginStatus] = useState(false);


    useEffect(() => {
        // const parsed = queryString.parse(window.location.search);
        // console.log(parsed);
        socket.emit("admin", ["get_info"]);
        socket.on("admin", (data) => {
            setDataUsername(data);
        });
        if (checkCookie("username")) { setPageLogin("MainPage") }
    }, [PageLogin, socket])
    useEffect(() => {
        let username = false;
        let password = false;
        DataUsername.forEach(e => {
            if (e.username === UsernameCheck) {
                username = true;
                setMessage("Correct!");
                if (e.password === PassWordCheck) {
                    password = true;
                }
            }
        })
        if (username && password) { setLoginStatus(true) } else { setLoginStatus(false) }
    }, [UsernameCheck, PassWordCheck, DataUsername])



    return (
        <Container>
            { PageLogin === "Login" ? <LoginPage logo={logo} UsernameCheck={UsernameCheck} setUsernameCheck={setUsernameCheck} Message={Message} setPassWordCheck={setPassWordCheck} LoginStatus={LoginStatus} setPageLogin={setPageLogin} />
                : PageLogin === "SignUp" ? <SingUp logo={logo} DataUsername={DataUsername} socket={socket} /> : <MainPage setPageLogin={setPageLogin} socket={socket} DataUsername={DataUsername} />
            }
        </Container >
    );
}

export default Login;

