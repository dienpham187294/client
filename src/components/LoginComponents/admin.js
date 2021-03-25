import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import "./Login.css"
import { checkCookie, getCookie } from "../../helpers/functionCookies";
import { Key } from "../../helpers/Key";

function checkAdmin() {
    if (checkCookie("username")) {
        if (getCookie("username") === "dienpham") {
            console.log(getCookie("username"))
        } else { document.getElementById("btnHome").click() }
    } else {
        document.getElementById("btnHome").click()
    }
}

function Admin({ socket}) {
    const [Username, setUsername] = useState([]);
    useEffect(() => {
        checkAdmin();
        // socket = io(endpoint);
        socket.emit("admin", ["get_info"]);
        socket.on("admin", (data) => {
            setUsername(data)
        });
    }, [socket]);

    function updateData() {
        socket.emit("admin", ["update_info", document.getElementById("textarea").value]);
        setUsername(JSON.parse(document.getElementById("textarea").value));
    }
    function FNdelete(name) {
        if (name !== "dienpham") {
            let arrTemp = [];
            Username.forEach((e) => {
                if (e.username !== name) {
                    arrTemp.push(e)
                }
            })
            setUsername(arrTemp);
            socket.emit("admin", ["update_info", JSON.stringify(arrTemp)]);
        }
    }

    return (
        <Container>

            <button  className="btn btn-warning  mr-3">Home</button>


            <button id="btnHome" className="btn btn-warning mr-3">Login</button>

            <p className="border border-primary mt-3" />


            <GamelistInfo Username={Username} FNdelete={FNdelete} />


            <p className="border border-primary mt-3" />
            <textarea id="textarea" className="form-control mt-5" />
            <p className="border border-primary mt-3" />
            <button className="btn btn-primary mt-5" onClick={() => updateData()}>Save</button>
            <p className="border border-primary mt-3" />
            <div className="mt-5"> {JSON.stringify(Username)} </div>
        </Container>
    );
}

export default Admin;
function GamelistInfo(props) {
    const listinfo = props.Username;
    const listItems =
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Username</td>
                    <td>Password</td>
                    <td>Position</td>
                    <td>Delete</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>{listinfo.map((dot) =>
                <tr key={Key()}>
                    <td>{dot.username}</td>
                    <td>{dot.password}</td>
                    <td>{dot.position}</td>
                    <td onClick={() => props.FNdelete(dot.username)} style={{ cursor: "grab" }}>Delete</td>
                    <td style={{ cursor: "grab" }}>Show</td>
                </tr>
            )}
            </tbody>
        </table>;
    return (
        <Container>{listItems}</Container>
    );
}

