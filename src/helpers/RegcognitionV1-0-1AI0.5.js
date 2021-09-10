import React, { useEffect } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import $ from "jquery";
// import { async } from 'regenerator-runtime';
const appId = '6b82e0d7-8610-45b8-96cd-22f51d4c50f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
if (process.brower) {
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
}
let commands = [];
function Dictaphone({ Data, Total }) {
    useEffect(() => {
        commands = [{
            command: Data,
            callback: (command) => { Total.fnObj.Xuly(`${command}`) },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.4,
            bestMatchOnly: true
        }]
    }, [Data, Total.fnObj])
    const {
        listening,
    } = useSpeechRecognition({
        commands
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-GB' });
    const stopListening = () => SpeechRecognition.stopListening({ continuous: false, language: 'en-GB' });


    return (<div style={{ display: "none" }}>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
            id="idStartLisening"
            onClick={startListening}
        >Click to talk</button>
        <button
            className="ml-3"
            onClick={stopListening}
        >Click to stop</button>
    </div>
    );
};
export default Dictaphone;


