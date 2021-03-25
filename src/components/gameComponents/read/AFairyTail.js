import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import MonoGameSence from './Gameplay';
import MonopolyLobby from './Lobby';
import { Dictaphone } from '../../../helpers/RegRead';
import { checkCookie, getCookie } from "../../../helpers/functionCookies";



function FairyTail({ socket }) {
    const [message, setMessage] = useState('Message first');
    const [messageCheck, setMessageCheck] = useState("!!!");
    const [contextCheck, setContextCheck] = useState([])
    const [sence, setSence] = useState(true); //First lobby sence is true
    const [room, setRoom] = useState([]);
    const [jionroom, setjionRoom] = useState("");
    const [start, setStart] = useState("");
    const [listToEmit, setListToEmit] = useState([]);
    const [gamePlayData, setGamePlayData] = useState([]);
    const [hostOfGame, setHostOfGame] = useState("");
    const [fileRead, setFileRead] = useState();
    useEffect(() => {
        if (!checkCookie("username")) { document.getElementById("monopoly_btnHome").click() }
        //Listen when in lobby 
        if (sence) {
            socket.emit("read", ["get_info"]);
            socket.on("read", (data) => {
                setRoom(data);
            });
            socket.on("updateRoomRead", (data) => {
                setRoom(data);
            })
            socket.on("StartPlayRead", (data) => {
                setSence(false);
                setGamePlayData(data);//Set name of player in header
                setHostOfGame(data[0].id)
                let arrTempListToEmit = [];

                if (data !== "undefined") {

                    data[0].members.forEach(ee => {
                        if (ee.status) {
                            arrTempListToEmit.push(ee.id);
                        }
                    })
                    setListToEmit(arrTempListToEmit);
                    socket.emit("read", ["ReadFile", arrTempListToEmit]);
                }
            })
        }    //Listen when in gamePlay
        else {
            socket.on("updateGamePlayRead", (data) => {
                setGamePlayData(data);
            })
            socket.on("ReadFile", (data) => {
                setFileRead(data);
            })
        }

    }, [sence, socket]);


    useEffect(() => {
        if (typeof (messageCheck) === "string") {
            if (checkCmd(message.toLowerCase(), messageCheck)) {
                if (messageCheck === 'create room') {
                    socket.emit("read", ["createRoom", socket.id, getCookie("username")]);
                    setMessageCheck("!!!");
                    setContextCheck([""]);
                }
            }
        }

    }, [message, messageCheck, socket]);
    useEffect(() => {
        if (jionroom.length > 3) {
            socket.emit("read", ["jionRoom", socket.id, getCookie("username"), jionroom])
        }
    }, [jionroom, socket]);
    useEffect(() => {
        if (start.length > 3) {
            socket.emit("read", ["start", getCookie("username")])
        }
    }, [start, socket]);

    function checkCmd(message, messageCheck) {
        let i = 0;
        let arr = messageCheck.toLowerCase().split(" ");
        arr.forEach(e => {
            if (message.indexOf(e) < 0) { i += 1 };
        });
        if (i / arr.length * 100 < 40) {
            return true
        }
        return false
    }

    return (
        <Container>
            <Dictaphone setMessage={setMessage} messageCheck={messageCheck} setMessageCheck={setMessageCheck} socket={socket} username={getCookie("username")} contextCheck={contextCheck} setContextCheck={setContextCheck} />
            {sence
                ? <MonopolyLobby room={room} username={getCookie("username")} setjionRoom={setjionRoom} setStart={setStart} setMessageCheck={setMessageCheck} messageCheck={messageCheck} />
                : <MonoGameSence gamePlayData={gamePlayData} setGamePlayData={setGamePlayData} setMessageCheck={setMessageCheck} messageCheck={messageCheck} fileRead={fileRead} message={message} setMessage={setMessage} contextCheck={contextCheck} setContextCheck={setContextCheck} hostOfGame={hostOfGame} socket={socket} listToEmit={listToEmit} />
            }
        </Container>
    );
}

export default FairyTail;