
import { useEffect, useState } from "react"
import $ from "jquery"
import readXlsxFile from 'read-excel-file'

// import AmDon from "../../util/filedulieu/3000tuthongdung/AmDon.json"
// import AmDoi from "../../util/filedulieu/3000tuthongdung/AmDoi.json"
// import TuVungDon from "../../util/filedulieu/3000tuthongdung//TuVungDon.json"
// import TuVungDoi from "../../util/filedulieu/3000tuthongdung/TuVungDoi.json"

import FileGamePickNumber from "../../util/filedulieu/fileCreateDocument/gamePickNumber.json"

import * as TransferData from "../../util/filedulieu/fileCreateDocument/A_InputData_Tranfer_01"
import * as GameCreate from "../../util/filedulieu/fileCreateDocument/A_GamePick"
import * as ShowJSX from "../../util/filedulieu/fileCreateDocument/B_JSX_SHOW"
import ListFileNameExcelInput from "../../util/filedulieu/fileCreateDocument/A_listNameFileExcel.json"
// import All40lesson from "../../util/filedulieu/fileCreateDocument/D_Round1_40L.json"

let Arruse = null


function C1_Create() {

    const [Name, SetName] = useState("EnterName!")
    const [IndexExcel, SetIndexExcel] = useState("1")

    useEffect(() => {
        try {
            const input = document.getElementById('input')

            input.addEventListener('change', () => {
                // let ArrIndex = $("#IndexExcel").text().split(" ").join("").split(",")
                // let ArrIndex = ["1"]
                let ArrOUT = []
                ListFileNameExcelInput.forEach(e => {
                    readXlsxFile(input.files[0], { sheet: e }).then((rows) => {
                        ArrOUT.push(rows)
                        Arruse = ArrOUT
                        console.log(JSON.stringify(Arruse))
                        $("#ResID").text(JSON.stringify(Arruse))
                    })

                })
                // Arruse = []

            })

        } catch (error) {
            console.log(error)
        }
    }, [])




    return (

        <div className="row" id="CreateDiv" >
            <input type="file" id="input" />
            <button
                onClick={() => {
                    $("#input").val("")
                    $("#ResID").text("")
                }}
            >
                Reset
            </button>
            {/* {showButton(ArrBTN1)} */}
            <hr />
            {Name}
            <input onChange={(e) => { SetName(e.currentTarget.value.trim()) }} type={"text"} />
            <hr />
            <p id="IndexExcel"> {IndexExcel}</p>
            <input onChange={(e) => { SetIndexExcel(e.currentTarget.value.trim()) }} type={"text"} />
            <hr />
            {/* {showButton(ArrBTN2)} */}

            <hr />
            {showButton(GameCreate)}
            <div id="ResID" style={{ padding: "35px" }}></div>
            <div>
                {ShowJSX["showTestGame"](FileGamePickNumber, IndexExcel)}
            </div>
        </div >

    )

}

export default C1_Create


function showButton(ArrBTN) {

    let ArrObj = Object.keys(ArrBTN)

    return (
        ArrObj.map((e, i) =>
            <button key={i} onClick={() => {
                ArrBTN[e]()
            }}  >
                {e}
            </button>
        )
    )
}

