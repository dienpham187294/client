import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
import ReadReactSpeech from "../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../util/Read/ReadMessage"
import Dictaphone from "../helpers/RegcognitionV1-0-1AI0.5 _03"
import $ from "jquery"
export default function LuyenGhepAm01() {

    const [DATA_GHEPAM, setDATA_GHEPAM] = useState([])
    const [DataCmd, setDataCmd] = useState([])
    const [ListRes, setListRes] = useState([])
    const [ID, setID] = useState(-1)
    useEffect(() => {
        let qString = queryString.parse(window.location.search)
        setID(qString.id)
        // let requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ id: qString.id })
        // };
        // fetch(T0_linkApi + "loadDataIPA", requestOptions)
        //     .then((res) => res.json())
        //     .then((json) => {
        //         setDATA_GHEPAM(json.data)
        //         setDataCmd(json.data[0].Words)
        //     })
    }, [])
    useEffect(() => {
        if (ID !== -1) {
            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: ID })
            };
            fetch(T0_linkApi + "loadDataIPA", requestOptions)
                .then((res) => res.json())
                .then((json) => {
                    try {
                        setDATA_GHEPAM(json.data)
                        setDataCmd(json.data[0].Words)
                    } catch (error) {

                    }

                })
        }
        // let qString = queryString.parse(window.location.search)
        // setID(qString.id)
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
                        if (ID > 1) {
                            setID(ID => (ID - 1))
                        }
                    }}
                    className="btn btn-primary" type="button"><i className="bi bi-arrow-left-square-fill"></i>Back</button>

                <button
                    style={{ width: "120px", textAlign: "center", padding: "5px 10px" }}
                    onClick={() => { setID(ID => ID + 1) }}
                    className="btn btn-primary" type="button">Next<i className="bi bi-arrow-right-square-fill"></i></button>
            </div>
            {
                S_01(DATA_GHEPAM)
            }
            <p id="interrimID"></p>
            <h1 id="res"></h1>
            <ReadReactSpeech />
            <Dictaphone
                Data={DataCmd} Xuly={Xuly}
            />
            {
                S_02(ListRes)
            }
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
                        {n1.map((e, i) =>
                            <td
                                className="BLuyenGhepAMTd"
                                key={i}> {e} </td>
                        )}
                    </tr>
                    <tr style={{ color: "blue" }}>
                        {n.map((e, i) =>
                            <td
                                className="BLuyenGhepAMTd"
                                key={i}> {e} </td>
                        )}
                    </tr>
                    <tr >
                        {n1.map((e, i) =>
                            <td
                                className="LuyenGhepAm01_Speak"
                                style={{ cursor: "pointer" }}
                                key={i}>
                                <i
                                    style={{ padding: "5px", borderRadius: "5px" }}
                                    onClick={() => {
                                        ReadMessage(e, 2, 0.4, 1)
                                    }}
                                >Man Speak!</i>
                                <hr />
                                <i
                                    style={{ padding: "5px", borderRadius: "5px" }}
                                    onClick={() => {
                                        ReadMessage(e, 1, 0.4, 1)
                                    }}
                                >Women Speak!</i>

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


// function Xuly(cmd, n, i) {
//     $("#res").text("Đúng " + Math.floor(i * 100) + "%")
// }

function S_02(ListRes) {

    try {

        return (
            <table className="table">
                <tbody>
                    {ListRes.map((e, i) =>
                        <tr key={i} style={{ backgroundColor: i == 0 ? "yellow" : "white" }}>
                            <td >
                                {i == 0 ? ">>>" + ListRes.length : null}
                            </td>
                            <td >
                                {e.cmd}
                            </td>
                            <td>
                                {e.n}
                            </td>
                            <td>
                                {e.i}
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