import { useState, useEffect } from "react";

import "./A1Header.css";
export default function Header() {
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getFetchEmail, setFetchEmail] = useState(0);
  const [getSTT, setSTT] = useState(false);
  const [T0_linkApi] = useState(
    "https://nodejsserverforenglishtool.herokuapp.com/"
  );
  useEffect(() => {
    if (getFetchEmail > 1) {
      try {
        let obj = {
          getName: getName,
          getPhone: getPhone,
          getEmail: getEmail,
        };
        let requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        };
        fetch(T0_linkApi + "mailDK", requestOptions)
          .then((res) => res.json())
          .then((json) => {
            setSTT(true);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [getFetchEmail]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img
            className="logo"
            src="https://i.postimg.cc/NM4YHbz0/englishtoolco.jpg"
          />
          <b>
            <i className="brandname">
              English<span className="greenColor">Tool</span>
            </i>
          </b>
        </div>
        <div className="col-6 divSlogan">
          <b>
            <i className="slogan">Nơi rèn luyện kỹ năng!</i>
          </b>
        </div>
      </div>
      <main>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-3">
            <hr />
          </div>
          <div className="col-6 ">
            <h3>
              {" "}
              <i>Chia sẻ về</i>
            </h3>
          </div>
          <div className="col-3">
            <hr />
          </div>
          <div>
            {"  "}
            <h1>RÈN LUYỆN KỸ NĂNG TIẾNG ANH</h1>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div>
            <h2 className=" greenColor">
              Sự khác biệt và ưu điểm của lớp rèn luyện kĩ năng so với các
              phương pháp học truyền thống!
            </h2>
          </div>
          <div>
            <img
              src="https://i.postimg.cc/2y8f07gZ/z3795170132503-46eb843ada5bcea677eafaadd3f5f928.jpg"
              alt="slogan"
            />
          </div>
          {/* <div className="hrefBox">
                        <a href="#dangkybox">Bạn cần tiem hiểu thêm!</a>
                        <br />
                        <i>Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn!</i>
                    </div> */}
          <div>
            <div className="divUL">
              <h2>
                Thứ nhất, Tiêu chí ở EnglishTool là rèn luyện để "làm được" chứ
                không học "cho biết".
              </h2>
              <div className="textDiv">
                <p>
                  - Khác với phương pháp truyền thống luôn coi Anh văn là một
                  môn học mà ở đó học viên được học "cho biết". Chú trọng vào
                  ngữ pháp, làm bài tập và thi cử.
                </p>
                <p>
                  - Ở lớp rèn luyện kĩ năng học viên sẽ không học nhiều mà tập
                  trung rèn luyện để "làm được". Cụ thể "làm được" theo thứ tự
                  là nghe được, nói được, đọc được và viết được.
                </p>
              </div>
            </div>
            <div className="divUL">
              <h2>
                Thứ hai, Hiệu quả của phương pháp - tiến bộ kỹ năng của học viên
                được thấy ngay lập tức.
              </h2>
              <div className="textDiv">
                <p>
                  - Phương pháp học truyền thống thường đánh giá kết quả dựa
                  trên việc thi cử sau một khoảng thời gian nhất định. Học viên
                  chỉ nghe giảng giải bằng tiếng việt sau đó cố gắng ghi chép và
                  ghi nhớ. Dường như không có cơ hội nghe và nói tiếng anh.
                </p>
                <p>
                  - Phương pháp mới của chúng tôi Nhờ ứng dụng công nghệ thông
                  tin vào rèn luyện kĩ năng, mỗi học viên đều sẽ thực hành riêng
                  biệt trên máy tính với thời gian như nhau. Mỗi học viên của
                  chúng tôi đều được rèn luyện nghe - nói - đọc hàng trăm lần
                  mỗi buổi thực hành. Kết quả sẽ được phản hồi lại ngay lập tức
                  và sự tiến bộ cũng sẽ thấy rõ ngay sau từng buổi học mà không
                  cần chờ đến kì thi.
                </p>
              </div>
            </div>
            <div className="divUL">
              <h2>
                Thứ ba, Việc "làm được" nhiều lần và lặp lại liên tục khi rèn
                luyện giúp học viên có một sự tự tin lớn đối với tiếng anh.
              </h2>
              <div className="textDiv">
                <p>
                  - Một điểm chung của phần nhiều học sinh việt nam là rất sợ
                  tiếng anh. Luôn coi tiếng anh là một thứ khó khăn và rất rụt
                  rè, tự ti trong việc nghe - nói tiếng anh.
                </p>
                <p>
                  - Điều này không phải do tiếng anh khó mà chủ yếu là do không
                  có cơ hội được rèn luyện.
                </p>
                <p>
                  - Với lớp rèn luyện kĩ năng học viên nhờ được nghe, nói rất
                  nhiều nên đường nhiên sẽ cảm nhận tiếng anh đơn giản và tự tin
                  trong việc sử dụng trong thực tế.
                </p>
              </div>
            </div>
            <div className="divUL">
              <h2>Thứ tư, Khơi dậy sự hứng thú đối với tiếng anh.</h2>
              <div className="textDiv">
                <p>
                  - Kiểu dạy học nhồi nhét và áp lực bài tập, thi cử có thể
                  khiến học sinh bị sợ môn tiếng anh, sinh ra tâm lý trốn tránh,
                  bỏ mặc.
                </p>
                <p>
                  - Tạo học viên hứng thú là một nhiệm vụ quan trọng, then chốt.
                </p>
                <p>
                  - Để làm được chúng tôi thiết kế chương trình như những thử
                  thách thú vị, có bối cảnh như một trò chơi. Học viên sẽ vừa
                  chơi vừa rèn luyện, vừa đảm bảo hiệu quả nhưng không kém phần
                  vui vẻ.
                </p>
              </div>
            </div>
            <div className="divUL">
              <h2>Thứ năm, Lộ trình rèn luyện cá nhân hóa.</h2>
              <div className="textDiv">
                <p>
                  - Ở phương pháp truyền thống, thương tất cả trong một lớp phải
                  học theo một bài thống nhất. Dù tất nhiên trong một lớp sẽ có
                  em nắm nhiều, có em nắm ít, chênh lệch với nhau.
                </p>
                <p>
                  - Việc này dẫn đến hệ quả là các em yếu sẽ càng ngày càng bị
                  bỏ xa dẫn tới mất gốc.
                </p>
                <p>
                  - Ở lớp rèn luyện kĩ năng, nhờ việc mỗi em sẽ thực hành riêng
                  biệt trên máy nên kĩ năng của các học viên đến đâu, giáo viên
                  hướng dẫn sẽ hướng dẫn đến đấy, không nhảy cóc, không phải áp
                  lực chạy theo người khác.
                </p>
                <p>
                  - Việc cá nhân hóa lộ trình cho từng em sẽ đảm bảo tất cả các
                  em đều rèn luyện từ tốn cho đến khi đạt được kĩ năng tiêu
                  chuẩn.
                </p>
              </div>
            </div>
            {/* <div>
              <img
                src="https://i.postimg.cc/cH9RWFgn/englishtool02.png"
                alt="chuongtrinh"
              />
            </div> */}
            <div className="dangky" id="dangkybox">
              <h1>Bạn muốn tìm hiểu về Englishtool!</h1>
              <i>Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn nhé!</i>
              <input
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
                defaultValue={getName}
                className="form-control ID"
                type={"text"}
                placeholder={"Nhập Tên"}
              />

              <br />
              <input
                onChange={(e) => {
                  setPhone(e.currentTarget.value);
                }}
                defaultValue={getPhone}
                className="form-control ID"
                type={"text"}
                placeholder={"Nhập số điện thoại"}
              />

              <br />
              <input
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                defaultValue={getEmail}
                className="form-control ID"
                type={"text"}
                placeholder={"Email"}
              />

              <br />
              {getSTT ? (
                <i>Đã đăng ký thành công, chúng tôi sẽ liên hệ sớm với bạn!</i>
              ) : getPhone.length >= 9 &&
                getName.length >= 4 &&
                getEmail.includes("@") ? (
                <input
                  onClick={() => {
                    setFetchEmail((F) => F + 1);
                  }}
                  className="btn btn-outline-primary"
                  type={"button"}
                  value="Đăng ký"
                />
              ) : (
                <input
                  disabled
                  className="btn btn-outline-danger"
                  type={"button"}
                  value="Đăng ký"
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <hr />
        Công ty TNHH Englishtool
        <br />
        VP: Căn hộ số LM81-26.OT11 toà Landmark 81 Vinhomes Central Park, 720A
        Điện Biên Phủ, P22, Bình Thạnh, HCM
        <br />
        CN1: 49 Lý Thường Kiệt, TT Phước An, Krongpak, Daklak
        <br />
        CN2: Ngã 3 Tân Tiến, Tân Tiến, Krongpak, Daklak
        <br />
        Phone: 0918 284 482
      </footer>
    </div>
  );
}
