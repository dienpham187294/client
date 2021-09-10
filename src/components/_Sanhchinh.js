import React from "react"
import $ from "jquery"


export default function SanhChinh({ Total, Data_SanhChinhCreateRoom, SocketId }) {



    return (
        <div style={{ borderTop: "1px solid black" }}>
            {SocketId !== "" ?
                <button
                    className="btn btn-primary mt-1"
                    onClick={() => {
                        Total.sendSocket("CreateNew", { id: Total.stateObj.SocketId })
                    }}>Tạo phòng</button>
                : "Đang kết nối đến server ..."}
            <div>
                {showRoom(Total, Data_SanhChinhCreateRoom, SocketId)}
            </div>
        </div>
    )
}

function showRoom(Total, Input, SocketId) {
    try {
        return (
            <>
                <div style={{ height: "300px", overflow: "auto" }}>
                    {
                        Input.map((e, i) =>
                            <div key={i} >
                                <span >{e.id}</span>
                                {e.arrId.map((e, i) => <button key={i} className="btn btn-danger">{i + 1}</button>)}
                                {SocketId !== "" ?
                                    e.id !== Total.stateObj.SocketId ?
                                        !JSON.stringify(e.arrId).includes(Total.stateObj.SocketId) ?
                                            <button
                                                className="btn btn-warning"
                                                onClick={() => {
                                                    Total.sendSocket("JionRoom", { "idR": e.id, "id": Total.stateObj.SocketId })
                                                }}>Tham gia</button> : null
                                        :
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => {
                                                Total.sendSocket("StartRoom", { "id": Total.stateObj.SocketId })
                                            }}>Bắt đầu</button>
                                    : null}
                            </div>
                        )
                    }
                </div >
                <div style={{ textAlign: "left" }}>
                    <div
                        id="Chatboxshow"
                        style={{ height: "100px", overflow: "auto" }}
                    >

                    </div>
                    <div >
                        <input
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    Total.sendSocket("chat", { "id": Total.stateObj.SocketId, "text": e.currentTarget.value })
                                }
                            }}
                            type="text" placeholder="Chat..." id="chatbox" />
                        <i
                            onClick={() => {
                                Total.sendSocket("chat", { "id": Total.stateObj.SocketId, "text": $("#chatbox").val() })
                            }}
                            style={{ cursor: "pointer", color: "blue" }}
                            className="far fa-paper-plane">Send</i>
                    </div>

                </div>
            </>
        )
    } catch (error) {
        return null
    }
}