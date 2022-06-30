import $ from "jquery"
let i = 0
let saveText = "";
let saveVoiNum = 0;
let savePitch = 0




export default async function ReadMessage(text, voiceNum, rate, pitch, mode) {

    if (text === undefined) {
        text = saveText
        voiceNum = saveVoiNum
        rate = 0.8
        pitch = savePitch
    } else {

        if (typeof (text) === "string" && mode === undefined) {
            $("#ArrRead").hide()
        }
        if (typeof (text) !== "string") {
            $("#ArrRead").show()
            let div1 = `<hr/>`
            text.forEach((e, i) => {
                let iT = i + 1
                div1 += `<span class="SUB_ReadArrPick" id="ArrRead` + i + `">` + iT + `</span>`


            });
            $("#ArrRead").html(div1)

            text.forEach((e, i) => {

                $("#ArrRead" + i).on("click", function () {
                    ReadMessage(e, voiceNum, rate, pitch, "keep")
                });

            });

            text = text[0]
        }
    }



    if (text !== undefined) {
        saveText = text;
        saveVoiNum = voiceNum;
        savePitch = pitch
    }



    try {
        if (voiceNum === undefined) {
            voiceNum = 1;
        }
        if (rate === undefined) {
            rate = 1
            try {
                if (text.split(" ").length <= 2) {
                    rate = 0.7
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (pitch === undefined) {
            pitch = 1
        }
        if (text === "I") {
            text = "i"
        }
        if ($("#ID_TEXT_BROWSERNAME").text().indexOf("ios") !== -1) {
            try {
                if ('speechSynthesis' in window) {
                    let msg = new SpeechSynthesisUtterance();
                    let voices = window.speechSynthesis.getVoices();
                    msg.voice = voices[voiceNum + 4];
                    msg.rate = rate - 0.1;
                    msg.pitch = pitch - 0.1;
                    msg.text = text;
                    speechSynthesis.speak(msg);
                    try {
                        $("#id_test_rate").text(rate - 0.1)
                    } catch (error) {

                    }

                }
            } catch (error) {
                console.log(error)
            }

        } else {
            try {

                await $("#SpeechText").val(text)
                await $("#SpeechRate").val(rate - 0.1)
                await $("#SpeechPitch").val(pitch - 0.1)
                try {
                    $("#id_test_rate").text(rate - 0.1)
                } catch (error) {

                }
                await $("#SpeechTextBtn")[0].click();




                if (voiceNum === 1) {
                    await $("#SpeechVoice").val("Google UK English Female")
                    await $("#SpeechVoiceBtn")[0].click();
                } else {
                    await $("#SpeechVoice").val("Google UK English Male")
                    await $("#SpeechVoiceBtn")[0].click();
                }
                setTimeout(() => {
                    try {
                        $(".rs-play")[0].click()
                    } catch (error) {
                        console.log(error)
                    }

                }, 100)
            } catch (error) {
                console.log(error)
            }

        }
    } catch (error) {
        console.log(error)
    }




}
