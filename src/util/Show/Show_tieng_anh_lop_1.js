import { useState } from "react"
import $ from "jquery"
import Show_tienganhphothong_phanbaihoc from "./Show_tienganhphothong_phanbaihoc"
import ReadMessage from "../ReadMessage"
import ReadReactSpeech from "../../helpers/Read_ReactSpeech"
import MD_Image from "../models/md_image"
// const queryString = require('query-string');
let linkReset = ""
// let statusCount = 0;
let Int_nextDatalearn = 0;
let i = 0;
let h_data = []
export default function Show_Tieng_anh_lop_1(Dulieu_tieng_anh_lop_1, tokenCheck, href) {
    const [Data_Learn, SET_Data_Learn] = useState("")

    const [Name, SET_Name] = useState("134")

    // const [Status, SET_Status] = useState("")

    const [Num_page, SET_Num_page] = useState(0)

    // const [DateExpried, SET_DateExpried] = useState("")

    const [Data_Commands, SET_Data_Commands] = useState("====")

    const [Docthu, SET_Docthu] = useState("")

    const [Game_Nhinhinhdoanchu, SET_Game_Nhinhinhdoanchu] = useState(false)

    const [Game_Nghevachoncau, SET_Game_Nghevachoncau] = useState(false)

    const [Score, SET_Score] = useState(0)

    // const md = new md_tokenApp

    const md_img = new MD_Image()





    // useEffect(() => {
    //     if (i === 0) {
    //         if (navigator.userAgent.includes("FB")) {

    //             if (navigator.userAgent.includes("OS")) {
    //                 SET_Status("showiOS")
    //             }
    //             else {
    //                 SET_Status("showAndroid")
    //             }
    //         } else {
    //             try {
    //                 let parsed = queryString.parse(window.location.search)
    //                 md.findOne(parsed.token).then(res => {
    //                     try {
    //                         h_data.push(res[0])
    //                         navigator.geolocation.getCurrentPosition(showPosition)
    //                         if (res[0].isActived === "null") {
    //                             SET_Status("kichhoat");
    //                         }
    //                         if (res[0].isActived !== "null" && res[0].token.includes(tokenCheck)) {
    //                             try {
    //                                 localStorage.getItem("token_ep").includes(tokenCheck) ?
    //                                     (
    //                                         SET_Name(res[0].name),
    //                                         (res[0].page > 0) ? SET_Num_page(res[0].page) : null,
    //                                         (res[0].score > 0) ? SET_Score(res[0].score) : null,
    //                                         !res[0].ip.includes(navigator.userAgent) ? md.insert_ip(res[0].token, navigator.userAgent) : null,
    //                                         getIp().then(res1 => {
    //                                             md.insert_chaseLog(res[0].token, navigator.userAgent + ";" + res1.ip + ";" + Date.now() + ";" + $("#id_location").text() + ";01")
    //                                         })
    //                                     )
    //                                     : getIp().then(res1 => {
    //                                         res[0].ip.includes(navigator.userAgent)
    //                                             ? (
    //                                                 SET_Name(res[0].name),
    //                                                 (res[0].page > 0) ? SET_Num_page(res[0].page) : null,
    //                                                 (res[0].score > 0) ? SET_Score(res[0].score) : null,
    //                                                 localStorage.setItem("token_ep", localStorage.getItem("token_ep") + "epdp" + tokenCheck),
    //                                                 md.insert_chaseLog(res[0].token, navigator.userAgent + ";" + res1.ip + ";" + Date.now() + ";" + $("#id_location").text() + ";02")
    //                                             )
    //                                             : (SET_Status("khactaikhoan"))
    //                                     });

    //                             } catch (error) {
    //                                 try {
    //                                     getIp().then(res1 => {
    //                                         // console.log(res[0].ip, (navigator.userAgent))
    //                                         res[0].ip.includes(navigator.userAgent)
    //                                             ? (
    //                                                 SET_Name(res[0].name),
    //                                                 (res[0].page > 0) ? SET_Num_page(res[0].page) : null,
    //                                                 (res[0].score > 0) ? SET_Score(res[0].score) : null,
    //                                                 localStorage.setItem("token_ep", localStorage.getItem("token_ep") + "epdp" + tokenCheck),
    //                                                 md.insert_chaseLog(res[0].token, navigator.userAgent + ";" + res1.ip + ";" + Date.now() + ";" + $("#id_location").text() + ";03")
    //                                             )
    //                                             : (SET_Status("khactaikhoan"))
    //                                     });
    //                                 } catch (error) {
    //                                     console.log("lỗi")
    //                                     SET_Status("khactaikhoan")
    //                                 }
    //                             }
    //                         }

    //                         if (res[0].isActived !== "null" && !res[0].token.includes(tokenCheck)) {
    //                             SET_Status("khongtontai")
    //                         }


    //                     } catch (error) {
    //                         console.log(error)
    //                         SET_Status("khongtontai")
    //                     }

    //                 })

    //             } catch (error) {
    //                 console.log("error")
    //             }

    //         }
    //         i++
    //     }
    // }, [Status])



    try {
        return (
            <div className="container">
                <div
                    id="ID_ShowTiengAnh"
                    style={{
                        position: "absolute",
                        top: "50px",
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

                    {Name === ""
                        ? null
                        :
                        <div className="container">

                            <h3>Xin chào {Name}</h3>
                            <p>Điểm: {Score}</p>
                            {/* <Dictaphone
                                Data={Data_Commands}
                            /> */}
                            <hr />
                            <div className="row">
                                <div className="col-9">
                                    <select
                                        id="SelectID"
                                        style={{ padding: "5px", color: "red", fontSize: "20px" }}
                                        defaultValue="-1"
                                        onChange={(e) => {
                                            // md.updateOne_page(h_data[0].token, e.currentTarget.value)
                                            SET_Num_page(e.currentTarget.value)
                                            SET_Data_Learn("");
                                            try {
                                                $("#ID_ShowTiengAnh").scrollTop(150)
                                                $("#hrefID").attr("href", linkReset + "&p=" + $("#SelectID").val())
                                            } catch (error) {
                                                console.log("e")
                                            }
                                        }}>
                                        <option value="0">Chọn trang</option>
                                        {Dulieu_tieng_anh_lop_1.map((e, i) =>
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
                                    <h3 style={{ backgroundColor: "black", color: "yellow", padding: "5px" }}>Bấm chọn câu muốn học</h3>
                                    <a href="#id_trochoi">Chuyển nhanh đến trò chơi</a>
                                    {Dulieu_tieng_anh_lop_1[Num_page].data.map((e, i) =>
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
                                                SET_Data_Learn(Dulieu_tieng_anh_lop_1[Num_page].data[i]);
                                                Int_nextDatalearn = i
                                                // try {
                                                //     if (!window.fullscreen && statusCount === 0) {
                                                //         // FullScreen("ID_ShowTiengAnh")
                                                //         statusCount = 1
                                                //     }
                                                // } catch (error) {
                                                //     console.log("es")
                                                // }
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

                                            <hr />
                                            <div>{md_img.Show_img(e.ArrImg)}</div>
                                        </div>
                                    )}
                                    <hr />
                                    <div id="id_trochoi">
                                        <h3 style={{ backgroundColor: "black", color: "yellow", padding: "5px" }}>Trò chơi:</h3>



                                        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "inline-block", cursor: "pointer" }} onClick={() => { SET_Game_Nhinhinhdoanchu(true) }}>

                                            <h3 style={{ color: "red" }}> Nhìn hình đoán chữ</h3>
                                            <i>Bấm để chơi</i>
                                        </div>

                                        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "inline-block", cursor: "pointer" }} onClick={() => { SET_Game_Nghevachoncau(true) }}>
                                            <h3 style={{ color: "red" }}> Nghe và chọn câu</h3>
                                            <i>Bấm để chơi</i>

                                        </div>
                                        <br />
                                        {Game_Nhinhinhdoanchu ? md_img.game_withImg(Dulieu_tieng_anh_lop_1.slice(0, parseInt(Num_page) + 1), SET_Game_Nhinhinhdoanchu) : null}
                                        {Game_Nghevachoncau ? md_img.game_withlisten(Dulieu_tieng_anh_lop_1.slice(0, parseInt(Num_page) + 1), SET_Game_Nghevachoncau) : null}

                                    </div>
                                    <hr />
                                    <div className="text-left">
                                        <i >Bản dịch tiếng việt vài nơi còn chưa chuẩn ngữ nghĩa, quý vị phụ huynh và học sinh thông cảm. Chúng tôi sẽ cố gắng cải thiện trong thời gian tới.</i>
                                    </div>
                                    <img src={Dulieu_tieng_anh_lop_1[Num_page].img} alt={Dulieu_tieng_anh_lop_1[Num_page].img} width="100%" />
                                   
                                    <hr />
                                </div>
                                :
                                <Show_tienganhphothong_phanbaihoc
                                    Data_Learn={Data_Learn} SET_Data_Learn={SET_Data_Learn}
                                    Data_Commands={Data_Commands} SET_Data_Commands={SET_Data_Commands}
                                    Docthu={Docthu} SET_Docthu={SET_Docthu}
                                    md_img={md_img}
                                />
                            }
                        </div>
                    }
                    <hr />
                </div>

                <ReadReactSpeech />
                <p id="id_location"></p>
                <p id="DataAcross"></p>
                <button style={{ display: "none" }} onClick={() => {
                    if ($("#messageRes").val() !== "" && Docthu === "Docthu") {
                        // md.increase_score(h_data[0].token)
                        SET_Score(S => S + 1)
                        SET_Docthu("A");
                        ReadMessage("Great", [1, 2].PickRandom());
                        SET_Data_Commands("====")
                    }
                }} id="messageResBtn"></button>
                <button onClick={() => {
                    try {
                        if (Dulieu_tieng_anh_lop_1[Num_page].data[Int_nextDatalearn + 1].EN) {
                            SET_Data_Learn(Dulieu_tieng_anh_lop_1[Num_page].data[Int_nextDatalearn + 1]);
                            Int_nextDatalearn++
                        }
                    } catch (error) {
                        SET_Data_Learn(Dulieu_tieng_anh_lop_1[Num_page].data[0]); Int_nextDatalearn = 0
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


function showPosition(position) {
    $("#id_location").text(position.coords.latitude + "---" + position.coords.longitude);
}
