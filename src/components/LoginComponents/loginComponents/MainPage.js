import React, { useState, useEffect } from "react"
import { delettCookie } from '../../../helpers/functionCookies';
import { Container } from 'react-bootstrap';
import { Key } from "../../../helpers/Key";

function MainPage({ setPageLogin, socket, DataUsername }) {
    const [NameofShow, setNameofShow] = useState("");
    const [DataToshow, setDataToshow] = useState("");

    const [DataCorrect, setDataCorrect] = useState("");
    const [DataunCorrect, setDataunCorrect] = useState("");

    useEffect(() => {
        if (NameofShow !== "") {
            socket.emit("Login", ["get_info_One", NameofShow, socket.id]);
            socket.on("get_info_One", (data) => {
                setDataToshow(data);
            });
            socket.on("get_info_OneCorrect", (data) => {
                setDataCorrect(data);
            });
            socket.on("get_info_OneunCorrect", (data) => {
                setDataunCorrect(data);
            });
        }
    }, [NameofShow, socket])
    function FnLogout() {
        delettCookie("username");
        setPageLogin("Login");
    }
    return (
        <div className="row">
            <div className="col-2">
                <div className="mt-3">
                    <button className="btn btn-outline-primary" onClick={() => setNameofShow("")}>
                        All   Table
                    </button> </div>
                <div className="mt-3">
                    <button className="btn btn-outline-primary" onClick={() => FnLogout()}>
                        Log Out
                    </button>
                </div>
            </div>
            <div className="col-10">
                {NameofShow === ""
                    ?
                    < div >
                        <Table Username={DataUsername} setNameofShow={setNameofShow} />
                    </div>
                    :
                    <div>
                        <OneShow DataToshow={DataToshow} DataCorrect={DataCorrect} DataunCorrect={DataunCorrect} NameofShow={NameofShow} />
                    </div>}
            </div>

        </div>
    )
}

export default MainPage


function Table(props) {
    const listinfo = props.Username;
    const listItems =
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Username</td>
                    <td>Position</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>{listinfo.map((dot) =>
                <tr key={Key()}>
                    <td>{dot.username}</td>
                    <td>{dot.position}</td>
                    <td onClick={() => props.setNameofShow(dot.username)} style={{ cursor: "grab" }}>Show</td>
                </tr>
            )}
            </tbody>
        </table>;
    return (
        <Container>{listItems}</Container>
    );
}
function OneShow(props) {
    let arrCorrect = props.DataCorrect.split(" ");
    let arrunCorrect = props.DataunCorrect.split(" ");
    let arr = props.DataToshow.split(" ");
    let arrCount = countWords(arr);
    let arrCountCorrect = countWords(arrCorrect);
    let arrCountunCorrect = countWords(arrunCorrect);
    let ObjMax = arrLapLaiNhieuNhat(arrCount);

    let listItems =
        <div>
            <h3>Thống kê: {props.NameofShow}</h3>
            <p className="border border-primary mt-3" />
            <h5>Tổng số từ vựng đã sử dụng: {arrCount.length - 1}</h5>
            <p>Từ lặp lại nhiều nhất:___ {ObjMax[0].word}___ với {ObjMax[0].num} lần. </p>
            <p className="border border-primary mt-3" />

            <h5>Tất cả từ đã nói chính xác: {arrCorrect.length}</h5>
            <p>{props.DataCorrect}</p>
            <p className="border border-primary mt-3" />

            <h5>Tất cả từ đã nói không chính xác: {arrunCorrect.length}</h5>
            <p>{props.DataunCorrect}</p>
            <p className="border border-primary mt-3" />

            <h5>Tất cả từ đã nói được ghi nhận: {arr.length}</h5>
            <p>{props.DataToshow}</p>

            <p className="border border-primary mt-3" />
            <h5>Danh sách từ sử dụng chính xác và số lần lặp lại.</h5>
            <div>
                {arrCountCorrect.map((dot) =>
                    dot.word !== "" ? <div className="col-2" style={{ textAlign: "left", margin: "0 5px", padding: "5px", border: "1px solid blue", borderRadius: "6px", display: "inline-block" }} key={Key()}> {dot.word} : {dot.num} </div> : ""
                )}
            </div>
            <p className="border border-primary mt-3" />
            <h5>Danh sách từ sử dụng không chính xác và số lần lặp lại.</h5>
            <div>
                {arrCountunCorrect.map((dot) =>
                    dot.word !== "" ? <div className="col-2" style={{ textAlign: "left", margin: "0 5px", padding: "5px", border: "1px solid blue", borderRadius: "6px", display: "inline-block" }} key={Key()}> {dot.word} : {dot.num} </div> : ""
                )}
            </div>
            <p className="border border-primary mt-3" />
            <h5>Danh sách từ sử dụng và số lần lặp lại.</h5>
            <div>
                {arrCount.map((dot) =>
                    dot.word !== "" ? <div className="col-2" style={{ textAlign: "left", margin: "0 5px", padding: "5px", border: "1px solid blue", borderRadius: "6px", display: "inline-block" }} key={Key()}> {dot.word} : {dot.num} </div> : ""
                )}
            </div>
        </div>;

    return (
        <Container>{listItems}</Container>
    );
}

function countWords(arr) {
    let arrCount = [{ "word": "", "num": 1 }];
    arr.forEach(e => {
        let exit = false;
        arrCount.forEach(ee => {

            if (ee.word === e) {
                exit = true;
                ee.num += 1;
            }
        })
        if (!exit) {
            arrCount.push({ "word": e, "num": 1 })
        }
    })
    return arrCount
}

function arrLapLaiNhieuNhat(arrCount) {
    let arrLapLaiNhieuNhat = [{ "word": "", "num": 1 }];
    arrCount.forEach(e => {
        if (e.num > arrLapLaiNhieuNhat[0].num) {
            arrLapLaiNhieuNhat[0] = e
        }
    })
    return arrLapLaiNhieuNhat
}




//       {/* { checkCookie("username") ? <button className="btn btn-outline-danger mr-3" onClick={() => FnLogout()}>Logout</button> : ""}
//            { getCookie("username") === "dienpham" ? <button className="btn btn-outline-danger" >Admin</button> : ""} */}