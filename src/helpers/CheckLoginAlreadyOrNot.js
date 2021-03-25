import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { checkCookie } from "./functionCookies"
function CheckLoginAlready() {

    useEffect(() => {
        if (!checkCookie("username")) {
            document.getElementById("btnCheck").click()
        }
    })
    return (
        <Link to={"/login"} >
            <button id="btnCheck" style={{ display: "none" }}>Home</button>
        </Link>
    )
}
export default CheckLoginAlready