import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
// import ReadReactSpeech from "../helpers/Read_ReactSpeechSlow"
// import ReadMessage from "../util/Read/ReadMessage"
import Dictaphone from "../helpers/RegcognitionV1-0-1AI0.5 _03"
import $ from "jquery"
export default function CMUSIC01() {

    const [DATA_Lyrics, setDATA_Lyrics] = useState([])
    const [DataCmd, setDataCmd] = useState("Hi how are you!")
    const [IPA, setIPA] = useState("...")
    const [srcYoutube, SET_SrcYoutube] = useState("")
    useEffect(() => {
        let qString = queryString.parse(window.location.search)
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: qString.id })
        };
        fetch(T0_linkApi + "loadDataMusic", requestOptions)
            .then((res) => res.json())
            .then((json) => {
                setDATA_Lyrics(json.data.lyrics)
                SET_SrcYoutube(json.data.srcVideo)
                // setDataCmd(json.data[0].Words)
            })
    }, [])
    return (
        <div>
            <hr />
            <div className="row">
                <div className="col-6">
                    <h3 style={{ color: "blue" }}>{IPA}</h3>
                    <hr />
                    <span>
                        <span id="interrimID"> </span>
                    </span>
                    <hr />
                    <b id="res"></b>
                    <Dictaphone
                        Data={DataCmd} Xuly={Xuly}
                    />
                </div>
                <div className="col-6" style={{
                    height: "300px", overflowY: "auto"
                }}>
                    {
                        S_01(DATA_Lyrics, setDataCmd, setIPA, IPA)
                    }
                </div>
                <hr />
                <div className="respondiframe">
                    <iframe title="videotittle" className="responsive-iframe" src={srcYoutube} allowFullScreen></iframe>
                </div>
            </div>



        </div >
    )
}

function S_01(DATA_Lyrics, setDataCmd, setIPA, IPA) {

    try {

        return (
            <table className="table">
                <tbody>
                    {DATA_Lyrics.map((e, i) =>
                        <tr key={i}>
                            <td
                                style={{ backgroundColor: e.IPA === IPA ? "yellow" : "white" }}
                            >
                                {e.IPA}
                            </td>
                            <td
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setDataCmd(e.Words)
                                    setIPA(e.IPA)
                                }} >
                                Luyện tập
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>
        )
    } catch (error) {
        return null
    }
}


function Xuly(cmd, n, i) {
    $("#res").text("Đúng " + Math.floor(i * 100) + "%")
}