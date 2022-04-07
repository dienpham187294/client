import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
import ReadReactSpeech from "../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../util/Read/ReadMessage"
import Dictaphone from "../helpers/RegcognitionV1-0-1AI0.5 _05"
import $ from "jquery"
export default function ThuDoNhayTQ() {
    const [DataCmd, setDataCmd] = useState(["我爱你"])
    return (
        <div>
            <h1>Hãy nói một câu tiếng trung bất kì!</h1>
            <p id="interrimID"></p>
            <h1 id="res"></h1>
            <ReadReactSpeech />
            <Dictaphone
                Data={DataCmd} Xuly={Xuly}
            />
        </div >
    )
}

function Xuly(cmd, n, i) {
    $("#res").text("Đúng " + Math.floor(i * 100) + "%")
}