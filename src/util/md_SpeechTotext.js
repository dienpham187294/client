import Dictaphone from "../helpers/SpeechtoText"


export default function MD_Speech(x) {
    this.x = x
}


MD_Speech.prototype.SET_enviroment_main = function () {
    return <Dictaphone />
}


MD_Speech.prototype.SET_Data_Commands = function (Data) {

    try {

    } catch (error) {

    }

}

MD_Speech.prototype.Show_DataCommands = function () {


    return <div>{this.x}</div>
}