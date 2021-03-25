import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import "./Gameplay.css";
import Mheader from "./header";
import Mbody from "./body"
import Mfooter from "./footer";
function MonoGameSence({ gamePlayData, setMessageCheck, messageCheck, socket, message,ArrIDofAllMemberInRoom,IDofRoom }) {
    const [gamedata, setGamedata] = useState("")
    useEffect(() => {
        setGamedata(JSON.stringify(gamePlayData))
    }, [gamePlayData]);

    return (
        <Container>
            <p className="border border-primary mt-3" />
            <Mheader gamePlayData={gamePlayData} setMessageCheck={setMessageCheck} messageCheck={messageCheck} />
            <p className="border border-primary mt-3" />
            <Mbody gamePlayData={gamePlayData} socket={socket} message={message} ArrIDofAllMemberInRoom={ArrIDofAllMemberInRoom} IDofRoom={IDofRoom} />
            <p className="border border-primary mt-3" />
            <Mfooter />
            <p className="border border-primary mt-3" />
            <div>{gamedata}</div>
        </Container>
    );
}

export default MonoGameSence;