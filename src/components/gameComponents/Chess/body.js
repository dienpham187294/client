import React, { useState, useEffect } from "react";
// import { Application } from "pixi.js";
// import * as PIXI from "pixi.js";
import { getCookie } from "../../../helpers/functionCookies"
import CheckMassageAndCommand from "../../../helpers/CheckMessage"
import RandomInt from "../../../helpers/randomInt"
// import { Read } from "../../../helpers/js_speak";
import Sentences1000 from "./1000sentence"
import "./Body.css"
let ArrofSentence = [];
let AnwertoSay = "-";
let AllMessageSave = "";
function Mbody({ socket, gamePlayData, message, IDofRoom, ArrIDofAllMemberInRoom }) {
    const [Level, SetLevel] = useState(1)
    const [Score, SetScore] = useState(0)
    const [StatusToPlay, SetStatusToPlay] = useState(true)
    const [TimeToCountDown, SetTimeToCountDown] = useState(45)
    const [TimeToAnwer, SetTimeToAnwer] = useState(15)
    const [ArrOfSentenceUse, SetArrOfSentenceUse] = useState([])
    const [Question, SetQuestion] = useState("")
    const [AnswerCorrect, SetAnswerCorrect] = useState("")
    const [AnswerChoose, SetAnswerChoose] = useState("")
    const [ArrOfAnwer, SetArrOfAnwer] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            SetTimeToCountDown(Time => Time - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval1 = setInterval(() => {
            SetTimeToAnwer(Time => Time - 1);
        }, 1000);
        return () => clearInterval(interval1);
    }, []);
    useEffect(() => {
        if (TimeToAnwer === 0 && StatusToPlay) {
            SetTimeToAnwer(15);
            // document.getElementById("audioBTN").play();
            if (ArrOfSentenceUse.length > 0) {
                let arrTemp = [];
                ArrOfSentenceUse.forEach((e, index) => {
                    arrTemp.push(index)
                })
                let arrUse = arrTemp.sort(() => Math.random() - 0.5);
                let Random = RandomInt(0, 3)
                SetQuestion(ArrOfSentenceUse[arrUse[Random]].VN)
                SetAnswerCorrect(ArrOfSentenceUse[arrUse[Random]].EN)
                // Read(ArrOfSentenceUse[arrUse[Random]].EN)
                let ArrOfAnwers = [];
                ArrOfAnwers.push(ArrOfSentenceUse[arrUse[0]].EN)
                ArrOfAnwers.push(ArrOfSentenceUse[arrUse[1]].EN)
                ArrOfAnwers.push(ArrOfSentenceUse[arrUse[2]].EN)
                ArrOfAnwers.push(ArrOfSentenceUse[arrUse[3]].EN)
                SetArrOfAnwer(ArrOfAnwers)
            }
        }
    }, [TimeToAnwer, StatusToPlay, ArrOfSentenceUse]);
    useEffect(() => {
        if (TimeToCountDown === 0) {
            SetStatusToPlay(false)
        }
    }, [TimeToCountDown]);
    useEffect(() => {
        if (Score > Level * 10 / 2) {
            SetLevel(Level => Level + 1);
            socket.emit("chess", ["UpLevel", IDofRoom, getCookie("username"), ArrIDofAllMemberInRoom]);
        }
    }, [Score, Level, IDofRoom, ArrIDofAllMemberInRoom, socket]);
    useEffect(() => {
        ArrofSentence = Sentences1000();
        let ArrLevel = [];
        for (let i = 0; i < Level * 10; i++) {
            ArrLevel.push(ArrofSentence[i])
        }
        SetArrOfSentenceUse(ArrLevel)
    }, [Level]);
    useEffect(() => {
        ArrofSentence = Sentences1000();
        let ArrLevel = [];
        for (let i = 0; i < 10; i++) {
            ArrLevel.push(ArrofSentence[i])
        }
        SetArrOfSentenceUse(ArrLevel)
    }, [])
    useEffect(() => {
        if (ArrOfSentenceUse.length > 0) {
            let arrTemp = [];
            ArrOfSentenceUse.forEach((e, index) => {
                arrTemp.push(index)
            })
            let arrUse = arrTemp.sort(() => Math.random() - 0.5);
            let Random = RandomInt(0, 3)
            SetQuestion(ArrOfSentenceUse[arrUse[Random]].VN)
            SetAnswerCorrect(ArrOfSentenceUse[arrUse[Random]].EN)
            // Read(ArrOfSentenceUse[arrUse[Random]].EN)
            let ArrOfAnwers = [];
            ArrOfAnwers.push(ArrOfSentenceUse[arrUse[0]].EN)
            ArrOfAnwers.push(ArrOfSentenceUse[arrUse[1]].EN)
            ArrOfAnwers.push(ArrOfSentenceUse[arrUse[2]].EN)
            ArrOfAnwers.push(ArrOfSentenceUse[arrUse[3]].EN)
            SetArrOfAnwer(ArrOfAnwers)
        }
    }, [ArrOfSentenceUse])

    useEffect(() => {
        console.log(AnswerChoose)
    }, [AnswerChoose])

    useEffect(() => {
        AllMessageSave += " " + message
        if (CheckMassageAndCommand(message, AnswerCorrect, 60)[0] && AnswerCorrect !== AnwertoSay && StatusToPlay) {
            AnwertoSay = AnswerCorrect;
            AllMessageSave = "";
            SetTimeToCountDown(T => T + 10);
            SetScore(S => S + 1);
            socket.emit("chess", ["UpScore", IDofRoom, getCookie("username"), ArrIDofAllMemberInRoom]);
            document.getElementById("audioBTN").play();
            SetTimeToAnwer(15);
            // document.getElementById("audioBTN").play();
            if (ArrOfSentenceUse.length > 0) {
                let arrTemp = [];
                ArrOfSentenceUse.forEach((e, index) => {
                    arrTemp.push(index)
                })
                let arrUse = arrTemp.sort(() => Math.random() - 0.5);
                let Random = RandomInt(0, 3)
                SetQuestion(ArrOfSentenceUse[arrUse[Random]].VN)
                SetAnswerCorrect(ArrOfSentenceUse[arrUse[Random]].EN)
                // Read(ArrOfSentenceUse[arrUse[Random]].EN)
                let ArrOfAnwers = [];
                ArrOfAnwers.push(ArrOfSentenceUse[arrUse[0]].EN)
                ArrOfAnwers.push(ArrOfSentenceUse[arrUse[1]].EN)
                ArrOfAnwers.push(ArrOfSentenceUse[arrUse[2]].EN)
                ArrOfAnwers.push(ArrOfSentenceUse[arrUse[3]].EN)
                SetArrOfAnwer(ArrOfAnwers)
            }
        }
    }, [message, AnswerChoose, StatusToPlay, AnswerCorrect, ArrOfSentenceUse, ArrIDofAllMemberInRoom, IDofRoom, socket])

    return <div id="ChessBody">
        <div> <audio id="audioBTN" controls style={{ display: "none" }} src={require("./correct.wav")}></audio></div>
        <div>{TimeToCountDown} | {TimeToAnwer} | {Score}</div>
        <div><h5> {Question}</h5></div>
        <div id="ChessBody_ArrOfAnwer">{arrofAnwer_(ArrOfAnwer, SetAnswerChoose, AnswerChoose)}</div>
    </div>;
}

export default Mbody

function arrofAnwer_(ArrOfAnwer, SetAnswerChoose, AnswerChoose) {
    let Show = ArrOfAnwer.map((e, index) => <div key={index} style={{ backgroundColor: AnswerChoose === e ? "yellow" : "transparent" }} onClick={() => SetAnswerChoose(e)} >{e}</div>)
    return Show
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