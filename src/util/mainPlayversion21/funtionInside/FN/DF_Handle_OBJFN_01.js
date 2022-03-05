import ReadMessage from "../../../Read/ReadMessage"
export default
    function Handle_OBJFN_01(command, Total) {
    try {
        if (command.readFirst !== undefined) {
            setTimeout(() => ReadMessage(command.readFirst.PickRandom(), Total.stObj.VoicePick, Total.stObj.rateRead, Total.stObj.pitchRead), 500)
        }
        if (command.icon !== undefined) {
            Total.fnObj.SET_Info_Icon_Reactdata(command.icon)
        }
    } catch (error) {

    }
}


