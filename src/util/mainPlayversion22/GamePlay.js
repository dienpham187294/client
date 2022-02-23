import React, { useEffect, useState } from "react";
import $ from "jquery"
import DataTool from "./S_Data_tool"
import ReadReactSpeech from "../../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../Read/ReadMessage"
import showDataGameOnline from "./showDataGameOnline"
import secondToMinutes from "../filedulieu1/dataHelperFunction/secondToMinutes";
import inter from "./funtionInside/inter";
import checkMessageReturnNumber from "./funtionInside/checkMessageReturnNumber"
import PickRandom from "./funtionInside/PickRandom"
import showReview from "./funtionInside/showReview"
import ShowInfoHint from "./funtionInside/ShowInfoHint"
import showSubmitSyxtax from "./funtionInside/showSubmitSyxtax"
import getOnline from "./funtionInside/getOnline"
import showHintPartWhenOpenTool from "./funtionInside/showHintPartWhenOpenTool"
import showOptionToRead from "./funtionInside/showOptionToRead"
import showTopLeftPart1 from "./funtionInside/showTopLeftPart1"
import showTopCenter1 from "./funtionInside/showTopCenter1"
import showBottomPart1 from "./funtionInside/showBottomPart1"
import showDivReview from "./funtionInside/showDivReview"
import showDivNext from "./funtionInside/showDivNext"
import showToPickPerson from "./funtionInside/A4a_showToPickPerson"
import Check_ImageOrNot from "./funtionInside/Check_ImageOrNot"
import showCenterCountDown from "./funtionInside/showCenterCountDown"
import showHintAlot from "./funtionInside/ShowInfoHint_01_Inaction"

let VoicePick = 1;
let State_of_Anwer = "none";
let Data_temp_Strickmode;
let AllData_OfOne;


let rateRead = 1.1
let pitchRead = 1.2

let idMember;
let iNguoitieptheo, interNguoitieptheo;

let i1 = 0
let timeCount = 0;
let ArrHoldThingToReview = [];



function ArrOfPeopeAppear_ReactJSX(props) {

    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState(["hi how are you"])
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState("")
    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null);
    const [Score, SET_Score] = useState(0)
    const [Sai, SET_Sai] = useState(0)
    const [Boqua, SET_Boqua] = useState(0)
    // const [Data_TableTool, SET_Data_TableTool] = useState([])
    const [DataOnline, SET_DataOnline] = useState([])
    const [ShowHint, SET_ShowHint] = useState(false)
    const [ShowReview, SET_ShowReview] = useState("")
    const [StatusShowToPick, SET_StatusShowToPick] = useState(true)
    const [DataShowToPick, SET_DataShowToPick] = useState([0, 1, 2])
    const [DataAction, SET_DataAction] = useState(null)


    useEffect(() => {
        props.SET_Data_Commands(Info_StrickAnwers_Reactdata)
        if (i1 === 0) {
            if (timeCount === 0) {
                setInterval(() => {
                    timeCount += 1;
                    $("#thoigian").text(secondToMinutes(timeCount))
                }, 1000);
            }
            if (localStorage.getItem("idMember") !== null) {
                idMember = localStorage.getItem("idMember")
            } else {
                idMember = Date.now() + PickRandom(["a", "b", "c", "d", "e", "f"]);
                localStorage.setItem("idMember", idMember)
            }
            i1++
        }

    }, [Info_StrickAnwers_Reactdata])




    useEffect(
        () => {
            inter()
            props.Total.stObj.timebegin = Date.now()
            props.Total.stObj.indexOfPeople = 0
            props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData = AddTo_Show_ArrOfPeopeAppear_ReactData
            props.Total.fnObj.Submit_Show_OnePeopeAppear_ReactData = Submit_Show_OnePeopeAppear_ReactData
            props.Total.fnObj.Xuly = Xuly
            props.Total.fnObj.SET_ShowHint = SET_ShowHint
            props.Total.fnObj.SET_Info_Icon_Reactdata = SET_Info_Icon_Reactdata
            // props.Total.fnObj.getOnline = function () {
            //     try {
            //         getOnline(props.NameOflession, idMember, Score, SET_DataOnline)
            //     } catch (error) { console.log(error) }
            // }
        }, []
    );


    useEffect(() => {
        if (Score === 1) {
            timeCount = 0
        }
    }, [Score])


    function Xuly(Info_message) {
        if (Info_message === "can you speak again") {
            ReadMessage()
        }
        else {
            try {
                if (State_of_Anwer !== "none") {
                    if (State_of_Anwer === "strictmode") {
                        // Buoc 1 lay du lieu cuc bo 
                        let Data_Strict = Data_temp_Strickmode
                        //Buoc 2 xu ly data
                        let Rate = 6
                        let Length_C = 0
                        let MessageArr = ["none"]
                        //----------------------
                        Data_Strict.forEach(e => {
                            e.manspeak.forEach(ee => {
                                let TEMP_CHECK = checkMessageReturnNumber(Info_message, ee)
                                if (TEMP_CHECK[0] >= Rate) {
                                    if (TEMP_CHECK[0] === Length_C && TEMP_CHECK[1] > Length_C) {
                                        Rate = TEMP_CHECK[0];
                                        Length_C = TEMP_CHECK[1];
                                        MessageArr.push(e);
                                    } else {
                                        Rate = TEMP_CHECK[0];
                                        Length_C = TEMP_CHECK[1];
                                        MessageArr.push(e)
                                    }
                                }
                            })
                        })
                        //----------------------

                        if (MessageArr[MessageArr.length - 1] !== "none") {

                            ArrHoldThingToReview.push({
                                "textToRead": Info_message,
                                "textReadAlready": $("#showInterimID").text()
                            })

                            let data = MessageArr[MessageArr.length - 1];
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

                    }
                }
            } catch (error) {
                console.log(error)
            }
        }

    }

    async function AddTo_Show_ArrOfPeopeAppear_ReactData(index) {
        try {
            // console.log(index, props.ArrOfPeopeAppear_ReactData[index]);
            if (props.ArrOfPeopeAppear_ReactData[index] !== undefined) {
                props.ArrOfPeopeAppear_ReactData[index].total.status = false;
                let n = props.ArrOfPeopeAppear_ReactData[index]
                AllData_OfOne = (n);
                State_of_Anwer = "strictmode"
                Data_temp_Strickmode = (n.begin.handling_next)
                let Arr_HoldAllManSpeak = [];
                n.begin.handling_next.forEach(e => {
                    e.manspeak.forEach(ee => {
                        Arr_HoldAllManSpeak.push(ee)
                    })
                })

                // SET_Data_TableTool(props.ArrOfPeopeAppear_ReactData[index].total.Tabletool)

                SET_Info_StrickAnwers_Reactdata(Arr_HoldAllManSpeak)
                await SET_Avatar_Reactdata(n.total.image);
                // if (n.total.icon !== "" && n.total.icon !== undefined) {
                SET_Info_Icon_Reactdata(n.total.icon)
                // }
                await SET_Info_ToSunmit_Reactdata([])
                await SET_Info_ToSunmit_Reactdata(n.total.submitsyntax)
                if (n.total.gender === "female") {
                    VoicePick = (1);
                } else {
                    VoicePick = (2);
                }
                rateRead = PickRandom([0.9, 1.0, 1.1, 1.2])
                pitchRead = PickRandom([0.9, 1.0, 1.1, 1.2])
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
                $("#divCountdown").show();
                iNguoitieptheo = 3
                interNguoitieptheo = setInterval(() => {
                    iNguoitieptheo -= 1;
                    $("#countDown").text(iNguoitieptheo)
                    if (iNguoitieptheo === 0) {
                        $("#divCountdown").hide();
                        $("#countDown").text(3)
                        SET_StatusShowToPick(true)
                        clearInterval(interNguoitieptheo)
                    }
                }, (1000));
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
                        <div className="GameSence_Playing_OneShow">
                            <div>
                                <div className="row">
                                    {showTopCenter1(
                                        props, showOptionToRead, Score, Info_StrickAnwers_Reactdata,
                                        showSubmitSyxtax, Info_ToSunmit_Reactdata,
                                        Boqua, SET_Score, SET_ShowReview, ArrHoldThingToReview, Sai
                                    )}
                                    {showTopLeftPart1(Info_Avatar_Reactdata, ShowInfoHint, Info_Icon_Reactdata, SET_ShowHint, ShowHint)}
                                </div>
                                <hr />
                                <div className="row">
                                    {/* <div className="col-4">
                                        {showDataGameOnline(DataOnline, props.Total)}
                                    </div> */}
                                    <div className="col-12" style={{ textAlign: "center" }}>
                                        <DataTool Data={props.DataToolR} Total={props.Total} />
                                    </div>
                                </div>
                                <hr />
                                {showBottomPart1(
                                    props, SET_Boqua, SET_StatusShowToPick, SET_DataAction
                                )}
                                {showDivNext()}
                                {showCenterCountDown()}
                                {showDivReview(ShowReview, props, secondToMinutes, timeCount, showReview, SET_ShowReview,
                                    Score, Sai, Boqua)}

                            </div>
                        </div>

                    </div>
                )
            }
        } catch (error) {
            console.log(error)
        }
        return null
    }
    /*END JUST ONE TO SHOW */


    return (
        <>
            <div className="GameSence_Playing">
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
            position: "fixed", top: "20%", bottom: "20%", right: "20%", padding: "5%",
            left: "20%", backgroundColor: "white", overflow: "auto", textAlign: "center", zIndex: 4,
            border: "5px solid blue", borderRadius: '5px'
        }}>
            <div className="row">
                <div className="col-12" style={{ textAlign: "center" }}>
                    <h5>{DataAction.name}</h5>
                </div>
                <hr />
                <div className="row" style={{ textAlign: "left" }}>
                    <div className="col-6 border-right">
                        <b>A---</b>
                        <hr />
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
                        <b>B---</b>
                        <hr />
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
                {checkAction(DataAction) ? <h5>{showOptionToRead(Score, Data_Commands)}</h5> : null}
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