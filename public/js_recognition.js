var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous = true;
//Them vao :
recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    // document.querySelector('.regBar input').value = command;
    console.log("ok")
};

recognition.onspeechend = function () {
    // document.getElementById('inputCmd').value = "speecend";
};

recognition.addEventListener('end', function () {
    // if (!status.off) {
    recognition.start();
    // }
});

recognition.onerror = function (event) {
    // document.querySelector('.regBar input').value = event.error;
}

