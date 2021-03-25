import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import Mheader from "./header";
import Mbody from "./body"
import Mfooter from "./footer";
function MonoGameSence({ gamePlayData, setGamePlayData, setMessageCheck, messageCheck, fileRead, message, contextCheck, setContextCheck, hostOfGame, socket, listToEmit }) {
    const [gamedata, setGamedata] = useState("")
    useEffect(() => {
        setGamedata(JSON.stringify(gamePlayData))
    }, [gamePlayData]);

    return (
        <Container>
            <p className="border border-primary mt-3" />
            <Mheader gamePlayData={gamePlayData} setMessageCheck={setMessageCheck} messageCheck={messageCheck} socket={socket} />
            <p className="border border-primary mt-3" />
            <Mbody gamePlayData={gamePlayData} fileRead={fileRead} setMessageCheck={setMessageCheck} messageCheck={messageCheck} message={message} contextCheck={contextCheck} setContextCheck={setContextCheck} hostOfGame={hostOfGame} socket={socket} listToEmit={listToEmit} />
            <p className="border border-primary mt-3" />
            <Mfooter />
            <p className="border border-primary mt-3" />
            <div>{gamedata}</div>
        </Container>
    );
}

export default MonoGameSence;