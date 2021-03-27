import React, { useState, useEffect } from "react";
// import { Application } from "pixi.js";
// import * as PIXI from "pixi.js";
// import { getCookie } from "../../../helpers/functionCookies"
import { Key } from "../../../helpers/Key"
import CheckMassageAndCommand from "../../../helpers/CheckMessage"
// import RandomInt from "../../../helpers/randomInt"
// import { Read } from "../../../helpers/js_speak";
import Sentences1000 from "./1000sentence"
import "./Body.css"
function Mbody({ socket, gamePlayData, message, IDofRoom, ArrIDofAllMemberInRoom }) {
    const [LearnNowData, SetLearnNowData] = useState([])
    const [LearnNowData_Anwer, SetLearnNowData_Anwer] = useState("")
    useEffect(() => {
        socket.on("LearnNow", (data) => {
            // console.log(data);
            SetLearnNowData(data)
        });
    }, [socket])
    useEffect(() => {
        if (CheckMassageAndCommand(message, LearnNowData_Anwer, 50)[0]) {
            document.getElementById("audioBTN").play();
        }
    }, [message, LearnNowData_Anwer])
    return <div id="LearnChessBody">
        <div> <audio id="audioBTN" controls style={{ display: "none" }} src={require("./correct.wav")}></audio></div>
        {/* <div>{TimeToCountDown} | {TimeToAnwer} | {Score}</div>
        <div><h5> {Question}</h5></div> */}
        {LearnNowData.length > 0 ? <div id="LearnChessBody_LearnNow">{showLearnNow(SetLearnNowData, LearnNowData, SetLearnNowData_Anwer, LearnNowData_Anwer, socket, IDofRoom)}</div> : ""}
        <div id="LearnChessBody_ArrOfAnwer">{arrofAnwer_(Sentences1000(), IDofRoom, socket, ArrIDofAllMemberInRoom, LearnNow)}</div>

    </div>;
}

export default Mbody

function arrofAnwer_(arrTotal, IDofRoom, Socket, ArrIDofAllMemberInRoom, LearnNow) {
    let arrShow = []
    for (let i = 0; i < arrTotal.length / 10; i++) {
        let arr = [];
        for (let j = i * 10; j < i * 10 + 10; j++) {
            if (j < arrTotal.length) {
                arr.push(arrTotal[j])
            }
        }
        let Show = arr.map((e, index) => <div key={index} ><p key={index + "1"}>{e.VN}</p><p key={index + "2"}>{e.EN}</p></div >);
        arrShow.push(<p key={Key()} className="border border-danger mt-3" />)
        arrShow.push(<h5 key={Key()}>Level: {i + 1}</h5>)
        if (IDofRoom === Socket.id) {
            arrShow.push(<button className="btn btn-outline-primary" onClick={() => LearnNow(arr, Socket, IDofRoom, ArrIDofAllMemberInRoom)} key={Key()}>Learn Now</button>)
        }
        arrShow.push(<p key={Key()} className="border border-danger mt-3" />)
        arrShow.push(Show)
    }

    return arrShow
}
function LearnNow(arr, socket, IDofRoom, ArrIDofAllMemberInRoom) {
    socket.emit("chess", ["LearnNow", IDofRoom, ArrIDofAllMemberInRoom, arr]);
}

function showLearnNow(SetLearnNowData, LearnNowData, SetLearnNowData_Anwer, LearnNowData_Anwer, socket, IDofRoom) {
    let arrShow = [];
    arrShow.push(<h5>Learning now!</h5>)
    if (IDofRoom === socket.id) {
        arrShow.push(<button onClick={() => {
            SetLearnNowData([])
        }} className="btn btn-outline-danger">Back</button>)
    }
    arrShow.push(<br />)
    let Show = LearnNowData.map((e, index) => <div style={{ backgroundColor: LearnNowData_Anwer === e.EN ? "yellow" : "transparent" }} onClick={() => { SetLearnNowData_Anwer(e.EN) }} key={index} ><p key={index + "1"}>{e.VN}</p><p key={index + "2"}>{e.EN}</p></div >);
    arrShow.push(Show)
    return arrShow
}
// // function ReturnSentence(Sentence) {
// //     let Res = "";
// //     let Arr1 = Sentence.split("");
// //     // console.log(Arr1)
// //     let ArrRes = []
// //     Arr1.forEach(e => {
// //         if (e !== " ") {
// //             if (RandomInt(0, 1) === 1) {
// //                 ArrRes.push("_")
// //             } else { ArrRes.push(e) }
// //         } else { ArrRes.push(e) }
// //     })

// //     Res = ArrRes.toString().split(",").join("");
// //     // console.log(Res)
// //     return Res
// // }
// console.log(ReturnSentence("How are you?"))