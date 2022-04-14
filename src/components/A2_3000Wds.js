import { useState, useEffect } from "react"
import bangantu from "../util/filedulieu/3000tuthongdung/tuvung3000thongdung"
import sounds44 from "../util/filedulieu/3000tuthongdung/sounds44"
import partofspeech from "../util/filedulieu/3000tuthongdung/partofspeech"
import engletters from "../util/filedulieu/3000tuthongdung/engletters"
import shuffleArr from "../util/filedulieu1/dataHelperFunction/shuffleArr"
import A2Words3000Practice from "./A2_3000WdsPractice"


const ArrCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export default function A2Words3000() {
    const [Words, SET_Words] = useState(bangantu)
    const [ThapNhat, SET_ThapNhat] = useState(0)
    const [CaoNhat, SET_CaoNhat] = useState(4)
    const [ArrSounds, SET_ArrSounds] = useState([])
    const [ArrSoundsDeny, SET_ArrSoundsDeny] = useState([])
    const [ArrPartOfspeech, SET_ArrPartOfspeech] = useState([])
    const [Arrengletters, SET_Arrengletters] = useState([])
    const [ArrPractice, SET_ArrPractice] = useState(null)




    return (
        <>
            <div >
                <hr />
                <div>
                    <b>    <i>Choose the lowest number of characters!</i></b>
                    <br />
                    <i>Chọn số lượng ký tự thấp nhất!</i>
                    {showArrIndex(ArrCount, ThapNhat, SET_ThapNhat)}
                </div>
                <div>
                    <b>     <i>Choose the highest number of characters!</i></b>
                    <br />
                    <i>Chọn số lượng ký tự cao nhất!</i>
                    {showArrIndex(ArrCount, CaoNhat, SET_CaoNhat)}
                </div>
                <div>
                    <b>    <i>Choose IPA! </i></b>
                    <br />
                    <i>Chọn âm IPA xuất hiện!</i>
                    {showSounds(sounds44, ArrSounds, SET_ArrSounds)}
                </div>
                <div>
                    <b>  <i>Remove IPA!</i></b>
                    <br />
                    <i>Chọn âm IPA loại bỏ!</i>
                    {showSounds(sounds44, ArrSoundsDeny, SET_ArrSoundsDeny)}
                </div>
                <div>
                    <b>    <i>Choose Parts Of Speech! </i></b>
                    <br />
                    <i>Chọn từ loại!</i>
                    {showSounds(partofspeech, ArrPartOfspeech, SET_ArrPartOfspeech)}
                </div>
                <div>
                    <b>    <i>Choose Words! </i></b>
                    <br />
                    <i>Chọn kí tự xuất hiện!</i>
                    {showSounds(engletters, Arrengletters, SET_Arrengletters)}
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
                        ArrSoundsDeny.forEach(ee => {
                            if (e.ipaUK.includes(ee)) {
                                i = false
                            }
                        })
                        ArrPartOfspeech.forEach(ee => {
                            if (!e.partsOfSpeech.includes(ee)) {
                                i = false
                            }
                        })
                        Arrengletters.forEach(ee => {
                            try {
                                if (!e.word.includes(ee)) {
                                    i = false
                                }
                            } catch (error) {
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
                Sort!
            </button>
            <button
                className="btn btn-primary m-1"
                onClick={() => {
                    SET_ArrPractice(Words)
                }}
            >
                Practice!
            </button>
            <hr />
            <div>
                {showWords(Words, SET_ArrPractice)}
            </div>
            {ArrPractice !== null ?
                <div>
                    <A2Words3000Practice ArrPractice={ArrPractice} SET_ArrPractice={SET_ArrPractice} />
                </div>
                : null}
        </>

    )
}

function showWords(Words, SET_ArrPractice) {
    try {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>IPA_UK</th>
                        <th>IPA_US</th>
                        <th>Words</th>
                        <th>Parts Of Speech</th>
                        <th>Meaning</th>
                        <th>PRACTICE</th>
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
                                <td
                                    style={{ cursor: "pointer" }}
                                    onClick={() => SET_ArrPractice([e])}
                                >
                                    <u> <i><b>PRACTICE/.{i}</b></i></u>
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
                        onClick={() => {
                            try {
                                if (!getA.includes(e)) {
                                    setA(getA.concat(e))
                                } else {
                                    let ArrI = []
                                    getA.forEach(ee => {
                                        if (ee !== e) {
                                            ArrI.push(ee)
                                        }
                                    })
                                    setA(ArrI)
                                }
                            } catch (error) {

                            }
                        }}
                        style={{ backgroundColor: getA.includes(e) ? "yellow" : "white" }}
                        className="A2Words3000ArrIndex"
                        key={i}>
                        {e}
                    </div>
                )
                }
                {/* <button
                    className="btn btn-primary"
                    onClick={() => setA([])}
                >Clear!</button> */}
            </div >
        )

    } catch (error) {
        return null
    }
}
