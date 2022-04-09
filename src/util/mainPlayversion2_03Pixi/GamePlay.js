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
import showTopLeftPart1 from "./funtionInside/B_S_TopLeftPart1"
import A_S_TopCenter1 from "./funtionInside/A_S_TopCenter1"
import showToPickPerson from "./funtionInside/PIXI/M0_left_2_showToPickPerson"

import showHintAlot from "./funtionInside/ShowInfoHint_01_Inaction"
import E_S_MOVE from "./funtionInside/E_S_MOVE";
import F_S_People from "./funtionInside/F_S_People"

import Xuly from "./funtionInside/FN/AF_Xuly";
import ADD_01 from "./funtionInside/FN/BF_ADD_01"
import Handle_01 from "./funtionInside/FN/CF_Handle_01"
import Handle_OBJFN from "./funtionInside/FN/DF_Handle_OBJFN"
import Handle_OBJFN_01 from "./funtionInside/FN/DF_Handle_OBJFN_01"
import G_S_ACTION from "./funtionInside/G_S_ACTION"
import H_S_Data_ScoreList from "./funtionInside/H_S_Data_ScoreList"

import GuildRead from "./funtionInside/GUILD/Guild_Read"

let ArrPictch = [0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1, 1.1, 1.2, 0.9, 1]


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
    const [DataShowToPick, SET_DataShowToPick] = useState([0])
    const [DataAction, SET_DataAction] = useState(null)
    const [D4_Time, setD4_Time] = useState(0)
    const [STATUS_E_S_MOVE, setSTATUS_E_S_MOVE] = useState(false)
    const [Mark_F_S_People, setMark_F_S_People] = useState([])
    const [STATUS_F_S_People, setSTATUS_F_S_People] = useState(false)

    const [Data_F_S_People, setData_F_S_People] = useState([])

    const [Data_ScoreList, setData_ScoreList] = useState([])

    const [Data_Guild, setData_Guild] = useState(null)


    const [eS_CountPercentWrong, seteS_CountPercentWrong] = useState("")
    const [eS_CountPercentRight, seteS_CountPercentRight] = useState("")
    useEffect(() => {
        props.SET_Data_Commands(Info_StrickAnwers_Reactdata)
    }, [Info_StrickAnwers_Reactdata])

    useEffect(
        () => {
            inter()
            props.SOCKET.on("emit_RES_Server_FirstTime", (data) => {
                setData_ScoreList(data.data);
            })

            props.SOCKET.on("emit_RES_Server", (data) => {
                setData_ScoreList(oldArray => [data, ...oldArray]);
            })

            props.Total.stObj.indexOfPeople = 0
            props.Total.stObj.StateOfListen = "none"
            props.Total.stObj.AllData_OfOne = []
            props.Total.stObj.timeCount = 1
            props.Total.stObj.rateRead = 1.1
            props.Total.stObj.pitchRead = 1.2
            props.Total.stObj.VoicePick = 1

            props.Total.stObj.ArrOfPeopeAppear_ReactData = props.ArrOfPeopeAppear_ReactData
            props.Total.stObj.ArrPictch = ArrPictch
            props.Total.stObj.Data_temp_Strickmode = []
            // props.Total.stObj.Data_F_S_People = Data_F_S_People
            ///////////
            props.Total.fnObj.ADD_01 = ADD_01

            props.Total.fnObj.Handle_01 = Handle_01
            props.Total.fnObj.Xuly = Xuly
            props.Total.fnObj.SET_ShowHint = SET_ShowHint
            props.Total.fnObj.SET_Info_Icon_Reactdata = SET_Info_Icon_Reactdata
            props.Total.fnObj.SET_Boqua = SET_Boqua
            props.Total.fnObj.SET_DataAction = SET_DataAction
            props.Total.fnObj.SET_Sai = SET_Sai

            props.Total.fnObj.SET_Avatar_Reactdata = SET_Avatar_Reactdata
            props.Total.fnObj.SET_Info_ToSunmit_Reactdata = SET_Info_ToSunmit_Reactdata


            props.Total.fnObj.SET_Score = SET_Score
            props.Total.fnObj.setSTATUS_F_S_People = setSTATUS_F_S_People
            props.Total.fnObj.setMark_F_S_People = setMark_F_S_People
            // props.Total.fnObj.setDataPre_F_S_People = setDataPre_F_S_People
            props.Total.fnObj.Handle_OBJFN = Handle_OBJFN
            props.Total.fnObj.Handle_OBJFN_01 = Handle_OBJFN_01
            props.Total.fnObj.SET_Info_StrickAnwers_Reactdata = SET_Info_StrickAnwers_Reactdata
            props.Total.fnObj.ADD_02 = ADD_02
            props.Total.fnObj.setSTATUS_E_S_MOVE = setSTATUS_E_S_MOVE

            props.Total.fnObj.setData_Guild = setData_Guild

            props.Total.fnObj.seteS_CountPercentRight = seteS_CountPercentRight
            props.Total.fnObj.seteS_CountPercentWrong = seteS_CountPercentWrong
        }, []
    );


    useEffect(() => {
        if (Score === 0) {
            props.SOCKET.emit("emit_RES_Client_FirstTime", { id: props.SOCKET.id })
        }
        if (Score === 1) {
            props.Total.stObj.timeCount = Date.now()

        }
        if (Score > 1) {
            setD4_Time(secondToMinutes((Date.now() - props.Total.stObj.timeCount) / 1000))
        }
        if (Score > 0) {

            let currentdate = new Date();
            let datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
            props.SOCKET.emit("emit_RES_Client", { name: props.NameOflession, score: Score, time: D4_Time, last: datetime })
        }


    }, [Score])




    function ADD_02(index, Total, Data_F_S_People) {

        try {
            if (Data_F_S_People[index] !== undefined) {
                Data_F_S_People[index].total.status = false;
                let n = Data_F_S_People[index]
                if (n.total.gender === "female") {
                    Total.stObj.VoicePick = (1);
                } else {
                    Total.stObj.VoicePick = (2);
                }
                Total.stObj.rateRead = Total.stObj.ArrPictch[index]
                Total.stObj.pitchRead = Total.stObj.ArrPictch[index + 1]
                Total.stObj.AllData_OfOne = (n);
                Total.stObj.StateOfListen = "strictmode"
                Total.stObj.Data_temp_Strickmode = (n.begin.handling_next)
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
                ReadMessage(PickRandom(n.total.robotspeakfirst), Total.stObj.VoicePick, Total.stObj.rateRead, Total.stObj.pitchRead)
            } else {
                alert("Kết thúc")
            }

        } catch (error) {
            console.log(error)
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
                                    {A_S_TopCenter1(
                                        props,
                                        showSubmitSyxtax,
                                        Info_ToSunmit_Reactdata,
                                        props.NameOflession, Score, Sai, Boqua, D4_Time,
                                        eS_CountPercentRight, eS_CountPercentWrong
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
            <div>
                <i>{props.NameOflession} | </i>
                <b> Điểm: {Score}
                    <span style={{ color: "red" }}> Chọn sai: {Sai} </span>
                    | <span style={{ color: "red" }}>{Boqua}</span> </b>
                <span>
                    {D4_Time}
                </span>
                <span id="percentID_SAI">{eS_CountPercentWrong}</span>
                <span id="percentID_DUNG">{eS_CountPercentRight}</span>
            </div>
            <div className="H_S_Data_ScoreList">
                {H_S_Data_ScoreList(Data_ScoreList)}
            </div>
        </div>
    }
    /*END JUST ONE TO SHOW */


    return (
        <>
            <div className="GameSence_Playing">
                <div className="E_S_MOVE_BTN">
                    {
                        props.Move !== null && props.Move !== undefined
                            ? <button
                                className="btn"
                                style={{
                                    background: STATUS_E_S_MOVE ? "red" : "blue",
                                    color: "white"
                                }}
                                onClick={() => {
                                    $("#ID_PixijsDiv").hide()
                                    $("#btnHide").hide()
                                    $("#btnShow").show()
                                    setSTATUS_E_S_MOVE(!STATUS_E_S_MOVE)
                                }}>

                                {STATUS_E_S_MOVE ?
                                    <span>Move out<i className="bi bi-backspace"></i></span>
                                    : <span>Move to<i className="bi bi-arrow-up-right-square"></i></span>}
                            </button>
                            : null
                    }
                    <button
                        onClick={() => {
                            SET_Avatar_Reactdata(null)
                        }}
                        className="btn btn-danger">Pass</button>
                </div>
                {Show_OnePeopeAppear_ReactData()}
                {showHintPartWhenOpenTool(ShowHint, Info_Icon_Reactdata)}
                {showToPickPerson(
                    DataShowToPick, SET_DataShowToPick, StatusShowToPick, SET_StatusShowToPick,
                    props.ArrOfPeopeAppear_ReactData, ADD_01, props.Total
                )}
                {STATUS_E_S_MOVE ? E_S_MOVE(props.Move, Mark_F_S_People, setSTATUS_F_S_People, setData_F_S_People) : null}
                {F_S_People(Data_F_S_People, STATUS_F_S_People, ADD_02, setSTATUS_F_S_People, props.Total)}
                {DataAction !== null ? G_S_ACTION(DataAction, SET_DataAction, props.Data_Commands, showOptionToRead, Score, showHintAlot, props.Total) : null}
                {Data_Guild !== null ? GuildRead(Data_Guild, setData_Guild) : null}

            </div>
            <ReadReactSpeech />
        </>
    )
}
export default ArrOfPeopeAppear_ReactJSX










