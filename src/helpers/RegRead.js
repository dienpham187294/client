import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SortMessage from "../helpers/SortMessage"
let context;
let saveFile;
let ListWordsTrue = [""];
const Dictaphone = ({ setMessage, messageCheck, setMessageCheck, socket, username, contextCheck, setContextCheck }) => {
    const {
        interimTranscript,
        listening,
    } = useSpeechRecognition();

    useEffect(() => {
        ListWordsTrue = [""];
        context = "";
        setContextCheck(ListWordsTrue);
    }, [messageCheck, setContextCheck])

    useEffect(() => {


        if (interimTranscript !== '') {
            setMessage(interimTranscript);
            saveFile = interimTranscript;
            context = interimTranscript;
            let arrTranscript = interimTranscript.toLocaleLowerCase().split(" ");
            // console.log("arrTranscript", arrTranscript)

            arrTranscript.forEach(ee => {
                // console.log("messageCheck.indexOf(ee)", messageCheck.indexOf(ee));
                if (SortMessage(messageCheck).indexOf(ee) > -1) {
                    let status = true;
                    ListWordsTrue.forEach(eee => {
                        if (ee === eee) {
                            status = false;
                        }
                    })
                    if (status) { ListWordsTrue.push(ee) }
                    setContextCheck(ListWordsTrue)
                }
            })
        }



        if (interimTranscript === '' && saveFile !== '') {
            // console.log("saveFile==========", saveFile)
            socket.emit("saveFile", [username, saveFile]);
            saveFile = "";
        }
    }, [interimTranscript, setMessage, socket, username, messageCheck, setContextCheck]);
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
        <div className="row" style={{ height: "80px" }}>
            <div className="col-md-2">
                <b>Listening:{' '}{listening ? 'on' : 'off'}</b>
            </div>
            <div className="col-md-2">
                <button type="button" className="btn btn-sm btn-primary" onClick={listenContinuously} >Listen</button>
                <button type="button" className="btn btn-sm btn-primary ml-1" onClick={SpeechRecognition.stopListening}>Stop</button>
            </div>
            <div className="col-md-8" style={{ maxHeight: "80px", overflow: "auto" }}>
                <span>{context}</span>
            </div>
        </div >
    );
};

export { Dictaphone };

// function SortMess(messCheck) {
//     let messTemp;
//     messTemp = messCheck.toLowerCase().replace(".", "").split(",").join("").split("!").join("").replace("?", "");
//     return messTemp;
// }
