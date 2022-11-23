import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReadReactSpeech from "../../helpers/Read_ReactSpeechSlow";
import ReadMessage from "../../util/Read/ReadMessage";
import data from "./hinhanh.json";
let i = 0;
export default function A2Words3000Practice() {
  const [getDataShowGiaoan, setataShowGiaoan] = useState([]);
  let params = useParams();
  useEffect(() => {
    try {
      let ArrIndex = params.id.split("-");
      let i1 = parseInt(ArrIndex[0]);
      let i2 = parseInt(ArrIndex[1]);
      setataShowGiaoan();
      let dataOutput = data.slice(i1 * i2, i1 * i2 + i1);
      dataOutput.forEach((e) => {
        e.arrQS = ReturnObjToArrInOrder(e);
      });
      setataShowGiaoan(dataOutput);
    } catch (error) {}
  }, []);
  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-8">
          {showGiaoan(getDataShowGiaoan)}
          <hr />
        </div>
        <div className="col-4">
          <h4>Lưu ý quan trọng nhất</h4>
          <hr />
          <b>1. Cái gì trên đời này rèn luyện đủ nhiều đều làm được.</b>
          <br />
          <b>Quan trọng là bạn phải "DÁM" làm.</b>
          <br />
          <i>
            Để nghe nói được tiếng anh thì điều quan trọng{" "}
            <b>đầu tiên và tiên quyết</b> là bạn phải <b>DÁM NÓI</b> và{" "}
            <b>DÁM NGHE</b>. Đúng, sai, hay, dỡ chưa quan trọng, đừng sợ hãi,
            chỉ cần bạn <b>"dám làm"</b>, bạn đã thành công hơn tất cả những
            người không dám rồi.
          </i>
          <br />
          <b>
            2. Trong tiếng anh nghe nói quan trọng nhất là Ngữ âm (hay còn gọi
            là Ghép âm, phiên âm IPA,...)
          </b>
          <br />
          <b>
            3. Trong Ngữ âm, quan trọng nhất là 6 cụm Nguyên âm đơn chính
            (UEOAI-Ơ)
          </b>
          <hr />
          <div>
            <b>Mấu chốt của nghe nói là Ghép âm.</b>
            <br />
            <i>Các bước ghép âm.</i>
            <table className="table-sm">
              <tbody>
                <tr>
                  <td>1. Đếm được có bao nhiêu tiếng.</td>
                </tr>
                <tr>
                  <td>2. Xác định nguyên âm đơn chính.</td>
                </tr>
                <tr>
                  <td>3. Ghép từ trái sang phải theo logic.</td>
                </tr>
                <tr>
                  <td>
                    4. Đọc nhanh lên và căn chỉnh để trở thành từng âm đơn nhất
                    (một hơi).
                  </td>
                </tr>
                <tr>
                  <td>
                    + Âm nào có mặt thì phải có khẩu hình âm đó.
                    <br />+ Âm nguyên đơn chính đọc dài hơn mấy âm phía sau.
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <tbody>
                <tr>
                  <td>U</td>
                  <td>E</td>
                  <td>O</td>
                  <td>A</td>
                  <td>I</td>
                  <td>Ơ</td>
                </tr>
                <tr>
                  <td>
                    /ʊ/
                    <br />
                    /u:/
                  </td>
                  <td>/e/</td>
                  <td>
                    /ɒ/
                    <br />
                    /ɔ:/
                  </td>
                  <td>
                    /æ/
                    <br />
                    /ʌ/
                    <br />
                    /ɑ:/
                  </td>
                  <td>
                    /ɪ/
                    <br />
                    /i:/
                  </td>
                  <td>
                    /ə/
                    <br />
                    /ɜ:/
                  </td>
                </tr>
                <tr>
                  <td>
                    <b> bu</b>
                    <br />
                    /bʊ/
                    <br />
                    /bu:/
                  </td>
                  <td>
                    <b> be</b>
                    <br />
                    /be/
                  </td>
                  <td>
                    <b> bo</b>
                    <br />
                    /bɒ/
                    <br />
                    /bɔ:/
                  </td>
                  <td>
                    <b> ba</b>
                    <br />
                    /bæ/
                    <br />
                    /bʌ/
                    <br />
                    /bɑ:/
                  </td>
                  <td>
                    <b> bi</b>
                    <br />
                    /bɪ/
                    <br />
                    /bi:/
                  </td>
                  <td>
                    <b> bơ</b>
                    <br />
                    /bə/
                    <br />
                    /bɜ:/
                  </td>
                </tr>
              </tbody>
            </table>
            <b>4 bước để rèn luyện một kĩ năng bất kì.</b>
            <br />
            +Chia nhỏ kỹ năng thành những phần kỹ năng nhỏ nhất và cốt lõi nhất
            có thể;
            <br /> +Học những phần kỹ năng nhỏ nhất để có thể luyện tập theo
            cách thông minh và tự điều chỉnh trong suốt quá trình luyện tập;
            <br /> +Loại bỏ, vượt qua những rào cản về mặt kỹ thuật, tâm lý,
            tinh thần và tình cảm xuất hiện trong quá trình luyện tập;
            <br />+ Luyện tập những phần kỹ năng quan trọng nhất lặp lại với
            hiệu suất đủ lớn.
          </div>
          <hr />
          <div>
            <b>Để rèn luyện tốt, mỗi buổi thực hành học viên cần: </b>
            <br />+ Được nhắc lại về nguyên tắc ghép âm.
            <br />+ Được hướng dẫn và rèn luyện nói chuẩn 1 câu đúng liên tiếp 5
            lần (Có thể là câu dùng trong bài thực hành hoặc 1 trong 1000 câu cơ
            bản.).
            <br />+ Được hướng dẫn đọc qua (theo nguyên tắc ghép âm) tất cả các
            đáp án trong bài thực hành.
            <br />+ Được hướng dẫn để bình tĩnh giải quyết các vấn đề chưa biết
            một cách sáng tỏ, hướng tới biết cách để tự giải quyết vấn đề tương
            tự trong tương lai chứ không đơn giản là giải quyết được một vấn đề
            hiện tại.
            <br />
            <b>
              Khi đọc máy không nghe có thể là do nguyên nhân: Âm sai hoặc nhịp
              sai.
            </b>
            <br /> <b>Âm</b>: Là ghép theo nguyên tắc ghép âm. Có thể bị sai một
            hoặc nhiều điểm trong nguyên tắc. Một số điểm sai cở bản như: Không
            biết đến nguyên tắc ghép âm, không xác định được nguyên âm đơn
            chính, ghép thiếu khẩu hình âm, ghép các âm với âm điệu nặng nhẹ,
            nhanh chậm không hợp lý,v.v.
            <br />
            <b> Nhịp</b>: Nhịp ý chỉ việc giữ âm điệu (to nhỏ) và nhịp điệu (đều
            đặn) trong lúc nói. Việc nói quá to quá nhỏ, nhịp điều lúc nhanh lúc
            chậm, không đảm bảo có nhịp ngắt đều dẫn tới kết quả chưa tốt.
            <br />
            <b>Giáo viên hướng dẫn cần:</b>
            <br />+ Nắm rất chắc và rèn luyện tốt về nguyên tắc ghép âm.
            <br />+ Nghe, phân tích được điểm sai (có những điểm sai rất vi tế,
            đòi hỏi người hướng dẫn phải có nhiều trải nghiệm thực hành để nhận
            ra), hướng dẫn đủ dễ hiểu, rõ ràng và có logic để học viên có thể
            khắc phục được những vấn đề tương tự trong tương lai.
            <br />+ Có phương án giải quyết được các vấn đề kỹ thuật (nói máy
            không nghe - máy nói mình không nghe); vấn đề tâm lý (nóng nảy, bực
            tức, chán nản,...)
            <br />+ Không đẩy học viên vào làm những việc mà rõ ràng học viên
            chưa biết làm (thế bị động hoàn toàn).
          </div>
          <hr />
        </div>
      </div>
      <ReadReactSpeech />
    </div>
  );
}
function showGiaoan(data) {
  return (
    <div>
      <h5>Học để biết - rèn luyện để làm được!</h5>
      <i>
        Từ <b>"không biết"</b> đến <b>"biết"</b> cách nhau một khoảng{" "}
        <b>"học"</b>.
      </i>
      <br />
      <i>
        Từ <b>"biết"</b> đến <b>"làm được"</b> cách nhau một khoảng{" "}
        <b>"rèn luyện"</b>.
      </i>
      <hr />
      {data.map((e, i) => (
        <div>
          {i + 1}.{" "}
          <b
            onClick={() => {
              i++;
              ReadMessage(e.uSay, (i % 2) + 1, 0.6, 0.9);
            }}
            className="blueColor cursorCss"
          >
            {" "}
            {e.uSay}
          </b>{" "}
          -<b className="redColor">{e.uHint}</b> -
          <b className="blueColor">{e.uSayIPA}</b>
          <hr />
          <table className="table table-striped">
            <tbody>
              {e.arrQS.map((e, i) => (
                <tr>
                  <td
                    onClick={() => {
                      i++;
                      ReadMessage(e.mRespond, (i % 2) + 1, 0.6, 0.9);
                    }}
                    className="cursorCss"
                  >
                    {e.mRespond}
                  </td>
                  <td
                    onClick={() => {
                      i++;
                      ReadMessage(e.submit, (i % 2) + 1, 0.6, 0.9);
                    }}
                    className="cursorCss"
                  >
                    {<img src={e.submit} width="250px" />}
                  </td>
                  <td>{e.mean}</td>
                  <td>{e.ipa}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <input className="form-control upSizeCss" type={"text"} />
          <hr />
        </div>
      ))}
    </div>
  );
}

function ReturnObjToArrInOrder(obj) {
  let arrOutput = [];
  let getKeys = Object.keys(obj);
  let arrSubmit = [];
  getKeys.forEach((ee) => {
    if (ee.includes("sub")) {
      let id = ee.slice(3, 5);
      arrSubmit.push(id);
    }
  });
  arrSubmit.forEach((e) => {
    arrOutput.push({
      mRespond: obj["mSay" + e],
      submit: obj["sub" + e],
      mean: obj["mean" + e],
      ipa: obj["mSayIPA" + e],
    });
  });
  // $("#ResID").text(JSON.stringify(arrOutput));
  return arrOutput;
}
