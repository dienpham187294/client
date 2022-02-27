import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import T0_linkApi from "../util/toolAll/T0_linkApi";

export default function Thuchanhkienthuc() {

  const [D0_ListMenu, setD0_ListMenu] = useState([])

  useEffect(() => {
    console.log(123)
    fetch(T0_linkApi + "menuThuchanhkienthuc")
      .then((res) => res.json())
      .then((json) => {
        setD0_ListMenu(json.data)
      })
  }, [])

  return (
    <div>
      {
        showD0_ListMenu(D0_ListMenu)
      }

    </div>
  )
}


function showD0_ListMenu(D0_ListMenu) {
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
              <tr key={i}>
                <td>
                  <i><b>{e.name}</b></i>
                </td>
                <td>
                  <Link to={"/thuchanhcoban01?id=" + e.fileName}>
                    <i>{"Luyện tập"}</i>
                  </Link>
                </td>
                <td>
                  <Link to={"/thuchanhcoban02?id=" + e.fileName}>
                    <i>{"Học tập"}</i>
                  </Link>
                </td>
                <td>
                  <Link to={"/video?id=" + e.id}>
                    <i>{"Video"}</i>
                  </Link>
                </td>
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