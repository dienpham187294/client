// import $ from "jquery"
import ReadMessage from "../../../Read/ReadMessage";
import PickRandom from "../PickRandom";
const stringSimilarity = require("string-similarity");
let i = 0
let i1 = 0
let p01 = 100
let p02 = 100
export default function Xuly(Info_message, Total) {
    // console.log(ThreshHold)
    // if (iZ < ThreshHold) {
    //     i++
    //     p01 = Math.floor((p01 + iZ * 100) / 2)
    //     Total.fnObj.seteS_CountPercentWrong(p01 + "%(" + i + ")")
    //     return null
    // }
    // else {
    //     i1++
    //     p02 = Math.floor((p02 + iZ * 100) / 2)
    //     Total.fnObj.seteS_CountPercentRight(p02 + "%(" + i1 + ")")
    // }


    if (Info_message === "can you speak again") {
        ReadMessage()
    }
    else {
        try {
            if (Total.stObj.StateOfListen !== "none") {
                // Buoc 1 lay du lieu cuc bo 
                let Data_Strict = Total.stObj.Data_temp_Strickmode
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
                    ReadMessage(PickRandom(data.robotspeak), Total.stObj.VoicePick, Total.stObj.rateRead, Total.stObj.pitchRead);
                }
                if (data.handling_next.length > 0) {
                    Total.stObj.Data_temp_Strickmode = (data.handling_next)
                    let arrTemp = [];
                    data.handling_next.forEach(e => {
                        e.manspeak.forEach(ee => {
                            arrTemp.push(ee)
                        })
                    })
                    Total.fnObj.SET_Info_StrickAnwers_Reactdata(arrTemp)
                } else {
                    Total.stObj.Data_temp_Strickmode = (Total.stObj.AllData_OfOne.middle.handling_next)
                    let arrTemp = [];
                    Total.stObj.AllData_OfOne.middle.handling_next.forEach(e => {
                        e.manspeak.forEach(ee => {
                            arrTemp.push(ee)
                        })
                    })
                    Total.fnObj.SET_Info_StrickAnwers_Reactdata(arrTemp)

                }
                if (data.icon !== undefined && data.icon !== "") {
                    Total.fnObj.SET_Info_Icon_Reactdata(data.icon)
                }
                Total.fnObj.Handle_OBJFN(data.function, Total);
            }


        } catch (error) {
            console.log(error)
        }
    }
}

