import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import { getCookie } from "../../../helpers/functionCookies";
import { Key } from "../../../helpers/Key";
// const e = React.createElement;
let FileReadOne;
function Mbody({ fileRead, message, contextCheck, setContextCheck, messageCheck, setMessageCheck, hostOfGame, socket, listToEmit }) {
    const [idRead, setidRead] = useState("1")
    const [srcImg, setSrcImg] = useState("")
    const [precent, setPercent] = useState(25)
    const [sentence, setsentence] = useState(0)
    socket.on("StartToRead", (data) => {
        setidRead(data)
    })
    useEffect(() => {
        if (typeof (fileRead) !== "undefined") {
            console.log(fileRead);
            fileRead.forEach(e => {
                if (e.id === idRead) {
                    FileReadOne = e.content;
                    setMessageCheck(e.content[0].text)
                    setSrcImg(e.content[0].img)
                    setsentence(0);
                }
            })
        }
    }, [idRead, fileRead, setMessageCheck])

    function NextA() {
        socket.emit("saveFile", ["SaveFileRead", getCookie("username"), MissingSort(messageCheck, contextCheck), messageCheck]);

        socket.emit("read", ["UpdatePoint", hostOfGame, getCookie("username"), listToEmit]);
        let status = true;
        for (let i = sentence; i < FileReadOne.length; i++) {
            if (FileReadOne[i].text === messageCheck && status) {
                if (i < FileReadOne.length - 1) {
                    setMessageCheck(FileReadOne[i + 1].text);
                    setSrcImg(FileReadOne[i + 1].img);
                    status = false;
                    setsentence(i)

                } else {
                    setidRead("3");
                }
            }
        }
    }

    function Next() {
        socket.emit("saveFile", ["SaveFileRead", getCookie("username"), MissingSort(messageCheck, contextCheck), messageCheck]);
        let status = true;
        for (let i = sentence; i < FileReadOne.length; i++) {
            if (FileReadOne[i].text === messageCheck && status) {
                if (i < FileReadOne.length - 1) {
                    setMessageCheck(FileReadOne[i + 1].text);
                    setSrcImg(FileReadOne[i + 1].img);
                    status = false;
                    setsentence(i)
                } else {
                    setidRead("3");
                }
            }
        }
    }
    function startRead(id) {
        // setidRead(id)
        socket.emit("read", ["startToRead", listToEmit, id])
    }

    return (
        <Container>
            {idRead === "1" ? <ReadlistInfo listinfo={fileRead} startRead={startRead} hostOfGame={hostOfGame} socket={socket} /> :

                <div className="row">
                    <div className="col-8"> <img alt="" src={srcImg} width="460px" height="460px" /></div>
                    <div className="col-4">
                        {/* <ReadOne listinfo={FileReadOne} id={idRead} messageCheck={messageCheck} /> */}
                        <div style={{ backgroundColor: "#A9A9A9", borderRadius: "6px", height: "100px", overflow: "auto" }}>
                            {messageCheck}
                        </div>
                        {idRead === "3" ? <div>
                            <p> You complete  </p>
                            <button className="btn btn-outline-primary" onClick={() => setidRead("1")}> Back to choose!  </button>
                        </div> : ""}
                        <div style={{ height: "100px", overflow: "auto" }}> <p>Missing: {JSON.stringify(MissingSort(messageCheck, contextCheck))} </p></div>
                        <br />
                        {countPercent(MissingSort(messageCheck, contextCheck), SortMess(messageCheck).split(" "), precent)
                            ? <button className="btn btn-outline-primary" onClick={() => NextA()}>Correct - Next!  </button>
                            : <button className="btn btn-outline-danger" onClick={() => Next()}> Next!  </button>}

                    </div>
                    <div>%: {precent}</div>
                </div>
            }
        </Container>
    );
}

export default Mbody;


function ReadlistInfo(props) {
    const listinfo = props.listinfo;
    let listItems;
    if (typeof (listinfo) !== "undefined") {
        listItems = listinfo.map((dot) =>
            <div className="col-md-4 sm-12" key={Key()} >
                <h5> {dot.name} </h5>
                <img alt="" src={dot.img} width="200px" />
                <p>{dot.description}</p>
                {props.hostOfGame === props.socket.id ? <button className="btn btn-outline-primary" onClick={() => props.startRead(`${dot.id}`)}>Choose</button> : ""}
            </div>
        );
    }
    return (
        <Container><div className="row">{listItems}</div></Container>
    );
}




// function ReadOne(props) {
//     const listinfo = props.listinfo;
//     let listItems;
//     if (typeof (listinfo) !== "undefined") {
//         listItems = listinfo.map((dot) =>
//             <p key={Key()} style={{ backgroundColor: props.messageCheck === dot.text ? "grey" : "transparent", color: props.messageCheck === dot.text ? "white" : "black" }}> {dot.text} </p>
//         );
//     }
//     return (
//         <Container><div style={{ padding: "15px", textAlign: "left", maxHeight: "460px", overflow: "auto" }}>{listItems}</div></Container>
//     )
// };






function SortMess(messCheck) {
    let messTemp;
    messTemp = messCheck.toLowerCase().replace(".", "").split(",").join("").split("!").join("").replace("?", "");
    return messTemp;
}
function MissingSort(messCheck, arrDone) {
    let arrMiss = [];
    let StringDone = JSON.stringify(arrDone);
    // console.log("SortMess(messCheck)", SortMess(messCheck))
    let arrMessCheck = SortMess(messCheck).split(" ");
    arrMessCheck.forEach(e => {
        if (StringDone.indexOf(e) < 0) {
            arrMiss.push(e);
        }
    })
    return arrMiss
}
function countPercent(arr1, arr2, num) {
    if (arr1.length / arr2.length * 100 < num) {
        return true
    }
    return false
}