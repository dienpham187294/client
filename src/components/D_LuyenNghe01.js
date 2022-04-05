import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
import ReadReactSpeech from "../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../util/Read/ReadMessage"
// import Dictaphone from "../helpers/RegcognitionV1-0-1AI0.5 _03"
import shuffleArr from "../util/filedulieu1/dataHelperFunction/shuffleArr";
import Check_ImageOrNot from "../util/mainPlayversion21/funtionInside/FN/Z_F_Check_ImageOrNot";
import $ from "jquery"
export default function LuyenGhepAm01() {

    const [DATA_NGHE, setDATA_NGHE] = useState([])
    const [DataCmd, setDataCmd] = useState([])
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
                <br />
                <b>Đúng: {Dung}</b><i>Sai: {Sai}</i>
            </div>
            {
                S_01(DATA_NGHE, ID, setID, setDung, setSai)
            }
            <p id="interrimID"></p>
            <h1 id="res"></h1>
            <ReadReactSpeech />
        </div >
    )
}

function S_01(DATA_NGHE, ID, setID, setDung, setSai) {

    try {
        let arrOut = []
        arrOut.push(ID)
        arrOut.push((ID + 1) % DATA_NGHE.length)
        arrOut.push((ID + 2) % DATA_NGHE.length)
        arrOut.push((ID + 3) % DATA_NGHE.length)

        let arrIn = shuffleArr(arrOut)
        return (
            <div>
                {arrIn.map((e, i) =>



                    <div
                        key={i}
                        className="Dlisten_PA"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            if (ID === e) {
                                setID(ID => (ID + 1) % DATA_NGHE.length)
                                setDung(D => D + 1)
                            } else {
                                setSai(D => D + 1)
                            }
                        }}
                    >

                        {showHintAlot(DATA_NGHE[e].Answer)}


                    </div>
                )}
                {/* {JSON.stringify(arrIn)} */}
            </div>
        )
    } catch (error) {
        return null
    }
}

function showHintAlot(input) {
    try {

        return (
            <div>
                {
                    input.map((e, i) =>
                        <div key={i} style={{ display: "inline-block" }} >
                            {e === undefined || e === "" ? null :
                                <>
                                    {Check_ImageOrNot(e) ?
                                        <>
                                            <img
                                                alt={e} src={e}
                                                height="200px"
                                            />
                                        </>
                                        : <>
                                            <b><i
                                            >{e}</i></b>
                                        </>}
                                </>
                            }
                        </div>
                    )
                }
            </div>
        )



    } catch (error) {
        try {
            return (
                <div>
                    {
                        input === undefined || input === "" ? null :
                            <>
                                {Check_ImageOrNot(input) ?
                                    <>
                                        <img
                                            alt={input} src={input}
                                            height={"200px"}
                                        />
                                    </>
                                    : <>
                                        <b><i
                                        >{input}</i></b>
                                    </>}
                            </>
                    }
                </div>
            )
        } catch (error) {
            return "eror"
        }

    }
}