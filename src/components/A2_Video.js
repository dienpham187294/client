import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
export default function Video() {

    const [srcYoutube, SET_SrcYoutube] = useState("")

    useEffect(() => {
        let qString = queryString.parse(window.location.search)
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: qString.id })
        };
        fetch(T0_linkApi + "loadDataVideoSrc", requestOptions)
            .then((res) => res.json())
            .then((json) => {

                if (json.data !== "") {
                    SET_SrcYoutube(json.data)
                }

                // setD1_StatusChange(D => D + 1)
            })
    }, [])


    return (
        <div>
            <div id="videoID" className="respondiframe">
                <iframe title="videotittle" className="responsive-iframe" src={srcYoutube} allowFullScreen></iframe>
            </div>
        </div>
    )
}