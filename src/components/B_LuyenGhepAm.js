import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import T0_linkApi from "../util/toolAll/T0_linkApi";

export default function LuyenGhepAm() {

    const [DATA_GHEPAM, setDATA_GHEPAM] = useState([])

    useEffect(() => {
     
        fetch(T0_linkApi + "menuIPA")
            .then((res) => res.json())
            .then((json) => {
                setDATA_GHEPAM(json.data)
            })
    }, [])

    return (
        <div>
            {
                showDATA_GHEPAM(DATA_GHEPAM)
            }

        </div>
    )
}


function showDATA_GHEPAM(DATA_GHEPAM) {
    try {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Luyện ghép âm</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DATA_GHEPAM.map((e, i) =>
                            <tr key={i}>
                                <td>
                                    <i><b>{e.IPA}</b></i>
                                </td>
                                <td>
                                    <Link to={"/luyenghepam01?id=" + e.id}>
                                        <i>{"Luyện tập"}</i>
                                    </Link>
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