import { useState, useEffect } from "react"
import ReadReactSpeech from "../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../util/Read/ReadMessage"
import Dictaphone from "../helpers/RegcognitionV1-0-1AI0.5 _03"
import $ from "jquery"
let i = 0
export default function A2Words3000Practice(props) {
    const [DataCmd, setDataCmd] = useState(props.ArrPractice[0].word)
    const [practice, setpractice] = useState(props.ArrPractice[0])




    return (
        <div className="A2Words3000Practice">
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => {
                    i = (i + 1) % props.ArrPractice.length
                    setpractice(props.ArrPractice[i])
                    setDataCmd(props.ArrPractice[i].word)
                }}
            >
                Next
            </button>
            <button
                className="btn btn-primary"
                onClick={() => {
                    ReadMessage(props.ArrPractice[i].word, 1, 0.4, 1)
                }}
            >
                Read
            </button>
            <div>
                {showWords([practice])}
            </div>
            <p id="interrimID"></p>
            <h1 id="res"></h1>
            <ReadReactSpeech />
            <Dictaphone
                Data={DataCmd} Xuly={Xuly}
            />
            <button
                className="A2Words3000PracticeBtn"
                onClick={() => { props.SET_ArrPractice(null) }}
            >
                Exit
            </button>
        </div>


    )
}

function Xuly(cmd, n, i) {
    $("#res").text("Đúng " + Math.floor(i * 100) + "%")
}


function showWords(Words) {
    try {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>IPA_UK</th>
                        <th>IPA_US</th>
                        <th>Từ vựng</th>
                        <th>Từ loại</th>
                        <th>Nghĩa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Words.map((e, i) =>
                            <tr key={i} >
                                <td className="iconX1">
                                    <i><b>{e.ipaUK}</b></i>
                                </td>
                                <td className="iconX1">
                                    <i><b>{e.ipaUS}</b></i>
                                </td>
                                <td >
                                    <i><b>{e.word}</b></i>
                                </td>
                                <td >
                                    <i><b>{e.partsOfSpeech}</b></i>
                                </td>
                                <td >
                                    <i><b>{e.mean}</b></i>
                                </td>

                            </tr>

                        )
                    }
                </tbody>

            </table>

        )
    } catch (error) {
        return null
    }
}
