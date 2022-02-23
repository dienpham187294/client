
import { useState } from "react";
import UpLoadFile from "../util/mainPlayversion21/S_Uploadfile"
import InfoLession from "../util/mainPlayversion21/S_Lession"
import GamePlay from "../util/mainPlayversion21/S_GamePlay"
import DLTOTAL from "../util/filedulieu1/DulieuThuchanh_hung1/DulieuTotal";

const ShowInterim = true

function Manager() {
  
    const [PageChange, SET_PageChange] = useState(0)
    const [Data_InfoOflession, SET_Data_InfoOflession] = useState([])
    const [Data_Game, SET_Data_Game] = useState([])
    const [DataToolR, SET_DataToolR] = useState([])

    const [Data_structure, SET_Data_structure] = useState([])
    const [huongdan, SET_huongdan] = useState("")
    const [NameOflession, SET_NameOflession] = useState("")
    const Total = new MDG(SET_PageChange, SET_Data_Game, SET_Data_InfoOflession, SET_huongdan, SET_NameOflession, SET_Data_structure, SET_DataToolR)
    return (
        <div >
        

                    {PageChange === 0 ? <UpLoadFile Total={Total} DL={DLTOTAL} />
                        : PageChange === 2 ? <InfoLession Data={Data_InfoOflession} Total={Total} Data_Game={Data_structure} />
                            : PageChange === 1 ? <GamePlay Data={Data_Game} huongdan={huongdan} NameOflession={NameOflession} Total={Total} ShowInterim={ShowInterim} DataToolR={DataToolR} />
                                : PageChange}

            


        </div>

    )

}
export default Manager

function MDG(
    SET_PageChange,
    SET_Data_Game,
    SET_Data_InfoOflession,
    SET_huongdan,
    SET_NameOflession,
    SET_Data_structure,
    SET_DataToolR
) {
    this.fnObj = {
        "SET_PageChange": SET_PageChange,
        "SET_Data_Game": SET_Data_Game,
        "SET_Data_InfoOflession": SET_Data_InfoOflession,
        "SET_huongdan": SET_huongdan,
        "SET_NameOflession": SET_NameOflession,
        "SET_Data_structure": SET_Data_structure,
        "SET_DataToolR": SET_DataToolR
    }
    this.stObj = {
        "inputSumit": "",
    }
}