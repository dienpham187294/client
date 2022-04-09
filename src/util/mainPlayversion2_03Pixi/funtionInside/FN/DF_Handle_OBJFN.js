export default function Handle_OBJFN(command, Total) {

    try {
        if (command.end_successfull) {
            Total.stObj.StateOfListen = "none";
            Total.fnObj.SET_Score(S => S + 1)
            Total.fnObj.SET_Avatar_Reactdata(null)
            Total.fnObj.setSTATUS_F_S_People(false)
        }

        if (command.action !== undefined) {
            Total.stObj.StateOfListen = "none";
            Total.fnObj.SET_DataAction(command.action)
            let ArrCheck = [];
            command.action.list.forEach(e => {
                ArrCheck.push(e.stt)
            })
        } else {
            Total.stObj.StateOfListen = "strictmode";
            Total.fnObj.SET_DataAction(null)
        }
        if (command.end_unsuccessfull) {
            Total.stObj.StateOfListen = "none";
        }

        if (command.moveLocation !== undefined) {
            Total.stObj.StateOfListen = "strictmode";
            Total.fnObj.setMark_F_S_People(command.moveLocation)
            // Total.fnObj.setDataPre_F_S_People(command.listPeopleToMeet.core)
        }
    } catch (error) {
        console.log(error)
    }
}

