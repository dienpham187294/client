import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
import $ from "jquery"
export default function Video() {

    const [srcYoutube, SET_SrcYoutube] = useState(null)

    return (
        <>
            <div style={{ display: "none" }}>
                <p id="getSrcVideo"></p>
                <button
                    id="setSrcVideo"
                    onClick={() => {
                        SET_SrcYoutube($("#getSrcVideo").text())
                    }}
                >
                    SetSrcVideo
                </button>
            </div>
            {srcYoutube !== null ?
                <div className="A2_Video_All">
                    <button
                        onClick={() => { SET_SrcYoutube(null) }}
                    >
                        X
                    </button>
                    <div id="videoID" className="respondiframe">
                        <iframe title="videotittle" className="responsive-iframe" src={srcYoutube} allowFullScreen></iframe>
                    </div>
                </div>
                : null}
        </>
    )
}