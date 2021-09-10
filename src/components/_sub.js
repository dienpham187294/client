import React, { useEffect, useState } from "react";

import Game from "./gameInMap"

import SanhChinh from "./_Sanhchinh"
import NhiemVu from "./_Nhiemvu"
import HocTap from "./_Hoctap"
import HuongDan from "./_Huongdan"
import TuiDo from "./_Tuido"
import ThucHanh from "./_Thuchanh";



export default function Sub({ Total }) {

    const [SocketId, SET_SocketId] = useState("")

    const [arrLocation, SET_arrLocation] = useState(0)

    const [Page, SET_Page] = useState("name")

    const uMD_Show = new MD_Show(Total)

    const [TongQuan, SET_TongQuan] = useState(true)

    const [PageInTongquan, SET_PageInTongquan] = useState("thuchanh")

    const [Data_SanhChinhCreateRoom, SET_Data_SanhChinhCreateRoom] = useState([])

    useEffect(() => {
        Total.fnObj.SET_arrLocation = SET_arrLocation
        Total.fnObj.SET_Page = SET_Page
        Total.fnObj.SET_Data_SanhChinhCreateRoom = SET_Data_SanhChinhCreateRoom



        let inter = setInterval(() => {
            console.log(Total.stateObj.SocketId, "Total.stateObj.SocketId")
            if (Total.stateObj.SocketId !== undefined) {
                console.log(Total.stateObj.SocketId, "Total.stateObj.SocketId")
                SET_SocketId(Total.stateObj.SocketId)
                clearInterval(inter)
            }
        }, 1000)

    }, []);

    return (
        <div>
            <div>{uMD_Show.ShowLocation(arrLocation)}</div>
            {Page === "Market" ? <Game Total={Total} /> : null}
            {Page === "Library" ? "not null" : null}

            {
                TongQuan ?
                    <div
                        id="divShowOutline"
                        style={{
                            position: "fixed",
                            top: "1%",
                            bottom: "1%",
                            left: "1%",
                            right: "1%",
                            backgroundColor: "white",
                            zIndex: 3,
                            border: "1px solid green",
                            borderRadius: "10px",
                            overflow: "auto"
                        }}>
                        <button
                            style={{ backgroundColor: PageInTongquan === "sanhchinh" ? "yellow" : "transparent" }}
                            onClick={() => { SET_PageInTongquan("sanhchinh") }} className="btn btn-outline-info ml-1 mt-1">Online</button>
                        <button
                            style={{ backgroundColor: PageInTongquan === "nhiemvu" ? "yellow" : "transparent" }}
                            onClick={() => { SET_PageInTongquan("nhiemvu") }} className="btn btn-outline-info ml-1 mt-1">Nhiệm vụ</button>
                        <button
                            style={{ backgroundColor: PageInTongquan === "tuido" ? "yellow" : "transparent" }}
                            onClick={() => { SET_PageInTongquan("tuido") }} className="btn btn-outline-info ml-1 mt-1" >Túi đồ</button>
                        <button
                            style={{ backgroundColor: PageInTongquan === "hoctap" ? "yellow" : "transparent" }}
                            onClick={() => { SET_PageInTongquan("hoctap") }} className="btn btn-outline-info ml-1 mt-1">Học tập</button>
                        <button
                            style={{ backgroundColor: PageInTongquan === "thuchanh" ? "yellow" : "transparent" }}
                            onClick={() => { SET_PageInTongquan("thuchanh") }} className="btn btn-outline-info ml-1 mt-1">Thực hành</button>
                        <button
                            style={{ backgroundColor: PageInTongquan === "huongdan" ? "yellow" : "transparent" }}
                            onClick={() => { SET_PageInTongquan("huongdan") }} className="btn btn-outline-info ml-1 mt-1">Hướng dẫn</button>
                        <button
                            onClick={() => { SET_TongQuan(false) }} className="btn btn-outline-danger ml-1 mt-1">Back to <b style={{ color: "blue" }}>TOWN</b></button>
                        {PageInTongquan === "sanhchinh" ? <SanhChinh Total={Total} Data_SanhChinhCreateRoom={Data_SanhChinhCreateRoom} SocketId={SocketId} /> : null}
                        {PageInTongquan === "nhiemvu" ? <NhiemVu Total={Total} /> : null}
                        {PageInTongquan === "tuido" ? <TuiDo Total={Total} /> : null}
                        {PageInTongquan === "hoctap" ? <HocTap Total={Total} /> : null}
                        {PageInTongquan === "thuchanh" ? <ThucHanh Total={Total} /> : null}
                        {PageInTongquan === "huongdan" ? <HuongDan Total={Total} /> : null}
                        {/* <div id="divShowOutline2"></div> */}
                    </div>
                    : null
            }
            <div >
                <div style={{ width: "10%", display: "inline-block", maxWidth: "120px" }}>
                    <img onClick={() => SET_TongQuan(true)} style={{ cursor: "pointer" }} src="https://i.postimg.cc/76LB7hKz/icon-Nhiem-Vu.png" alt="bag" width="60px" />
                </div>
            </div>
        </div>
    )
}

function MD_Show(ID) {
    this.ID = ID
}
MD_Show.prototype.ShowLocation = function (arrLocation) {
    try {
        return (
            <div>
                {arrLocation.map((e, i) =>
                    e.name !== "" ? <div
                        style={{ border: "1px solid green", borderRadius: "10px", width: "100px", display: "inline-block", padding: "5px", cursor: "pointer" }}
                        key={i}
                        onClick={() => {
                            this.ID.fnObj.SET_Page(e.name)
                        }}
                    >
                        <i className="fas fa-arrow-circle-right"></i> <b style={{ color: "blue" }}>{e.name}</b>
                    </div> : null
                )}
            </div>
        )
    } catch (error) {
        return null
    }
}

