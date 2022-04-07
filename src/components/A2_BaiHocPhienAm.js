// import { useState, useEffect } from "react"
// import T0_linkApi from "../util/toolAll/T0_linkApi";
// import queryString from 'query-string';
import dlPhienAm from "../util/Dulieu_BaiHocPhienAm/dlPhienAm"
import setSrcVideo from "../util/filedulieu1/dataHelperFunction/setSrcVideo"
export default function Video() {


    return (
        <div>
            {showTablePhienAm(dlPhienAm, setSrcVideo)}
        </div>
    )
}

function showTablePhienAm(dlPhienAm, setSrcVideo) {
    try {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>IPA</th>
                        <th>Mô tả</th>
                        <th>Video</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dlPhienAm.map((e, i) =>
                            <tr key={i} >
                                <td className="iconX1">
                                    <i><b>{e.ipa}</b></i>
                                </td>
                                <td >
                                    <i><b>{e.des}</b></i>
                                </td>
                                <td >
                                    <i><b>{e.name}</b></i>
                                    <br />
                                    <button
                                        onClick={() => { setSrcVideo(e.srcVideo) }}

                                        className="btn btn-primary">Xem video</button>
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