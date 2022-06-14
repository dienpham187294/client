import Xuly from "./../funtionInside/FN/AF_Xuly_01"
import { compareTwoStrings } from "string-similarity"
import $ from "jquery"
let iC = 0
export default function showTopCenter1(
    props,
    showSubmitSyxtax,
    Info_ToSunmit_Reactdata,
    NameOflession, Score, Sai, Boqua, D4_Time,
    eS_CountPercentRight, eS_CountPercentWrong, Total, Data_Commands_02
) {
    try {
        return <div className="col-6">
            <div className="row">

                <div className="col-8">
                    <div>
                        <i style={{ fontSize: "small" }}>{NameOflession}</i>
                        <br />
                        <b> Điểm: {Score}
                            <span style={{ color: "red" }}> Chọn sai: {Sai} </span>
                            | <span style={{ color: "red" }}>{Boqua}</span> </b>
                        <span>
                            {D4_Time}
                        </span>

                    </div>
                    <div>
                        <input className="form-control" type={"text"} placeholder="Enter your word!"
                            onKeyUp={(e) => {
                                checkPercent(Data_Commands_02, e.currentTarget.value)
                                if (e.key === "Enter") {
                                    if (checkOver(Data_Commands_02, e.currentTarget.value)) {
                                        Xuly(e.currentTarget.value, Total)
                                        e.currentTarget.value = ""
                                    }
                                }
                            }} />
                    </div>
                    {props.ShowInterim ?
                        <span id="showInterimID" style={{ height: "50px", color: "violet" }}></span>
                        : <span id="showInterimID" style={{ color: "violet", backgroundColor: "violet" }}></span>}

                    <div id="ArrRead"> </div>
                    <div id="inform"> </div>

                </div>
                <div className="col-4">
                    <span id="percentID_SAI">{eS_CountPercentWrong}</span>
                    <span id="percentID_DUNG">{eS_CountPercentRight}</span>
                    <hr />
                    {showSubmitSyxtax(Info_ToSunmit_Reactdata)}
                    <span id="complete" style={{ color: "red" }}></span>

                </div>
            </div>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}

function checkOver(Data_Commands_02, input) {
    let i = false
    let n = 0
    Data_Commands_02.forEach(e => {
        let nCom = compareTwoStrings(e.toLowerCase(), input.toLowerCase())
        if (nCom > 0.85) {
            i = true
        }
    });

    return i
}
function checkPercent(Data_Commands_02, input) {
    let n = 0
    Data_Commands_02.forEach(e => {
        let nCom = compareTwoStrings(e.toLowerCase(), input.toLowerCase())
        if (nCom > n) {
            n = nCom
            $("#inform").text(Math.floor(n * 100) + "% / 85%")
        }
    });
}