// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

// var grammar = '#JSGF V1.0;'
// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.continuous = true;
// //Them vao :
// // recognition.onresult = function (event) {
// //     var last = event.results.length - 1;
// //     var command = event.results[last][0].transcript;
// //     document.getElementById('inputCmd').value = command;
// //     console.log(document.getElementById('inputCmd').value);

// //     if (checkCmd(["hi"])) { document.getElementById("select").value = "howcanihelpyou" };
// //     // if (checkCmd(["hi"])) { document.getElementById("select").value = "hi" };
// //     if (checkCmd(["good", "how", "help"])) { document.getElementById("select").value = "howcanihelpyou" };
// //     if (checkCmd(["here", "you", "are"])) { document.getElementById("select").value = "hereyouare" };

// //     if (checkCmd(["wait", "me"])) { document.getElementById("select").value = "waitme" };
// //     if (checkCmd(["get"])) { document.getElementById("select").value = "getit" };
// //     if (checkCmd(["put"])) { document.getElementById("select").value = "putit" };


// // };

// // recognition.onspeechend = function () {
// //     document.getElementById('inputCmd').value = "speecend";
// // };

// // recognition.addEventListener('end', function () {
// //     if (statusOn) {
// //         recognition.start();
// //     }
// // });

// // recognition.onerror = function (event) {
// //     document.getElementById('inputCmd').value = event.error;
// // }

// export { recognition }