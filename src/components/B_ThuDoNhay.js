import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
import ReadReactSpeech from "../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../util/Read/ReadMessage"
import Dictaphone from "../helpers/RegcognitionV1-0-1AI0.5 _04"
import $ from "jquery"
export default function ThuDoNhay() {

    const [DATA_GHEPAM, setDATA_GHEPAM] = useState([])
    const [DataCmd, setDataCmd] = useState(["Xin chào bạn"])
    // useEffect(() => {
    //     let qString = queryString.parse(window.location.search)
    //     let requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ id: qString.id })
    //     };
    //     fetch(T0_linkApi + "loadDataIPA", requestOptions)
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setDATA_GHEPAM(json.data)
    //             setDataCmd(json.data[0].Words)
    //         })
    // }, [])
    return (
        <div>
            {/* {
                S_01(DATA_GHEPAM)
            } */}
            <h1>Hãy nói một câu tiếng việt bất kì!</h1>
            <p id="interrimID"></p>
            <h1 id="res"></h1>
            <ReadReactSpeech />
            <Dictaphone
                Data={DataCmd} Xuly={Xuly}
            />
        </div >
    )
}

function S_01(DATA_GHEPAM) {


    try {
        let n = DATA_GHEPAM[0].IPA.split(" ")
        let n1 = DATA_GHEPAM[0].Words.split(" ")
        return (
            <table className="table">
                <tbody>
                    <tr>
                        {n.map((e, i) =>
                            <td
                                className="BLuyenGhepAMTd"
                                key={i}> {e} </td>
                        )}
                    </tr>
                    <tr>
                        {n1.map((e, i) =>
                            <td

                                style={{ cursor: "pointer" }}
                                key={i}>
                                <i
                                    onClick={() => {
                                        ReadMessage(e, 2, 0.4, 1)
                                    }}
                                >Man</i>
                                <hr />
                                <i
                                    onClick={() => {
                                        ReadMessage(e, 1, 0.4, 1)
                                    }}
                                >Women</i>

                            </td>
                        )}
                    </tr>
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