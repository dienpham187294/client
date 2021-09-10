import $ from "jquery"
export default async function ReadMessage(text, voiceNum, rate) {

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
        if (text === "I") {
            text = "i"
        }
        if ($("#ID_TEXT_BROWSERNAME").text().indexOf("ios") !== -1) {
            try {
                if ('speechSynthesis' in window) {
                    let msg = new SpeechSynthesisUtterance();
                    let voices = window.speechSynthesis.getVoices();
                    msg.voice = voices[voiceNum === 1 ? 5 : 9];
                    msg.rate = rate;
                    msg.pitch = 1;
                    msg.text = text;
                    speechSynthesis.speak(msg);
                    try {
                        $("#id_test_rate").text(rate)
                    } catch (error) {

                    }

                }
            } catch (error) {
                console.log(error)
            }

        } else {
            try {

                await $("#SpeechText").val(text)
                await $("#SpeechRate").val(rate)
                try {
                    $("#id_test_rate").text(rate)
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
