
import { useState, useEffect } from "react";
import md_data from "../../util/filedulieu/md_data";
import Dictaphone from "../../helpers/RegcognitionV1-0-1AI0.5"
import Gameplay from "./GamePlay"

// let i = 0

function Game(props) {

    const [Data_Game, SET_Data_Game] = useState(null)

    const [Info_message, SET_Info_message] = useState(null)
 
    const [Data_Commands, SET_Data_Commands] = useState(["hi how are you"])

    const [Status, SET_Status] = useState(true)

    useEffect(() => {
        if (Status) {
            const Data = new md_data(props.Total)
            SET_Data_Game(Data.DataGame)
            props.Total.fnObj.SET_Info_message = SET_Info_message;
            props.Total.fnObj.SET_Data_Commands = SET_Data_Commands;
            SET_Status(false)
        }
    }, [Status])
    return (
        <>
            <div className="row">

                <div className="col-12">{
                    Data_Game !== null ?
                        <Gameplay
                            ArrOfPeopeAppear_ReactData={Data_Game}
                            Info_message={Info_message}
                            Total={props.Total}
                        /> : ""}
                </div>

                <div className="col-12" style={{ maxHeight: "300px", overflow: "auto" }}>
                    <Dictaphone
                        Data={Data_Commands}
                        Total={props.Total} 
                    />
                </div>
            </div>
        </>
    )

}
export default Game



