import { useState } from "react"
export default function Video() {

    const [srcYoutube, SET_SrcYoutube] = useState("https://www.youtube.com/embed/a-48STRZtIQ")

    return (
        <div>
            <div id="videoID" className="respondiframe">
                <iframe className="responsive-iframe" src={srcYoutube} allowFullScreen></iframe>
            </div>
        </div>
    )
}