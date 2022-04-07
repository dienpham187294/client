import { useState, useEffect } from "react"
import bangantu from "../util/filedulieu/3000tuthongdung/tuvung3000thongdung"
import sounds44 from "../util/filedulieu/3000tuthongdung/sounds44"
import shuffleArr from "../util/filedulieu1/dataHelperFunction/shuffleArr"
import A2Words3000Practice from "./A2_3000WdsPractice"
const ArrCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export default function A2Words3000() {
    const [Words, SET_Words] = useState(bangantu)
    const [ThapNhat, SET_ThapNhat] = useState(0)
    const [CaoNhat, SET_CaoNhat] = useState(20)
    const [ArrSounds, SET_ArrSounds] = useState([])

    const [ArrPractice, SET_ArrPractice] = useState(null)
    return (
        <>
            <div >
                <div>
                    <i>Chọn số kí tự thấp nhất</i>
                    {showArrIndex(ArrCount, ThapNhat, SET_ThapNhat)}
                </div>
                <div>
                    <i>Chọn số kí tự cao nhất</i>
                    {showArrIndex(ArrCount, CaoNhat, SET_CaoNhat)}
                </div>
                <div>
                    <i>Chọn âm</i>
                    {showSounds(sounds44, ArrSounds, SET_ArrSounds)}
                </div>
            </div>
            <hr />
            <button
                className="btn btn-primary m-1"
                onClick={() => {
                    let arrOutput = []
                    bangantu.forEach(e => {
                        let i = true
                        if (e.len < ThapNhat) {
                            i = false
                        }
                        if (e.len > CaoNhat) {
                            i = false
                        }
                        ArrSounds.forEach(ee => {
                            if (!e.ipaUK.includes(ee)) {
                                i = false
                            }
                        })

                        if (i) {
                            arrOutput.push(e)
                        }
                    })
                    SET_Words(arrOutput)
                }}
            >
                Run!
            </button>
            <button
                className="btn btn-primary m-1"
                onClick={() => {
                    SET_ArrPractice(shuffleArr(Words))
                }}
            >
                Luyện tập
            </button>
            <hr />
            <div>
                {showWords(Words)}
            </div>
            {ArrPractice !== null ?
                <div>
                    <A2Words3000Practice ArrPractice={ArrPractice} SET_ArrPractice={SET_ArrPractice} />
                </div>
                : null}
        </>

    )
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

function showArrIndex(arrIndex, getn, setN) {
    try {
        return (
            <div>
                {arrIndex.map((e, i) =>
                    <div
                        onClick={() => { setN(e) }}
                        style={{ backgroundColor: e == getn ? "yellow" : "transparent" }}
                        className={"A2Words3000ArrIndex"}
                        key={i}
                    >
                        {e}
                    </div>
                )}
            </div>
        )

    } catch (error) {
        return null
    }
}

function showSounds(arrSound, getA, setA) {
    try {
        return (
            <div>
                {arrSound.map((e, i) =>
                    <div
                        onClick={() => { setA(getA.concat(e)) }}
                        style={{ backgroundColor: getA.includes(e) ? "yellow" : "transparent" }}
                        className="A2Words3000ArrIndex"
                        key={i}>
                        {e}
                    </div>
                )}
                <button
                    className="btn btn-primary"
                    onClick={() => setA([])}
                >Reset</button>
            </div>
        )

    } catch (error) {
        return null
    }
}