import React, { useEffect } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import $ from "jquery";
// import { async } from 'regenerator-runtime';
const appId = '6b82e0d7-8610-45b8-96cd-22f51d4c50f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
if (process.brower) {
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
}
let commands = [];
function Dictaphone({ Data, Xuly }) {
    useEffect(() => {
        commands = [{
            command: Data,
            callback: (command, n, i) => { Xuly(`${command}`, n, i) },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.2,
            bestMatchOnly: true
        }]
    }, [Data])



    const {
        listening,
        interimTranscript
    } = useSpeechRecognition({
        commands
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'vi-VN' });
    const stopListening = () => SpeechRecognition.stopListening({ continuous: false, language: 'vi-VN' });

    useEffect(() => {
        if (interimTranscript !== "") {
            $("#interrimID").text(interimTranscript)
        }
    }, [interimTranscript])
    return (<div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
            className='btn btn-primary'
            id="idStartLisening"
            onClick={startListening}
        >Click to talk</button>
        <button

            id="idStopLisening"
            className="btn btn-danger ml-3"
            onClick={stopListening}
        >Click to stop</button>
    </div>
    );
};
export default Dictaphone;


