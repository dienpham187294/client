import TuVungPhienAmDon from "../util/filedulieu/3000tuthongdung/TuvungDonPhanLoai.json"
import AmDonNull from "../util/filedulieu/3000tuthongdung/AmDonNull.json"
import TuVungPhienAmDoi from "../util/filedulieu/3000tuthongdung/TuVungDoiPhanLoai.json"
import AmDoiNull from "../util/filedulieu/3000tuthongdung/AmDoiNull.json"
import { data } from "jquery"
export default function Contact() {
    return (
        <div>
            <hr />
            <h3>Mấu chốt của cả nghe và nói là ngữ âm!</h3>
            <hr />
            <div className="A1Pricing_div1">
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
                            <td>4. Đọc nhanh lên.</td>
                        </tr>
                        <tr>
                            <td>
                                + Âm nào có mặt thì phải có khẩu hình âm đó.
                                <br />
                                + Âm nguyên đơn chính đọc dài hơn mấy âm phía sau.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <h5>Nguyên âm đơn chính phát âm và ghép âm tương tự khi so sánh với tiếng việt</h5>
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
                        <td>
                            /e/
                        </td>
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
                            <b>  bu</b>
                            <br />
                            /bʊ/
                            <br />
                            /bu:/
                        </td>
                        <td>
                            <b>  be</b>
                            <br />
                            /be/
                        </td>
                        <td>
                            <b>  bo</b>
                            <br />
                            /bɒ/
                            <br />
                            /bɔ:/
                        </td>
                        <td>
                            <b>  ba</b>
                            <br />
                            /bæ/
                            <br />
                            /bʌ/
                            <br />
                            /bɑ:/
                        </td>
                        <td>
                            <b>  bi</b>
                            <br />
                            /bɪ/
                            <br />
                            /bi:/
                        </td>
                        <td>
                            <b>  bơ</b>
                            <br />
                            /bə/
                            <br />
                            /bɜ:/
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <div id="nguyenamdon">
                <h4 >Ghép âm đơn</h4>
            </div>

            <table className="table table-sm">
                <tbody>
                    {
                        AmDonNull.map((e, i) =>
                            i === 0 ?
                                <tr key={i} style={{ fontWeight: 800, fontSize: "larger" }} >
                                    {e.map((ee, ii) =>
                                        <td key={ii}>
                                            {ee}
                                        </td>
                                    )}
                                </tr>
                                :
                                <tr key={i} >
                                    {e.map((ee, ii) =>
                                        ii === 0 ?
                                            <td key={ii} style={{ fontWeight: 800, fontSize: "larger" }} >
                                                {ee}
                                            </td>
                                            :
                                            <td key={ii} style={{ cursor: "pointer" }}>
                                                <a href={"#" + ee}> {ee}</a>
                                            </td>
                                    )}
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <hr />

            <div id="nguyenamdoi">
                <h4>Ghép âm đôi</h4>
            </div>
            <table className="table table-sm" >
                <tbody>
                    {
                        AmDoiNull.map((e, i) =>
                            i === 0 ?
                                <tr key={i} style={{ fontWeight: 800, fontSize: "larger" }} >
                                    {e.map((ee, ii) =>
                                        <td key={ii}>
                                            {ee}
                                        </td>
                                    )}
                                </tr>
                                :
                                <tr key={i} >
                                    {e.map((ee, ii) =>
                                        ii === 0 ?
                                            <td key={ii} style={{ fontWeight: 800, fontSize: "larger" }} >
                                                {ee}
                                            </td>
                                            :
                                            <td key={ii} style={{ cursor: "pointer" }}>
                                                <a href={"#" + ee}> {ee}</a>
                                            </td>
                                    )}
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <hr />
            {ShowExample(TuVungPhienAmDon)}
            <hr />
            {ShowExample(TuVungPhienAmDoi)}
        </div>
    )
}

function ShowExample(Data) {

    return (
        <div >
            {Data.map((e, i) =>
                e.data === null ? null :

                    <div key={i} id={e.id} className="NguAmShowExample">
                        <h3>Âm: {e.id}</h3>
                        <br />
                        <button className="btn btn-sm btn-primary mr-2">
                            <a href="#nguyenamdon">Bảng NA Đơn</a>
                        </button>
                        <button className="btn btn-sm btn-primary ml-2">
                            <a href="#nguyenamdoi">Bảng NA Đôi</a>
                        </button>

                        {
                            ShowData(e.data)
                        }
                    </div>

            )}
        </div>
    )
}
function ShowData(data) {
    try {


        return (
            <div >
                <table className="table table-sm">
                    <tbody>
                        {data.map((e, i) =>
                            <tr>
                                <td>{e.Ipa}</td>
                                <td>{e.IpaUS}</td>
                                <td>{e.Word}</td>
                                <td>{e.PoW}</td>
                                <td>{e.Meaning}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    } catch (error) {
        console.log(error)
        return null
    }

}