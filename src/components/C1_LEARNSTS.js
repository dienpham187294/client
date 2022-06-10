import $ from "jquery"
import DataInput1 from "../util/filedulieu/3000tuthongdung/1000sentsWithMeaningANDHint.json"
import DataInput2 from "../util/filedulieu/3000tuthongdung/1200sentsWithMeaningAndHint.json"
import { useState } from "react"

const DataInput1000sts = [].concat(DataInput1, DataInput2)

export default function Lesson() {

    const [DataUse, SetDataUse] = useState(DataInput1000sts.slice(0, 5))



    return (
        <div>
            <div>
                <input className="form-control" type={"number"} defaultValue="0" onChange={(e) => {
                    let i = e.currentTarget.value
                    SetDataUse(DataInput1000sts.slice(i * 5, 5 + i * 5))
                }} />
            </div>
            {Show_tienganhphothong_Write(DataUse)}
        </div>
    )

}

function Show_tienganhphothong_Write(Data_LearnWrite) {

    try {
        return (
            <div>

                {Data_LearnWrite.map((e, i) =>
                    <div
                        key={i}
                        style={{ margin: "10px" }}
                    >

                        {showThread(e.Words, i, e.Meaning, e.IPA)}
                        <br />

                        <b id={"row" + i}></b>
                        <hr />
                        <div style={{ width: "100%", backgroundColor: "green" }}>
                            -
                        </div>
                        <hr />
                    </div>
                )}

            </div>
        )
    } catch (error) {
        return null
    }
}

function showThread(text, n, meaning, ipa) {
    let arrIn1 = text.split(" ").sort(() => Math.random() - 0.5);
    return (
        <>
            <b style={{ color: "blue" }}>{meaning}</b>
            <br />
            <input type={"text"} className="form-control" />
            <br />
            {arrIn1.map((e, i) =>
                <button
                    className="btn btn-outline-primary" key={i}
                    onClick={() => {
                        let t = $("#row" + n).text() + e + " ";

                        if (t.includes(text)) {
                            t += " |-----------IPA:   " + ipa
                        }

                        $("#row" + n).text(t);
                    }}
                >{e}</button>
            )}
            <button
                className="btn btn-danger"
                onClick={() => { $("#row" + n).text(""); }}
            >X</button>
        </>
    )
}

