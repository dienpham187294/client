import TuVungPhienAmDon from "../util/filedulieu/3000tuthongdung/TuvungDonPhanLoai.json"
import AmDonNull from "../util/filedulieu/3000tuthongdung/AmDonNull.json"
import TuVungPhienAmDoi from "../util/filedulieu/3000tuthongdung/TuVungDoiPhanLoai.json"
import AmDoiNull from "../util/filedulieu/3000tuthongdung/AmDoiNull.json"
import { data } from "jquery"
export default function Contact() {
    return (
        <div>
            <hr />
            <h1>Nguyên âm tương đồng trong tiếng việt</h1>
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
                            /ʊ /
                            <br />
                            /u:/
                        </td>
                        <td>
                            /e /
                        </td>
                        <td>
                            /ɒ /
                            <br />
                            /ɔ:/
                        </td>
                        <td>
                            /æ/
                            <br />
                            /ʌ /
                            <br />
                            /ɑ:/
                        </td>
                        <td>
                            /ɪ/
                            <br />
                            /i:/
                        </td>
                        <td>
                            /ə /
                            <br />
                            /ɜ:/
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <div id="nguyenamdon">
                <h1 >Ghép âm đơn</h1>
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
                <h1>Ghép âm đôi</h1>
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