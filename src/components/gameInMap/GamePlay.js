import React, { useEffect, useState } from "react";
import ReadReactSpeech from "../../helpers/Read_ReactSpeech"
import ReadMessage from "../../util/ReadMessage";
import $ from "jquery"
const stringSimilarity = require("string-similarity");


function Gameplay(props) {

    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState(["hi how are you"])

    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)


    useEffect(() => {
        props.Total.fnObj.SET_Data_Commands(Info_StrickAnwers_Reactdata)
        props.Total.fnObj.SET_Avatar_Reactdata = SET_Avatar_Reactdata
        props.Total.fnObj.SET_Info_StrickAnwers_Reactdata = SET_Info_StrickAnwers_Reactdata
        props.Total.fnObj.Xuly = Xuly
    }, [Info_StrickAnwers_Reactdata])

    function Xuly(Info_message) {
        try {
            if (props.Total.gameHandle.XulyOrnot && Info_message !== null) {
                //Buoc 2 xu ly data
                let rate = 6
                let nIndex = -1;
                //----------------------
                let arrTemp = []

                props.Total.gameHandle.Data_I_1.forEach((e, i) => {
                    try {
                        e.manspeak.forEach(ee => {
                            let n = stringSimilarity.compareTwoStrings(Info_message, ee) * 10
                            arrTemp.push(n)
                            if (n > rate) {
                                rate = n;
                                nIndex = i
                            }
                        })
                    } catch (error) {
                        console.log(error)
                    }

                })


                //----------------------

                try {



                    let data = props.Total.gameHandle.Data_I_1[nIndex]

                    props.Total.gameFunction = data.function


                    try {
                        if (data.robotspeak.length > 0) {
                            let textRobotSpeak = data.robotspeak.PickRandom()
                            ReadMessage(textRobotSpeak, props.Total.voice, 1)
                            $("#textRobotSayId").text(textRobotSpeak)
                        }
                    } catch (error) {
                        console.log(error)
                    }


                    if (data.handling_next.length > 0) {
                        props.Total.HandlingNext(data.handling_next)
                    } else {
                        props.Total.HandlingNext(props.Total.gameHandle.Data_I.begin.handling_next)
                    }

                    props.Total.handleGameEvent()
                } catch (error) {
                    console.log(error)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div
                className="GameSence_Playing"
            >
                {ShowMainI1(props.Total, Info_Avatar_Reactdata, Info_StrickAnwers_Reactdata)}
                {ShowMainI(props.Total, props.ArrOfPeopeAppear_ReactData, AddtoShowMainI1, Info_Avatar_Reactdata, Info_StrickAnwers_Reactdata)}
            </div>
            <ReadReactSpeech />
        </>
    )
}
export default Gameplay


function ShowMainI(Total, arr, AddtoShowMainI1, Info_Avatar_Reactdata, Info_StrickAnwers_Reactdata) {
    try {
        if (arr !== undefined) {
            return (
                <div>

                    <button className="btn btn-outline-primary" onClick={() => Total.fnObj.SET_Page("name")}>Back to <b>Town    </b> </button>
                    <br />
                    {arr.map((e, index) =>
                        <div
                            style={{ border: "1px solid green", borderRadius: "5px", padding: "5px" }}
                            onClick={() => {
                                AddtoShowMainI1(Total, e, Info_Avatar_Reactdata, Info_StrickAnwers_Reactdata); $("#idStartLisening")[0].click()
                                Total.stateObj.store = e.store
                            }} className="GameSence_Playing_Arrpeople" key={index}>
                            <img alt={e.total.image} src={e.total.image} />
                            <hr />
                            {e.total.shopname_en}<br />
                            {e.total.shopname_vi}
                            <br />
                            <i>{e.total.description}</i>
                            <hr />
                            <i className="btn btn-warning btn-sm">Vào cửa hàng</i>
                        </div>
                    )}
                </div>
            )
        }
    } catch (error) {
        console.log(error)
    }
    return null
}

function ShowMainI1(Total, Info_Avatar_Reactdata, Info_StrickAnwers_Reactdata) {
    try {
        if (Info_Avatar_Reactdata !== null) {
            return (
                <div className="row GameSence_Playing_OneShow">
                    {/* Main */}
                    <div className="col-12">
                        <button
                            className="btn btn-sm btn-outline-danger ml-1"
                            onClick={() => {
                                Total.fnObj.SET_Avatar_Reactdata(null)
                                Total.gameHandle.XulyOrnot = false
                            }}
                        >Leave!</button>


                        <div className="text-left" style={{ height: "50%", overflow: "auto" }}>
                            <img alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="90px" />
                            <span id="textRobotSayId" >Hello</span>
                            <div id="divNPC"></div>
                        </div>
                        <div className="text-left" style={{ overflow: "auto" }}>
                            {Info_StrickAnwers_Reactdata !== null ? Show_Info_StrickAnwers_Reactdata(Info_StrickAnwers_Reactdata) : ""}
                            <div id="divPlayer"></div>
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

function AddtoShowMainI1(Total, e, Info_Avatar_Reactdata) {
    try {
        if (Info_Avatar_Reactdata === null) {
            Total.gameHandle.Data_I = e;
            Total.gameHandle.XulyOrnot = true
            Total.gameHandle.Data_I_1 = e.begin.handling_next
            let Arr_HoldAllManSpeak = [];
            e.begin.handling_next.forEach(e => {
                e.manspeak.forEach(ee => {
                    Arr_HoldAllManSpeak.push(ee)
                })
            })
            Total.fnObj.SET_Info_StrickAnwers_Reactdata(Arr_HoldAllManSpeak)
            Total.fnObj.SET_Avatar_Reactdata(e.total.imageMain);
            Total.voice = e.total.gender === "female" ? 1 : 2
            let textRobotSpeak = e.total.robotspeakfirst.PickRandom()
            ReadMessage(textRobotSpeak, Total.voice, 1)
            $("#textRobotSayId").text(textRobotSpeak)

        }
    } catch (error) {
        console.log(error)
    }
}




function Show_Info_StrickAnwers_Reactdata(Info_StrickAnwers_Reactdata) {
    try {
        return Info_StrickAnwers_Reactdata.map((e, index) =>
            <span className="Span_Show_Info_StrickAnwers_Reactdata" key={index}>{e}</span>
        )
    } catch (error) {
        console.log(error)
    }
    return null
}

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}


