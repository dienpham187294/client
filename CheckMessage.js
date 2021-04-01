
import SortMessage from "./SortMessage"
function CheckMassageAndCommand(message, command, howmanypercentright) {
    let arrMessage = SortMessage(message).split(" ");
    let arrCommand = SortMessage(command).split(" ");

    let ResultArrTrue = [];
    let ResultArrFalse = [];
    let ResultTrueorFalse = false;

    let CountExistWord = 0;
    arrCommand.forEach(e => {
        let exist = false
        arrMessage.forEach(ee => {
            if (ee === e) {
                exist = true
            }
        })
        if (exist) {
            CountExistWord += 1;
            ResultArrTrue.push(e);
        } else {
            ResultArrFalse.push(e)
        }
    });
    if (CountExistWord / arrCommand.length * 100 > howmanypercentright) {
        ResultTrueorFalse = true;
    }
    return [ResultTrueorFalse, ResultArrTrue, ResultArrFalse]
}

export default CheckMassageAndCommand