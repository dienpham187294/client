import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import T0_linkApi from "../util/toolAll/T0_linkApi";

export default function Thuchanh_menu(props) {

  const [DataAll, setD0_ListMenu] = useState([])


  const [D0_ListMenuSort, setD0_ListMenuSort] = useState([])


  useEffect(() => {
    fetch(T0_linkApi + props.ApiReq)
      .then((res) => res.json())
      .then((json) => {
        setD0_ListMenu(json.data)
        setD0_ListMenuSort(json.data)
      })
  }, [])

  return (
    <div>
      {
        showD0_ListMenu(D0_ListMenuSort, props.Linkto, setD0_ListMenuSort, DataAll)
      }
    </div>
  )
}


function showD0_ListMenu(D0_ListMenu, Linkto, setD0_ListMenuSort, Data) {
  try {
    return (
      <div>
        <input
          onChange={(e) => {
            if (e.currentTarget.value === "") {
              setD0_ListMenuSort(Data)
            }
            else {
              sortTable(e.currentTarget.value, setD0_ListMenuSort, Data)
            }
          }}
          placeholder="Search!"
          type={"text"} className="form-control" />

        <table className="table table-striped">

          <thead>
            <tr>
              <th>Bài thực hành</th>
              <th>Luyện tập</th>
              {/* <th>Học tập</th>
            <th>Video</th> */}
            </tr>
          </thead>
          <tbody>
            {
              D0_ListMenu.map((e, i) =>
                <tr key={i} style={{ backgroundColor: e.name.includes("Full") ? "yellow" : "transparent" }}>
                  <td className="iconX1">
                    <i><b>{e.name}</b></i>
                  </td>
                  <td>
                    <Link to={"/" + Linkto + "?id=" + e.fileName}>
                      <i>{"Luyện tập"}</i>
                    </Link>
                    <i><b>({e.id})</b></i>
                  </td>
                  {/* <td>
                  <Link to={"/thuchanhcoban02?id=" + e.fileName}>
                    <i>{"Học tập"}</i>
                  </Link>
                </td>
                <td>
                  <Link to={"/video?id=" + e.id}>
                    <i className="iconX15 bi bi-play-btn"></i>
                  </Link>
                </td> */}
                </tr>

              )
            }
          </tbody>

        </table>
      </div>
    )
  } catch (error) {
    return null
  }
}


function sortTable(e, SET_UpdateDataTable, data) {
  try {
    let arrInput = e.toLocaleLowerCase().split(" ")

    let arrOuput = []

    data.forEach(e1 => {
      let i = true
      arrInput.forEach(e2 => {
        if (!JSON.stringify(e1).toLocaleLowerCase().includes(e2)) (
          i = false
        )
      });

      if (i) (
        arrOuput.push(e1)
      )
    });
    SET_UpdateDataTable(arrOuput)
  } catch (error) {

  }
}
