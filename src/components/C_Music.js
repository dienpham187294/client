import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import T0_linkApi from "../util/toolAll/T0_linkApi";

export default function CMUSIC() {

    const [DList_Songs, setDList_Songs] = useState([])

    useEffect(() => {

        fetch(T0_linkApi + "menuMusic")
            .then((res) => res.json())
            .then((json) => {
                setDList_Songs(json.data)
            })
    }, [])

    return (
        <div>
            {
                showDList_Songs(DList_Songs)
            }

        </div>
    )
}


function showDList_Songs(DList_Songs) {
    try {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Bài hát</th>
                        <th>Ca sĩ/Ban nhạc</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DList_Songs.map((e, i) =>
                            <tr key={i}>
                                <td>
                                    <i><b>{e.name}</b></i>
                                </td>
                                <td>
                                    <i><b>{e.author}</b></i>
                                </td>
                                <td>
                                    <Link to={"/nhacipalyrics-detail?id=" + e.id}>
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