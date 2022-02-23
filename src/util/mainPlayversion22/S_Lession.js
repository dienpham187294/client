import $ from "jquery"
// import { pick } from "query-string";
import { useState } from "react"
import BshowStructure from "./funtionInside/BshowStructure"
let pickToRead = "";
let listenScore = 0
export default function Lesson(props) {
    const [Docthu, SET_Docthu] = useState("")

    try {

        return (
            <div >
                {BshowStructure(props.Data_Game)}
            </div>
        )
    } catch (error) {

        try {
            return JSON.stringify(props.Data_Game)
        } catch (error) {
            return null
        }
    }
}


