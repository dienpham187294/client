//Funtion readOutlould
function read(abc, i) {
    let ut = new SpeechSynthesisUtterance(abc);
    let synth = window.speechSynthesis;
    let voices = synth.getVoices();
    ut.voice = voices[i];
    synth.speak(ut);
    ut.onerror = function (event) {
        let tempText = document.getElementById("textCommand").value;
        document.getElementById("textCommand").value = tempText + "Speak Api on error!";
    }
}

export { read }



