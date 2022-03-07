import { useState, useEffect } from "react"
import T0_linkApi from "../util/toolAll/T0_linkApi";
import queryString from 'query-string';
import shuffleArr from "../util/filedulieu1/dataHelperFunction/shuffleArr";
import InfoLession from "../util/mainPlayversion21/S_Lession"

export default function Thuchanh_02(props) {
  const [PageChange, SET_PageChange] = useState(0)
  const [Data_InfoOflession, SET_Data_InfoOflession] = useState([])
  const [Data_structure, SET_Data_structure] = useState([])
  const [D0_DL, setD0_DL] = useState([])
  const [D1_StatusChange, setD1_StatusChange] = useState(1)
  useEffect(() => {
    let qString = queryString.parse(window.location.search)
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
      SET_Data_InfoOflession(D0_DL[0].hoctap)
      SET_Data_structure(shuffleArr(shuffleArr(D0_DL[1].coerdataoflession)))
      SET_PageChange(2);
    } catch (error) {

    }
  }, [D1_StatusChange])


  return (
    <div>
      {PageChange === 2 ? <InfoLession Data={Data_InfoOflession} Data_Game={Data_structure} /> : null}
    </div>
  )
}

