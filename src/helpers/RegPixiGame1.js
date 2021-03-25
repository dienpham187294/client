import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
let context;
let saveFile;
const Dictaphone = () => {
    const {
        transcript,
        interimTranscript,
        finalTranscript,
        listening,
    } = useSpeechRecognition();
    useEffect(() => {
        if (interimTranscript !== '') {
          
            context = interimTranscript;
        }
        // if (interimTranscript === '' && saveFile !== '') {
        //     console.log("saveFile==========", saveFile)
        //     // socket.emit("saveFile", [username, saveFile]);
        //     saveFile = "";
        // }
    }, [interimTranscript, finalTranscript]);
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
    }

    const listenContinuously = () => {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-GB',
        });
    };
    return (
        <div className="row" style={{ height: "120px" }}>
            <div className="col-md-2">
                <b>Listening:{' '}{listening ? 'on' : 'off'}</b>
            </div>
            <div className="col-md-2">
                <button type="button" className="btn btn-sm btn-primary" onClick={listenContinuously} >Listen</button>
                <button type="button" className="btn btn-sm btn-primary ml-1" onClick={SpeechRecognition.stopListening}>Stop</button>
            </div>
            <div className="col-md-2">
                <span>{context}</span>
                <span>{showArrContext("!!!")}</span>
            </div>
            <div className="col-md-6" style={{ maxHeight: "120px", overflow: "auto" }}>
                {/* <input id="inputText" type="text" />
                <button onClick={() => setMessage(document.getElementById("inputText").value)}>Click</button> */}
                <span>{transcript}</span>
            </div>
        </div >
    );
};

export { Dictaphone };


function showArrContext(messCheck) {
    let arr = messCheck.toLowerCase().replace(/[.*+\-?^${}()|[\]\\]/g, '').replace("one", "1").replace("two", "2").replace("three", "3").replace("four", "4").replace("five", "5").replace("six", "5").replace("seven", "7").replace("eight", "8").replace("nine", "9").replace("ten", "10").replace("eleven", "11").replace("twelve", "12").replace("twelve", "12").replace("twelve", "12").replace("thirteen", "13").split(" ");

    return JSON.stringify(arr)
}

// function checkCmdBody(mess, messCheck) {
//     let i = 0;
//     let arr = messCheck.toLowerCase().replace(/[.*+\-?^${}()|[\]\\]/g, '').replace("one", "1").replace("two", "2").replace("three", "3").replace("four", "4").replace("five", "5").replace("six", "5").replace("seven", "7").replace("eight", "8").replace("nine", "9").replace("ten", "10").replace("eleven", "11").replace("twelve", "12").replace("twelve", "12").replace("twelve", "12").replace("thirteen", "13").split(" ");
//     console.log("Arrrr====================", arr);
//     let arrMess = mess.split(" ");
//     arr.forEach(e => {
//         if (mess.toLowerCase().replace("'", "").indexOf(e) < 0) { i += 1 };
//     });
//     console.log("=================", arrMess.length, arr.length)
//     if (i / arr.length * 100 < 40 && arrMess.length >= arr.length - 1) {
//         return true
//     }
//     return false
// }