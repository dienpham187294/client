import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import T0_linkApi from "../util/toolAll/T0_linkApi";

export default function LuyenGhepAm() {

    const [DATA_GHEPAM, setDATA_GHEPAM] = useState([])
    const [D0_ListMenuSort, setD0_ListMenuSort] = useState([])
    useEffect(() => {

        fetch(T0_linkApi + "menuNghe")
            .then((res) => res.json())
            .then((json) => {
                setDATA_GHEPAM(json.data)
                setD0_ListMenuSort(json.data)
            })
    }, [])

    return (
        <div>
            {
                showDATA_GHEPAM(DATA_GHEPAM, setD0_ListMenuSort, D0_ListMenuSort)
            }

        </div>
    )
}


function showDATA_GHEPAM(DATA_GHEPAM, setD0_ListMenuSort, D0_ListMenuSort) {
    try {
        return (
            <table className="table">
                <input
                    onChange={(e) => {
                        if (e.currentTarget.value === "") {
                            setD0_ListMenuSort(DATA_GHEPAM)
                        }
                        else {
                            sortTable(e.currentTarget.value, setD0_ListMenuSort, DATA_GHEPAM)
                        }
                    }}
                    placeholder="Search!"
                    type={"text"} className="form-control" />
                <thead>
                    <tr>
                        <th>Luyện nghe</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        D0_ListMenuSort.map((e, i) =>
                            <tr key={i}>
                                <td>
                                    <i><b>{e.Words}</b></i>
                                </td>
                                <td>
                                    <Link to={"/listen-01?id=" + e.id}>
                                        <i>{"Luyện tập"}</i>
                                    </Link>
                                    <i><b>({e.id})</b></i>
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

function sortTable(e, SET_UpdateDataTable, data) {
    try {
        let arrInput = e.toLocaleLowerCase().split(" ")

        let arrOuput = []

        data.forEach(e1 => {
            let i = true
            arrInput.forEach(e2 => {
                if (!JSON.stringify([e1.Words, e1.id]).toLocaleLowerCase().includes(e2)) (
                    i = false
                )
            });

            if (i) (
                arrOuput.push(e1)
            )
        });
        SET_UpdateDataTable(arrOuput)
    } catch (error) {

    }
}
