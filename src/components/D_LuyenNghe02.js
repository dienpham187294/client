import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
import stringSimilarity from "string-similarity"
import ReadReactSpeech from "../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../util/Read/ReadMessage"
// import Dictaphone from "../helpers/RegcognitionV1-0-1AI0.5 _03"
// import shuffleArr from "../util/filedulieu1/dataHelperFunction/shuffleArr";
// import Check_ImageOrNot from "../util/mainPlayversion21/funtionInside/FN/Z_F_Check_ImageOrNot";
import $ from "jquery"
export default function LuyenGhepAm01() {

    const [DATA_NGHE, setDATA_NGHE] = useState([])
    const [Write, setWrite] = useState("")

    // const [DataCmd, setDataCmd] = useState([])
    const [ListRes, setListRes] = useState([])
    const [ID, setID] = useState(-1)
    const [Dung, setDung] = useState(0)
    const [Sai, setSai] = useState(0)
    useEffect(() => {
        let qString = queryString.parse(window.location.search)
        // setID(qString.id)
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: qString.id })
        };
        fetch(T0_linkApi + "loadDataListen", requestOptions)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json.data)
                setDATA_NGHE(json.data[0].DataListen)
                // setDataCmd(json.data[0].Words)
            })
    }, [])

    useEffect(() => {
        if (ID > -1) {
            try {
                ReadMessage(DATA_NGHE[ID].Read, 1, 0.9, 1)
            } catch (error) {
                console.log(error)
            }

        }
    }, [ID])
    function Xuly(cmd, n, i) {
        // $("#res").text("Đúng " + Math.floor(i * 100) + "%")
        setListRes(oldArray => [{
            cmd: cmd,
            n: n,
            i: Math.floor(i * 100) + "%"
        }, ...oldArray])

    }

    return (
        <div>
            <div style={{ width: "100%", textAlign: "center", padding: "20px" }}>


                <button
                    style={{ width: "120px", textAlign: "center", padding: "5px 10px", marginRight: "20px" }}
                    onClick={() => {
                        setID(ID => (ID + 1) % DATA_NGHE.length)
                    }}
                    className="btn btn-primary" type="button"><i className="bi bi-arrow-right-square-fill">Start</i></button>
                <button
                    style={{ width: "120px", textAlign: "center", padding: "5px 10px", marginRight: "20px" }}
                    onClick={() => {
                        ReadMessage(DATA_NGHE[ID].Read, 1, 0.9, 1)
                    }}
                    className="btn btn-warning" type="button">Again</button>
                <br />

                Số điểm cần hoàn thành:  {DATA_NGHE.length * 2}
                <br />

                <b>Đúng: {Dung}</b><i>Sai: {Sai}</i>
            </div>
            <input className="form-control" type={"text"} onChange={(e) => { setWrite(e.currentTarget.value) }} />
            <div>
                {ID !== -1 ? Sosanh(DATA_NGHE[ID], Write) : null}
            </div>
            <button style={{ display: "none" }} id="btnDung" onClick={() => {
                setID(ID => (ID + 1) % DATA_NGHE.length)
                setDung(D => D + 1)
            }}>
                X
            </button>
            <p id="interrimID"></p>
            <h1 id="res"></h1>
            <ReadReactSpeech />
        </div >
    )
}



function Sosanh(A, B) {
    try {
        let i = stringSimilarity.compareTwoStrings(A["Read"].toLowerCase(), B.toLowerCase())
        let n = Math.floor(i * 100)

        return (
            <div>
                {"Tương đồng: " + n + "%"}
                <br />
                {n > 90 ?
                    <div>
                        {A["Read"]}
                        <br />
                        <button onClick={() => {
                            $("#btnDung")[0].click()
                        }}>
                            Lấy điểm
                        </button>
                    </div> : null}
            </div>
        )
    } catch (error) {
        return null
    }

}