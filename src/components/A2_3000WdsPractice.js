import { useState, useEffect } from "react"
import ReadReactSpeech from "../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../util/Read/ReadMessage"
import Dictaphone from "../helpers/RegcognitionV1-0-1AI0.5 _03"
import WordsData from "../util/filedulieu/3000tuthongdung/tuvung3000thongdung"
import $ from "jquery"
let i = 0
export default function A2Words3000Practice() {
    const [DataCmd, setDataCmd] = useState("")
    const [practice, setpractice] = useState("")



    function Xuly(interim) {
        let input = interim.toLowerCase()
        try {
            if (input.includes(DataCmd)) {
                let i = input.split(DataCmd).join(`<i class="cmdInterrim">` + DataCmd + `</i>`)
                let str = `<div>` +
                    i
                    + `</div>`

                $("#res").html(str)
            } else {
                $("#res").text(input)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <hr />
            <div className="A1Pricing_div1">
                <i>Logic Các bước ghép âm.</i>
                <table className="table-sm">
                    <tbody>
                        <tr>
                            <td>1. Đếm được có bao nhiêu tiếng.</td>
                        </tr>
                        <tr>
                            <td>2. Xác định nguyên âm đơn chính của từng tiếng.</td>
                        </tr>
                        <tr>
                            <td>3. Ghép từ trái sang phải theo logic.</td>
                        </tr>
                        <tr>
                            <td>4. Đọc nhanh lên.</td>
                        </tr>
                        <tr>
                            <td>
                                Lưu ý:
                                <br />
                                + Âm nào có mặt thì phải có khẩu hình âm đó.
                                <br />
                                + Âm nguyên đơn chính đọc dài hơn mấy âm phía sau.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <input onChange={(e) => {
                let i = e.currentTarget.value
                if (WordsData[i] !== undefined) {
                    setpractice(WordsData[i])
                    setDataCmd(WordsData[i].word)

                }
                console.log(WordsData[i])
                // console.log(WordsData[i].Words.word)
            }} type={"number"} defaultValue="0" />
            <button
                className="btn btn-outline-primary"
                onClick={() => {
                    ReadMessage(practice.word, 1, 0.9, 0.9)
                }}
            >
                Read
            </button>
            <div
                style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    width: "100%",
                    padding: "150px"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        textAlign: "center",
                        height:"100px"
                    }}
                    id="res"></div>
                <div>
                    {showWords(practice)}
                </div>
            </div>



            {/* <h1 >{InterRim}</h1> */}
            <ReadReactSpeech />
            <Dictaphone
                Data={DataCmd} Xuly={Xuly}
            />

            <div>{showDetail(practice.meanGoogle)}</div>
        </div>


    )
}


function showDetail(word) {
    try {

        return (
            <div className="A2Words3000PracticeMeanGoogle_I">
                {word.map((e, i) =>
                    <div key={i}>
                        {/* <h5>{e.word}</h5> */}
                        <hr />
                        {showMeaning(e.meaning)}
                    </div>
                )}
            </div>
        )
    } catch (error) {
        return null
    }
}

function showMeaning(Mean) {
    try {
        let ArrIn = Object.keys(Mean)
        return (
            <div className="A2Words3000PracticeMeanGoogle_II">
                {ArrIn.map((e, i) =>
                    <div key={i}>
                        <h5>Từ loại: {e}</h5>
                        {showMeaningDetail(Mean[e], i)}
                    </div>
                )}
            </div>
        )
    } catch (error) {
        return null
    }
}

function showMeaningDetail(Detail, n) {
    try {
        try {
            if (n === 0) {
                $("#exam").text(Detail[0].example)
            }

        } catch (error) {

        }

        return (
            <div className="A2Words3000PracticeMeanGoogle_III">
                {Detail.map((e, i) =>
                    <div className="A2Words3000PracticeMeanGoogle_IIII" key={i}>
                        <b>Definition:</b>   {e.definition}
                        <br />
                        <b>Axample:</b>  <h5 style={{ color: "blue" }}>{e.example}</h5>
                        <br />
                        <b>Synonyms:</b> {showSynonyms(e.synonyms)}
                    </div>
                )}
            </div>
        )
    } catch (error) {
        return null
    }
}

function showSynonyms(Synonyms) {
    try {
        return (
            <div>
                {Synonyms.map((e, i) =>
                    <div className="A2Words3000ArrIndex" key={i}>{e}</div>
                )}
            </div>
        )
    } catch (error) {
        return null
    }
}

function showWords(Words) {
    try {
        return (
            <div>
                <div className="row" style={{ textAlign: "center" }}>
                    <div className="col-6">
                        <h5>US</h5>
                        <h1 style={{ color: "red" }}>{Words.ipaUK}</h1>
                    </div>
                    <div className="col-6">
                        <h5>UK</h5>
                        <h1 style={{ color: "blue" }}>{Words.ipaUS}</h1>
                    </div>
                </div>


                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Từ vựng</th>
                            <th>Từ loại</th>
                            <th>Nghĩa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={i} >
                            <td >
                                <i><b>{Words.word}</b></i>
                            </td>
                            <td >
                                <i><b>{Words.partsOfSpeech}</b></i>
                            </td>
                            <td >
                                <i><b>{Words.mean}</b></i>
                            </td>

                        </tr>



                    </tbody>

                </table>
                <h5 id="exam"></h5>
            </div>

        )
    } catch (error) {
        return null
    }
}
