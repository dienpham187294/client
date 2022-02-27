import { useEffect, useState } from "react"
import Read_ReactSpeech from "../../helpers/Read_ReactSpeechSlow"
import $ from "jquery"
import Show_tienganhphothong_phanbaihoc from "../Show/Show_tienganhphothong_phanbaihoc"
import Show_tienganhphothong_hocphatam from "../Show/Show_tienganhphothong_hocphatam"
import Dictaphone from "../../helpers/RegcognitionV1-0-1AI0.2LearnBasic"
// import MD_Image from "../../models/md_image"
import ReadMessage from "../Read/ReadMessage"
// import ThucHanhA from "../../../pages/thuchanh/thuchanhde"
let statusCount = 0;
let Int_nextDatalearn = 0;
export default function Show_TAPhothong(DL) {
    const [Data_Learn, SET_Data_Learn] = useState("")

    const [Name, SET_Name] = useState("---")

    const [Status, SET_Status] = useState("")

    const [Num_page, SET_Num_page] = useState(1)

    const [Page, SET_Page] = useState("hoctap")

    const [Data_Commands, SET_Data_Commands] = useState("====")

    const [Docthu, SET_Docthu] = useState("")

    const [Game_Nghevachoncau, SET_Game_Nghevachoncau] = useState(false)

    const [Score, SET_Score] = useState(0)

    // const md_img = new MD_Image()

    useEffect(() => {
        if (localStorage.getItem("score_ep")) {
            SET_Score(localStorage.getItem("score_ep"))
        }
    }, [Status])



    try {
        return (
            <div className="container">
                <div
                    id="ID_ShowTiengAnh"
                    style={{
                        position: "fixed",
                        top: "0px",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        border: "5px solid green",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        textAlign: 'justify',
                        overflowX: "hidden",
                        overflowY: "auto"
                    }}>
                    <hr />

                    {Name === ""
                        ? null
                        :
                        <div className="container">
                            {/* <h3>Xin chào {Name}</h3> */}
                            <p>Điểm: {Score}</p>
                            <div className="row" style={{ backgroundColor: "gray", padding: "5px" }}>
                                <div
                                    style={{ cursor: "pointer", backgroundColor: Page === "hoctap" ? "yellow" : "transparent" }}
                                    onClick={() => { SET_Page("hoctap") }} className="col-3">Học tập</div>
                          
                                <div
                                    style={{ cursor: "pointer", backgroundColor: Page === "phienam" ? "yellow" : "transparent" }}
                                    onClick={() => { SET_Page("phienam") }} className="col-3">Phiên âm</div>
                            </div>
                            <br />
                            {Page === "hoctap" ?
                                <div>
                                    <div style={{ display: "none" }}>
                                        <Dictaphone
                                            Data={Data_Commands}
                                        />
                                        <Read_ReactSpeech />
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-9">
                                            <select
                                                id="SelectID"
                                                style={{ padding: "5px", color: "red", fontSize: "20px" }}
                                                defaultValue="-1"
                                                onChange={(e) => {
                                                    SET_Num_page(e.currentTarget.value)
                                                    SET_Data_Learn("");
                                                    try {
                                                        $("#ID_ShowTiengAnh").scrollTop(150)
                                                        // $("#hrefID").attr("href", linkReset + "&p=" + $("#SelectID").val())
                                                    } catch (error) {
                                                        console.log("e")
                                                    }
                                                }}>
                                                <option value="0">Chọn trang</option>
                                                {DL.map((e, i) =>
                                                    <option key={i} value={i}> {i + 1}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <span>Trang.{parseInt(Num_page) + 1}</span>
                                        </div>
                                    </div>
                                    <hr />
                                    {Data_Learn === ""
                                        ?
                                        <div>

                                            {DL[Num_page].data.map((e, i) =>
                                                <div
                                                    key={i}
                                                    style={{
                                                        borderRadius: "10px",
                                                        border: "1px solid green",
                                                        backgroundColor: "#EEEBEB",
                                                        marginTop: "15px",
                                                        padding: "10px",
                                                        cursor: "pointer"
                                                    }}
                                                    onClick={() => {
                                                        SET_Data_Learn(DL[Num_page].data[i]);
                                                        Int_nextDatalearn = i
                                                    }}
                                                >
                                                    <div className="row">
                                                        <div className="col-9">
                                                            <h3>{e.VN}</h3>
                                                            <i style={{ color: "red" }}>{e.EN}</i>
                                                        </div>
                                                        <div className="col-3">
                                                            <i>Bấm chọn</i>
                                                        </div>
                                                    </div>

                                                </div>
                                            )}


                                            <hr />
                                            {/* <div className="text-left">
                                                <i >Bản dịch tiếng việt vài nơi còn chưa chuẩn ngữ nghĩa, quý vị phụ huynh và học sinh thông cảm. Chúng tôi sẽ cố gắng cải thiện trong thời gian tới.</i>
                                            </div> */}
                                            {/* <img src={DL[Num_page].img} alt={DL[Num_page].img} width="100%" />
                                            <div>
                                                <b>Liên hệ:</b> Phạm Văn Điện - 0918284482
                                                <br />
                                                <b>Facebook</b> <a href="https://www.facebook.com/profile.php?id=100010004440653" target="_blank">Bấm vào để liên hệ.</a>
                                            </div> */}
                                        </div>
                                        :
                                        <Show_tienganhphothong_phanbaihoc
                                            Data_Learn={Data_Learn} SET_Data_Learn={SET_Data_Learn}
                                            Data_Commands={Data_Commands} SET_Data_Commands={SET_Data_Commands}
                                            Docthu={Docthu} SET_Docthu={SET_Docthu}
                                        // md_img={md_img}
                                        />
                                    }
                                </div>
                                : null}


                            {/* {Page === "thuchanh" ?
                                <div>

                                    <ThucHanhA />

                                </div>
                                : null} */}


                            {Page === "phienam" ?
                                <div>
                                    <Show_tienganhphothong_hocphatam />
                                </div>
                                : null}

                            {Page === "trochoi" ?
                                <div>
                                    <div id="id_trochoi">
                                        <div style={{ display: "none" }}>
                                            <Read_ReactSpeech />
                                        </div>

                                        {/* <h3 style={{ backgroundColor: "black", color: "yellow", padding: "5px" }}>Trò chơi:</h3> */}
                                        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "inline-block", cursor: "pointer" }} onClick={() => { SET_Game_Nghevachoncau(true) }}>
                                            <h3 style={{ color: "red" }}> Nghe và chọn câu</h3>
                                            <i>Bấm để chơi</i>
                                        </div>

                                        <br />
                                        {/* {Game_Nghevachoncau ? md_img.game_withlisten(DL.slice(0, parseInt(Num_page) + 1), SET_Game_Nghevachoncau) : null} */}
                                    </div>
                                </div>
                                : null}
                        </div>
                    }
                    <hr />
                </div>


                <p id="id_location"></p>
                <p id="DataAcross"></p>
                <button style={{ display: "none" }} onClick={() => {
                    if ($("#messageRes").val() !== "" && Docthu === "Docthu") {
                        if (!localStorage.getItem("score_ep")) {
                            localStorage.setItem("score_ep", 1)
                            SET_Score(1)
                        } else {
                            localStorage.setItem("score_ep", parseInt(localStorage.getItem("score_ep")) + 1)
                            SET_Score(parseInt(localStorage.getItem("score_ep")) + 1)
                        }
                        SET_Score(S => S + 1)
                        SET_Docthu("A");
                        ReadMessage("Great", [1, 2].PickRandom());
                        SET_Data_Commands("====")
                    }
                }} id="messageResBtn"></button>
                <button onClick={() => {
                    try {
                        if (DL[Num_page].data[Int_nextDatalearn + 1].EN) {
                            SET_Data_Learn(DL[Num_page].data[Int_nextDatalearn + 1]); Int_nextDatalearn++
                        }

                    } catch (error) {
                        SET_Data_Learn(DL[Num_page].data[0]); Int_nextDatalearn = 0
                    }
                }} id="Btn_nextDatalearn"></button>
            </div >
        )
    } catch (error) {
        return null
    }
}

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}


