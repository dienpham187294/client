import React, { useState } from "react";
import Guild from "./read/AGuild"
import FairyTail from "./read/AFairyTail"
import HowToPlayGame from "./read/AHowToPlayGame"
import CheckLoginAlready from "../../helpers/CheckLoginAlreadyOrNot"
function Reading({ socket }) {
    const [PageRead, SetPageRead] = useState("Guild")


    return (
        <div className="row text-center">
            <div className="col-md-2 sm-12 mt-3" style={{ padding: "10px" }}>
                <div>
                    <button onClick={() => SetPageRead("Guild")} className="btn btn-outline-primary mt-3" style={{ width: "100%" }}> Guild</button>
                    <button onClick={() => SetPageRead("FairyTail")} className="btn btn-outline-primary mt-3" style={{ width: "100%" }}> Fairy tail </button>
                    <button onClick={() => SetPageRead("HowToPlayGame")} className="btn btn-outline-primary mt-3" style={{ width: "100%" }}> How to play Game</button>
                </div>
            </div>
            <div className="col-md-10 sm-2 mt-3">
                <CheckLoginAlready />
                {PageRead === "Guild" ? <Guild />
                    : PageRead === "FairyTail" ? <FairyTail socket={socket} />
                        : PageRead === "HowToPlayGame" ? <HowToPlayGame />
                            : ""}
            </div>
        </div>


    )
}
export default Reading