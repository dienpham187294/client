import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
import UpLoadFile from "../util/mainPlayversion21/S_Uploadfile"
import shuffleArr from "../util/filedulieu1/dataHelperFunction/shuffleArr";
import InfoLession from "../util/mainPlayversion21/S_Lession"
import GamePlay from "../util/mainPlayversion21/S_GamePlay"

const ShowInterim = true
export default function Thuchanhcoban02() {
  const [PageChange, SET_PageChange] = useState(0)
  const [Data_InfoOflession, SET_Data_InfoOflession] = useState([])
  // const [Data_Game, SET_Data_Game] = useState([])
  // const [DataToolR, SET_DataToolR] = useState([])

  const [Data_structure, SET_Data_structure] = useState([])
  // const [huongdan, SET_huongdan] = useState("")
  // const [NameOflession, SET_NameOflession] = useState("")
  // const Total = new MDG(SET_PageChange, SET_Data_Game, SET_Data_InfoOflession, SET_huongdan, SET_NameOflession, SET_Data_structure, SET_DataToolR)
  const [D0_DL, setD0_DL] = useState([])

  const [D1_StatusChange, setD1_StatusChange] = useState(1)
  useEffect(() => {
    let qString = queryString.parse(window.location.search)
    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: qString.id })
    };
    fetch(T0_linkApi + "loadDataThuchanhcoban", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        setD0_DL(json.data)
        setD1_StatusChange(D => D + 1)
      })
  }, [])
  useEffect(() => {
    try {
      SET_Data_InfoOflession(D0_DL[0].hoctap)
      SET_Data_structure(shuffleArr(shuffleArr(D0_DL[1].coerdataoflession)))
      SET_PageChange(2);
    } catch (error) {

    }
  }, [D1_StatusChange])


  return (
    <div>
      {PageChange === 2 ? <InfoLession Data={Data_InfoOflession} Data_Game={Data_structure} /> : null}

      {/* {PageChange === 0 ? <UpLoadFile Total={Total} DL={D0_DL} />
        : PageChange === 2 ? <InfoLession Data={Data_InfoOflession} Total={Total} Data_Game={Data_structure} />
          : PageChange === 1 ? 
            : PageChange} */}
    </div>
  )
}

