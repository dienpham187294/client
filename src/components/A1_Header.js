
import { useState, useEffect } from "react"

import "./A1Header.css"
export default function Header() {
    const [getName, setName] = useState("")
    const [getEmail, setEmail] = useState("")
    const [getPhone, setPhone] = useState("")
    const [getFetchEmail, setFetchEmail] = useState(0)
    const [getSTT, setSTT] = useState(false)
    const [T0_linkApi] = useState("https://nodejsserverforenglishtool.herokuapp.com/")
    useEffect(() => {
        if (getFetchEmail > 1) {
            try {
                let obj = {
                    getName: getName,
                    getPhone: getPhone,
                    getEmail: getEmail
                }
                let requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(obj)
                };
                fetch(T0_linkApi + "mailDK", requestOptions)
                    .then((res) => res.json())
                    .then((json) => {
                        setSTT(true)
                    })
            } catch (error) {
                console.log(error)
            }
        }

    }, [getFetchEmail])



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img className="logo" src="https://i.postimg.cc/NM4YHbz0/englishtoolco.jpg" />
                    <b><i className="brandname">English<span style={{ color: "blue" }}>Tool</span>co </i></b>
                </div>
                <div className="col-6 divSlogan">
                    <b>
                        <i className="slogan">
                            Nơi sử dụng tiếng anh!
                        </i>
                    </b>

                </div>
            </div>
            <main>
                <div className="row" style={{ textAlign: "center" }}>
                    <div className="col-3">
                        <hr />
                    </div>
                    <div className="col-6 ">
                        <h3> <i>Chương trình</i></h3>
                    </div>
                    <div className="col-3">
                        <hr />
                    </div>
                    <div> <h1>RÈN LUYỆN TIẾNG ANH</h1></div>
                    <div className="col-12">
                        <hr />
                    </div>
                    <div><h1 style={{ color: "blue" }}>DÙNG nhiều hơn HỌC - Kết quả đến ngay sau 1 tháng thực hành!</h1></div>
                    <div>
                        <img src="https://i.postimg.cc/gj13XrKc/englishtool01.png" alt="slogan" />
                    </div>
                    <div className="hrefBox">
                        <a href="#dangkybox">Đăng ký ngay!</a>
                        <br />
                        <i>Học thử 4 buổi!</i>
                    </div>
                    <div>
                        <div className="divUL">
                            <h1>Bạn đang:</h1>
                            <ul>
                                <li>Chưa thể giao tiếp tiếng Anh do không có <b>CƠ HỘI</b> thực hành nghe – nói thường xuyên</li>
                                <li>
                                    <b>BẾ TẮC</b> với phương pháp học truyền thống chú trọng vào học thi dựa trên đọc viết, không
                                    dùng được trong thực tế
                                </li>
                                <li>
                                    Thiếu <b>MÔI TRƯỜNG</b> rèn luyện tiếng Anh lâu dài; THIẾU môi trường tạo động lực và
                                    hứng thú cho Bạn
                                </li>

                            </ul>
                        </div>
                        <div className="divUL">
                            <h1>Bạn muốn:</h1>
                            <ul>
                                <li>
                                    Rèn luyện <b>NGHE & NÓI</b> tiếng Anh - Đạt kỹ năng ở mức tương đối, dùng <b>ĐƯỢC</b> trong thực tế
                                </li>
                                <li>
                                    <b>TIẾT KIỆM</b> thời gian, công sức và đáp ứng được nhu cầu sử dụng tiếng Anh của cá nhân
                                </li>
                                <li>
                                    Có môi trường rèn luyện tiếng Anh <b>THƯỜNG XUYÊN và LIÊN TỤC</b>
                                </li>
                            </ul>
                        </div>
                        <div className="divUL">
                            <h1>Hãy để English<i style={{ color: "blue" }}>Tool</i>Co giúp Bạn nhanh chóng
                                đạt được Kĩ Năng Nghe – Nói tiếng Anh:</h1>
                            <ul>
                                <li>
                                    Cực kì dễ dàng, đơn giản, <b>LOẠI BỎ</b> tối đa các áp lực xấu hổ, sợ hãi, ngại
                                    ngùng, sợ sai, không dám nói trước người lạ.
                                </li>
                                <li>
                                    <b>80% THỜI GIAN</b> Bạn sẽ tập trung vào rèn luyện và sử dụng tiếng Anh.
                                </li>
                                <li>
                                    Phương pháp rèn luyện dựa trên các trò chơi thú vị, <b>TỐI ĐA HÓA</b> thời
                                    gian thực hành, hạn chế cảm giác chán nản, lười biếng.
                                </li>
                                <li>
                                    Chỉ học đúng 3 điều <b>CỐT LÕI NHẤT</b>, không học hàn lâm, lan man:
                                    <ul>
                                        <li>
                                            <b> Phát âm tiếng Anh</b>
                                        </li>
                                        <li>
                                            <b> 1000 từ vựng thông dụng</b>
                                        </li>
                                        <li>
                                            <b> Cách nói câu tiếng Anh cơ bản nhất</b>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Ghi nhận phản hồi <b>NHANH</b> với trí tuệ nhân tạo.
                                </li>
                                <li>
                                    Giáo viên trực tiếp <b>CHỈ DẪN</b> hoàn thiện phát âm, phần trọng yếu nhất
                                    của ngôn ngữ.
                                </li>
                                <li>
                                    Gửi <b>báo cáo thực hành</b> trực tiếp về email.
                                </li>
                                <li>
                                    Chi phí hợp lý chỉ từ <b>9tr999 / khóa.</b>
                                </li>
                                <li>
                                    <b>Cam kết</b> hiệu quả trong 1 tháng.
                                </li>
                            </ul>
                        </div>
                        <div className="hrefBox">
                            <a href="#dangkybox">Đăng ký ngay!</a>
                            <br />
                            <i>Học thử 4 buổi!</i>
                        </div>

                        <div>
                            <img src="https://i.postimg.cc/cH9RWFgn/englishtool02.png" alt="chuongtrinh" />
                        </div>
                        <div className="dangky" id="dangkybox">
                            <h1>Đăng ký ngay!</h1>
                            <i>Trải nghiệm học thử 4 buổi!</i>
                            <input

                                onChange={(e) => {
                                    setName(e.currentTarget.value)
                                }}
                                defaultValue={getName}
                                className="form-control ID" type={"text"} placeholder={"Nhập Tên"} />

                            <br />
                            <input

                                onChange={(e) => {
                                    setPhone(e.currentTarget.value)
                                }}
                                defaultValue={getPhone}
                                className="form-control ID" type={"text"} placeholder={"Nhập số điện thoại"} />

                            <br />
                            <input
                                onChange={(e) => {
                                    setEmail(e.currentTarget.value)
                                }}
                                defaultValue={getEmail}
                                className="form-control ID" type={"text"} placeholder={"Email"} />

                            <br />
                            {getSTT ? <i>Đã đăng ký thành công, chúng tôi sẽ liên hệ sớm với bạn!</i> :
                                getPhone.length >= 9 && getName.length >= 4 && getEmail.includes("@")
                                    ?
                                    <input
                                        onClick={() => {
                                            setFetchEmail(F => F + 1)
                                        }}
                                        className="btn btn-outline-primary" type={"button"} value="Đăng ký" />
                                    : <input
                                        disabled
                                        className="btn btn-outline-danger" type={"button"} value="Đăng ký" />
                            }

                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <hr />
                Công ty Cổ phần EPS
                <br />
                Địa chỉ: Căn hộ số LM81-26.OT11 toà Landmark 81 Vinhomes Central Park, 720A Điện Biên Phủ, P22, Bình Thạnh, HCM
            </footer>
        </div >
    )
}