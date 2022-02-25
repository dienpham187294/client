import { useState, useEffect } from "react"
// import { Link } from "react-router-dom";
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
// import UpLoadFile from "../util/mainPlayversion22/S_Uploadfile"
import shuffleArr from "../util/filedulieu1/dataHelperFunction/shuffleArr";

import GamePlay from "../util/mainPlayversion22/S_GamePlay"

const ShowInterim = true
export default function Thuchanhnangcao() {
  const [PageChange, SET_PageChange] = useState(0)
  // const [Data_InfoOflession, SET_Data_InfoOflession] = useState([])
  const [Data_Game, SET_Data_Game] = useState([])
  const [DataToolR, SET_DataToolR] = useState([])

  // const [Data_structure, SET_Data_structure] = useState([])
  const [huongdan, SET_huongdan] = useState("")
  const [NameOflession, SET_NameOflession] = useState("")
  const Total = new MDG(SET_PageChange, SET_Data_Game, SET_huongdan, SET_NameOflession, SET_DataToolR)
  const [D0_DL, setD0_DL] = useState([])

  const [D1_StatusChange, setD1_StatusChange] = useState(1)
  useEffect(() => {
    // let qString = queryString.parse(window.location.search)
    // let requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ id: qString.id })
    // };
    fetch(T0_linkApi + "loadDataThuchanhnangcao")
      .then((res) => res.json())
      .then((json) => {
        setD0_DL(json.data)
        setD1_StatusChange(D => D + 1)
      })
  }, [])
  useEffect(() => {
    try {
      // SET_Data_InfoOflession(D0_DL[0].hoctap)
      // SET_NameOflession(D0_DL[0].nameoflession)
      SET_DataToolR(D0_DL[0].dataTool)
      SET_Data_Game(shuffleArr(shuffleArr(D0_DL[1].coerdataoflession)))
      SET_PageChange(1);
    } catch (error) {

    }
  }, [D1_StatusChange])


  return (
    <div>
      {PageChange === 1 ? <GamePlay Data={Data_Game} huongdan={huongdan} NameOflession={NameOflession} Total={Total} ShowInterim={ShowInterim} DataToolR={DataToolR} /> : null}
    </div>
  )
}


function MDG(
  SET_PageChange,
  SET_Data_Game,
  SET_huongdan,
  SET_NameOflession,
  SET_DataToolR
) {
  this.fnObj = {
    "SET_PageChange": SET_PageChange,
    "SET_Data_Game": SET_Data_Game,
    "SET_huongdan": SET_huongdan,
    "SET_NameOflession": SET_NameOflession,
    "SET_DataToolR": SET_DataToolR
  }
  this.stObj = {
    "inputSumit": "",
  }
}