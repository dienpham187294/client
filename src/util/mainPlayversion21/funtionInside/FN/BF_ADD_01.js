import ReadMessage from "../../../Read/ReadMessage";
import PickRandom from "../PickRandom";

export default function ADD_01(index, Total) {
    try {
        if (Total.stObj.ArrOfPeopeAppear_ReactData[index] !== undefined) {
            Total.stObj.ArrOfPeopeAppear_ReactData[index].total.status = false;
            let n = Total.stObj.ArrOfPeopeAppear_ReactData[index]
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
            Total.fnObj.SET_Info_StrickAnwers_Reactdata(Arr_HoldAllManSpeak)
            Total.fnObj.SET_Avatar_Reactdata(n.total.image);
            Total.fnObj.SET_Info_Icon_Reactdata(n.total.icon)
            Total.fnObj.SET_Info_ToSunmit_Reactdata([])
            Total.fnObj.SET_Info_ToSunmit_Reactdata(n.total.submitsyntax)
            ReadMessage(PickRandom(n.total.robotspeakfirst), Total.stObj.VoicePick, Total.stObj.rateRead, Total.stObj.pitchRead)
        } else {
            alert("Kết thúc")
        }

    } catch (error) {

    }
}
