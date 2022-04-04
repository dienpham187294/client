import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import T0_linkApi from "../util/toolAll/T0_linkApi";

export default function Thuchanh_menu(props) {

  const [D0_ListMenu, setD0_ListMenu] = useState([])

  useEffect(() => {
    fetch(T0_linkApi + props.ApiReq)
      .then((res) => res.json())
      .then((json) => {
        setD0_ListMenu(json.data)
      })
  }, [])

  return (
    <div>
      {
        showD0_ListMenu(D0_ListMenu, props.Linkto)
      }

    </div>
  )
}


function showD0_ListMenu(D0_ListMenu, Linkto) {
  try {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Tên bài học</th>

          </tr>
        </thead>
        <tbody>
          {
            D0_ListMenu.map((e, i) =>
              <tr key={i} style={{ backgroundColor: e.name.includes("Full") ? "yellow" : "transparent" }}>
                <td>
                  <i><b>{e.name}</b></i>
                </td>
                <td>
                  <Link to={"/" + Linkto + "?id=" + e.fileName}>
                    <i>{"Luyện tập"}</i>
                  </Link>
                </td>
                <td>
                  <Link to={"/thuchanhcoban02?id=" + e.fileName}>
                    <i>{"Học tập"}</i>
                  </Link>
                </td>
                {/* <td>
                  <Link to={"/video?id=" + e.id}>
                    <i>{"Video"}</i>
                  </Link>
                </td> */}
              </tr>

            )
          }
        </tbody>

      </table>

    )
  } catch (error) {
    return null
  }
}