import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
import GamePlay from "../util/mainPlayversion21/S_GamePlay"

const ShowInterim = true

export default function Thuchanh_01(props) {
  const [PageChange, SET_PageChange] = useState(0)
  const [Data_Game, SET_Data_Game] = useState([])
  const [DataToolR, SET_DataToolR] = useState([])
  const [Move, SET_Move] = useState(null)
  const [NameOflession, SET_NameOflession] = useState("")
  const Total = new MDG(
    SET_PageChange,
    SET_Data_Game,
    SET_Move,
    SET_NameOflession,
    SET_DataToolR)
  const [D0_DL, setD0_DL] = useState([])
  const [D1_StatusChange, setD1_StatusChange] = useState(1)
  useEffect(() => {
    let qString = queryString.parse(window.location.search)
    SET_NameOflession(qString.id)
    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: qString.id })
    };
    fetch(T0_linkApi + props.ApiReq, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        setD0_DL(json.data)
        setD1_StatusChange(D => D + 1)
      })
  }, [])
  useEffect(() => {
    try {
      SET_Move(D0_DL[0].move)
      SET_DataToolR(D0_DL[0].dataTool)
      SET_Data_Game(D0_DL[1].coerdataoflession)
      SET_PageChange(1);
    } catch (error) {

    }
  }, [D1_StatusChange])


  return (
    <div>
      {PageChange === 1 ?
        <GamePlay
          Data={Data_Game}
          Move={Move}
          NameOflession={NameOflession}
          Total={Total}
          ShowInterim={ShowInterim}
          DataToolR={DataToolR}
          SOCKET={props.SOCKET}
          ThreshHold={props.ThreshHold}
        />
        : null}
    </div>
  )
}


function MDG(
  SET_PageChange,
  SET_Data_Game,
  SET_Move,
  SET_NameOflession,
  SET_DataToolR
) {
  this.fnObj = {
    "SET_PageChange": SET_PageChange,
    "SET_Data_Game": SET_Data_Game,
    "SET_Move": SET_Move,
    "SET_NameOflession": SET_NameOflession,
    "SET_DataToolR": SET_DataToolR
  }
  this.stObj = {
    "inputSumit": "",
  }
}