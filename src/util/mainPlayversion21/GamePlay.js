import React, { useEffect, useState } from "react";
import $ from "jquery"
import DataTool from "./S_Data_tool"
import ReadReactSpeech from "../../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../Read/ReadMessage"
import secondToMinutes from "../filedulieu1/dataHelperFunction/secondToMinutes";
import inter from "./funtionInside/inter";
// import checkMessageReturnNumber from "./funtionInside/checkMessageReturnNumber"

import PickRandom from "./funtionInside/PickRandom"
import ShowInfoHint from "./funtionInside/ShowInfoHint"
import showSubmitSyxtax from "./funtionInside/showSubmitSyxtax"
import showHintPartWhenOpenTool from "./funtionInside/showHintPartWhenOpenTool"
import showOptionToRead from "./funtionInside/showOptionToRead"
import showTopLeftPart1 from "./funtionInside/showTopLeftPart1"
import showTopCenter1 from "./funtionInside/showTopCenter1"
import showToPickPerson from "./funtionInside/showToPickPerson"
import Check_ImageOrNot from "./funtionInside/Check_ImageOrNot"
import showHintAlot from "./funtionInside/ShowInfoHint_01_Inaction"

const stringSimilarity = require("string-similarity");
let ArrPictch = [0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1]

let VoicePick = 1;
let State_of_Anwer = "none";
let Data_temp_Strickmode;
let AllData_OfOne;
let rateRead = 1.1
let pitchRead = 1.2
let timeCount;


function ArrOfPeopeAppear_ReactJSX(props) {

    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState(["hi how are you"])
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState("")
    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null);
    const [Score, SET_Score] = useState(0)
    const [Sai, SET_Sai] = useState(0)
    const [Boqua, SET_Boqua] = useState(0)
    const [ShowHint, SET_ShowHint] = useState(false)
    const [StatusShowToPick, SET_StatusShowToPick] = useState(true)
    const [DataShowToPick, SET_DataShowToPick] = useState([0, 1, 2])
    const [DataAction, SET_DataAction] = useState(null)
    const [D4_Time, setD4_Time] = useState(0)

    useEffect(() => {
        props.SET_Data_Commands(Info_StrickAnwers_Reactdata)
    }, [Info_StrickAnwers_Reactdata])

    useEffect(
        () => {
            inter()
            props.Total.stObj.indexOfPeople = 0
            props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData = AddTo_Show_ArrOfPeopeAppear_ReactData
            props.Total.fnObj.Submit_Show_OnePeopeAppear_ReactData = Submit_Show_OnePeopeAppear_ReactData
            props.Total.fnObj.Xuly = Xuly
            props.Total.fnObj.SET_ShowHint = SET_ShowHint
            props.Total.fnObj.SET_Info_Icon_Reactdata = SET_Info_Icon_Reactdata
            props.Total.fnObj.SET_Boqua = SET_Boqua
            props.Total.fnObj.SET_DataAction = SET_DataAction
        }, []
    );


    useEffect(() => {
        if (Score === 1) {
            timeCount = Date.now()
        }
        if (Score > 1) {
            setD4_Time((Date.now() - timeCount) / 1000)
        }
    }, [Score])


    function Xuly(Info_message) {
        if (Info_message === "can you speak again") {
            ReadMessage()
        }
        else {
            try {
                if (State_of_Anwer !== "none") {
                    // Buoc 1 lay du lieu cuc bo 
                    let Data_Strict = Data_temp_Strickmode
                    let STAND_i = 0
                    let RES_i = 0
                    Data_Strict.forEach((e, i) => {
                        e.manspeak.forEach(ee => {
                            let CHECK_i = stringSimilarity.compareTwoStrings(Info_message, ee)
                            if (CHECK_i > STAND_i) {
                                STAND_i = CHECK_i
                                RES_i = i
                            }
                        })
                    })
                    //----------------------

                    let data = Data_Strict[RES_i]
                    if (data.robotspeak.length > 0) {
                        ReadMessage(PickRandom(data.robotspeak), VoicePick, rateRead, pitchRead);
                    }
                    if (data.handling_next.length > 0) {
                        Data_temp_Strickmode = (data.handling_next)
                        let arrTemp = [];
                        data.handling_next.forEach(e => {
                            e.manspeak.forEach(ee => {
                                arrTemp.push(ee)
                            })
                        })
                        SET_Info_StrickAnwers_Reactdata(arrTemp)
                    } else {
                        Data_temp_Strickmode = (AllData_OfOne.middle.handling_next)
                        let arrTemp = [];
                        AllData_OfOne.middle.handling_next.forEach(e => {
                            e.manspeak.forEach(ee => {
                                arrTemp.push(ee)
                            })
                        })
                        SET_Info_StrickAnwers_Reactdata(arrTemp)

                    }
                    if (data.icon !== undefined && data.icon !== "") {
                        SET_Info_Icon_Reactdata(data.icon)
                    }
                    Submit_check_funtion_indata(data.function);
                }


            } catch (error) {
                console.log(error)
            }
        }

    }

    function AddTo_Show_ArrOfPeopeAppear_ReactData(index) {
        try {
            if (props.ArrOfPeopeAppear_ReactData[index] !== undefined) {
                props.ArrOfPeopeAppear_ReactData[index].total.status = false;
                let n = props.ArrOfPeopeAppear_ReactData[index]
                if (n.total.gender === "female") {
                    VoicePick = (1);
                } else {
                    VoicePick = (2);
                }
                rateRead = ArrPictch[index]
                pitchRead = ArrPictch[index + 1]
                AllData_OfOne = (n);
                State_of_Anwer = "strictmode"
                Data_temp_Strickmode = (n.begin.handling_next)
                let Arr_HoldAllManSpeak = [];
                n.begin.handling_next.forEach(e => {
                    e.manspeak.forEach(ee => {
                        Arr_HoldAllManSpeak.push(ee)
                    })
                })
                SET_Info_StrickAnwers_Reactdata(Arr_HoldAllManSpeak)
                SET_Avatar_Reactdata(n.total.image);
                SET_Info_Icon_Reactdata(n.total.icon)
                SET_Info_ToSunmit_Reactdata([])
                SET_Info_ToSunmit_Reactdata(n.total.submitsyntax)

                ReadMessage(PickRandom(n.total.robotspeakfirst), VoicePick, rateRead, pitchRead)
            } else {
                alert("Kết thúc")
            }

        } catch (error) {

        }
    }

    function Submit_check_funtion_indata_01(command) {
        try {
            if (command.readFirst !== undefined) {
                setTimeout(() => ReadMessage(command.readFirst.PickRandom(), VoicePick, rateRead, pitchRead), 500)
            }
            if (command.icon !== undefined) {
                SET_Info_Icon_Reactdata(command.icon)
            }
        } catch (error) {

        }
    }

    function Submit_check_funtion_indata(command) {
        try {
            if (command.end_successfull) {
                State_of_Anwer = "none";
                SET_Score(S => S + 1)
                SET_Avatar_Reactdata(null)
            }

            if (command.action !== undefined) {
                State_of_Anwer = "none";
                SET_DataAction(command.action)
                let ArrCheck = [];
                command.action.list.forEach(e => {
                    ArrCheck.push(e.stt)
                })
            } else {
                State_of_Anwer = "strictmode";
                SET_DataAction(null)
            }
            if (command.end_unsuccessfull) {
                State_of_Anwer = "none";
            }


        } catch (error) {
            console.log(error)
        }


    }
    function Submit_Show_OnePeopeAppear_ReactData(e) {
        let data = AllData_OfOne




        try {



            let status = false
            let n = e.split("===").slice(-1)[0]
            data.total.submit.forEach(e => {
                if (e.includes(n)) {
                    status = true
                }
            })
            if (!status) {
                SET_Sai(S => S + 1)
            }
        } catch (error) {
        }

        if (JSON.stringify(data.total.submit) !== "[[]]") {
            try {
                data.total.submit.forEach((eee, i) => {
                    let status_check_submit = true
                    eee.forEach((ee, ii) => {
                        let text = ee;
                        if (typeof (ee) === "string") {
                            text = ee.toLowerCase()
                        }
                        if (e.toLowerCase().indexOf(text) === -1) {
                            status_check_submit = false
                        } else {
                            Check_ImageOrNot(ee) ?
                                $("#ct1" + i + ii).html(
                                    `<img src="` + ee + `" height="50px" />`
                                )
                                : $("#ct1" + i + ii).html(ee);
                        }
                    })

                    if (status_check_submit) {
                        if (data.end !== null && data.end.handling_next !== null) {
                            Data_temp_Strickmode = (data.end.handling_next);
                            let arrTemp = []
                            data.end.handling_next.forEach(e => {
                                Submit_check_funtion_indata_01(e.function)
                                e.manspeak.forEach(ee => {
                                    arrTemp.push(ee)
                                })
                            })
                            SET_Info_StrickAnwers_Reactdata(arrTemp);
                            $("#complete").html("<b>Done!</b>")
                        } else {
                            Submit_check_funtion_indata({ end_successfull: true })
                        }
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }

    }





    /*END SHOW SEARCH */

    function Show_OnePeopeAppear_ReactData() {
        try {
            if (Info_Avatar_Reactdata !== null) {
                return (
                    <div>
                        <div className="M0_GameSence_Playing_OneShow">
                            <div>
                                <div className="row">
                                    {showTopCenter1(
                                        props,
                                        showSubmitSyxtax,
                                        Info_ToSunmit_Reactdata,
                                    )}
                                    {showTopLeftPart1(Info_Avatar_Reactdata, ShowInfoHint, Info_Icon_Reactdata, SET_ShowHint, ShowHint)}
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-12" style={{ textAlign: "center" }}>
                                        <DataTool Data={props.DataToolR} Total={props.Total} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        } catch (error) {
            console.log(error)
        }
        return <div className="M0_GameSence_Playing_OneShow">
            waiting...
        </div>
    }
    /*END JUST ONE TO SHOW */


    return (
        <>
            <div className="GameSence_Playing">
                <div>
                    <i>{props.NameOflession} | </i>
                    <b> Điểm: {Score}
                        <span style={{ color: "red" }}> Chọn sai: {Sai} </span>
                        | <span style={{ color: "red" }}>{Boqua}</span> </b>
                    <span>
                        {secondToMinutes(D4_Time)}
                    </span>
                </div>
                {Show_OnePeopeAppear_ReactData()}
                {showHintPartWhenOpenTool(ShowHint, Info_Icon_Reactdata)}
                {showToPickPerson(
                    DataShowToPick, SET_DataShowToPick, StatusShowToPick, SET_StatusShowToPick,
                    props.ArrOfPeopeAppear_ReactData, AddTo_Show_ArrOfPeopeAppear_ReactData, props.Total
                )}
                {DataAction !== null ? showAction(DataAction, SET_DataAction, props.Data_Commands, showOptionToRead, Score, showHintAlot) : null}
            </div>
            <ReadReactSpeech />
        </>
    )
}
export default ArrOfPeopeAppear_ReactJSX



function showAction(DataAction, SET_DataAction, Data_Commands, showOptionToRead, Score, showHintAlot) {


    let ArrT2 = JSON.parse(JSON.stringify(DataAction));


    return (


        <div style={{
            position: "fixed", top: "70px", bottom: "0px", width: "800px", padding: "5px",
            left: "500px", backgroundColor: "white", textAlign: "center", zIndex: 4,
            border: "1px solid black", borderRadius: '5px'
        }}>
            <div className="col-12" style={{ textAlign: "left", backgroundColor: "rgb(48, 65, 86)", color: "white", padding: "15px" }}>
                <h5>{DataAction.name}</h5>
            </div>
            <hr />
            <div className="row" style={{ height: "300px", overflow: "auto" }}>
                <div className="row" style={{ textAlign: "left" }}>
                    <div className="col-6 border-right">
                        {DataAction.list.map((e, i) =>
                            <p
                                key={i}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    ArrT2.list[i].stt = false;
                                    SET_DataAction(ArrT2);

                                }}
                            >{e.stt ? showHintAlot(e.data, e.title) : null}</p>
                        )}
                    </div>
                    <div className="col-6">
                        {DataAction.list.map((e, i) =>
                            <p
                                key={i}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    ArrT2.list[i].stt = true;
                                    SET_DataAction(ArrT2)

                                }}
                            >{!e.stt ? showHintAlot(e.data, e.title) : null}</p>
                        )}
                    </div>
                </div>
            </div>
            <hr />
            <div>
                {checkAction(DataAction) ? <i>{showOptionToRead(Score, Data_Commands)}</i> : null}
                {checkAction(DataAction) ? <h5 style={{ color: "red" }}>Done</h5> : null}
            </div>

        </div>
    )
}

function checkAction(DataAction) {
    try {

        let n = true
        DataAction.list.forEach((e, i) => {
            if (e.stt !== e.submit) {
                n = false
            }
        })
        if (n) { State_of_Anwer = "strictmode" } else { State_of_Anwer = "none" }
        return n

    } catch (error) {
        try {
            let n = true
            DataAction.list.forEach((e, i) => {
                if (e.stt !== DataAction.submit[i]) {
                    n = false
                }
            })
            if (n) { State_of_Anwer = "strictmode" } else { State_of_Anwer = "none" }
            return n
        } catch (error) {
            return false
        }
    }

}