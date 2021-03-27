import React, { useState, useEffect } from "react";
import Chess from "./Chess/Chess"
import LearnChess from "./LearnChess/LearnChess"
import Monopoly from "./monopoly/Monopoly"
import CheckLoginAlready from "../../helpers/CheckLoginAlreadyOrNot"
function Reading({ socket }) {
    const [PageRead, SetPageRead] = useState("Guild")
    useEffect(() => {

    }, [PageRead])

    return (
        <div className="row text-center">
            <CheckLoginAlready />

            <div className="col-md-2 sm-12 mt-3" style={{ padding: "10px" }}>
                <div>
                    <button onClick={() => SetPageRead("Guild")} className="btn btn-outline-primary mt-3" style={{ width: "100%" }}> Guild</button>
                    <button onClick={() => SetPageRead("PlayMonopoly")} className="btn btn-outline-primary mt-3" style={{ width: "100%" }}> Conversation </button>
                    <button onClick={() => SetPageRead("LearnChess")} className="btn btn-outline-primary mt-3" style={{ width: "100%" }}> Learn 1000 st</button>
                    <button onClick={() => SetPageRead("PlayChess")} className="btn btn-outline-primary mt-3" style={{ width: "100%" }}>1000 Sentences </button>
                </div>
            </div>
            <div className="col-md-10 sm-2 mt-3">
                {PageRead === "Guild" ? <div>
                    <iframe title="1" width="100%" height="500px" src="https://www.youtube.com/embed/J-Bu5UzpigQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                    : PageRead === "PlayMonopoly" ? <Monopoly socket={socket} />
                        : PageRead === "PlayChess" ? <Chess socket={socket} />
                            : PageRead === "LearnChess" ? <LearnChess socket={socket} />
                                : ""}
            </div>
        </div>


    )
}
export default Reading