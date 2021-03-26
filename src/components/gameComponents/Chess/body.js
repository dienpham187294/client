import React, { useEffect } from "react";
// import { Application } from "pixi.js";
// import * as PIXI from "pixi.js";
// import { getCookie } from "../../../helpers/functionCookies"
import { Read } from "../../../helpers/js_speak";
import "./Body.css"
let arrAllGameData = [];
function Mbody({ socket, gamePlayData }) {

    useEffect(() => {
        arrAllGameData = gamePlayData;
        console.log(arrAllGameData[1])
        Read("Welcome to the game!")
    }, [gamePlayData])




    return <div id="ChessBody">Test New</div>;
}

export default Mbody




