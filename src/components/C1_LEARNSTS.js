import $ from "jquery"
import DataInput1 from "../util/filedulieu/3000tuthongdung/1000sentsWithMeaningANDHint.json"
import DataInput2 from "../util/filedulieu/3000tuthongdung/1200sentsWithMeaningAndHint.json"
import { useState } from "react"
import stringSimilarity from "string-similarity"
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
            {/* <h5 id="percent"></h5> */}
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
            <h5 id={n}></h5>
            <br />
            <input className="form-control" type={"text"} onChange={(e) => { Sosanh(e.currentTarget.value, text, n) }} />
            <div>
                {/* {ID !== -1 ? Sosanh(DATA_NGHE[ID], Write) : null} */}
            </div>
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

function Sosanh(A, B, id) {
    try {
        let i = stringSimilarity.compareTwoStrings(A.toLowerCase(), B.toLowerCase())
        let n = Math.floor(i * 100)
        $("#" + id).text("Tương đồng: " + n + "%")
        // return (
        //     <div>
        //         {"Tương đồng: " + n + "%"}
        //         <br />
        //         {n > 90 ?
        //             <div>
        //                 {A["Read"]}
        //                 <br />
        //                 <button onClick={() => {
        //                     $("#btnDung")[0].click()
        //                 }}>
        //                     Lấy điểm
        //                 </button>
        //             </div> : null}
        //     </div>
        // )
    } catch (error) {
        return null
    }

}