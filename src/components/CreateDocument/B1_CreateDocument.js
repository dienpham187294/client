
import { useEffect, useState } from "react"
import $ from "jquery"
import readXlsxFile from 'read-excel-file'

import AmDon from "../../util/filedulieu/3000tuthongdung/AmDon.json"
import AmDoi from "../../util/filedulieu/3000tuthongdung/AmDoi.json"
import TuVungDon from "../../util/filedulieu/3000tuthongdung//TuVungDon.json"
import TuVungDoi from "../../util/filedulieu/3000tuthongdung/TuVungDoi.json"

import FileGamePickNumber from "../../util/filedulieu/fileCreateDocument/gamePickNumber.json"

import {
    Unifile, Unifile_02, NextStep, Tranfer_01, MultiFiles, TranferMulti, Tranfer_ipa_red, InsertListenData, InsertSpeakData
    , InsertPracticeData, InsertMainPronunciationCreate, InsertGD3, InsertGD4
} from "../../util/filedulieu/fileCreateDocument/A_InputData_Tranfer_01"
let Arruse = null


function C1_Create() {

    const [Name, SetName] = useState("EnterName!")
    const [IndexExcel, SetIndexExcel] = useState("1")

    useEffect(() => {
        try {
            const input = document.getElementById('input')

            input.addEventListener('change', () => {
                let ArrIndex = $("#IndexExcel").text().split(" ").join("").split(",")

                // alert(JSON.stringify(ArrIndex))


                let ArrOUT = []

                ArrIndex.forEach(e => {

                    readXlsxFile(input.files[0], { sheet: e }).then((rows) => {


                        ArrOUT.push(rows)


                        Arruse = ArrOUT

                        $("#ResID").text(JSON.stringify(Arruse))
                    })
                })
                Arruse = []
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
            <button
                onClick={() => {
                    Unifile(($("#ResID").text()))
                }}
            >
                Unifile
            </button>
            <button
                onClick={() => {
                    Unifile_02(($("#ResID").text()), 5)
                }}
            >
                Unifile Chỉ lấy 5
            </button>

            <button
                onClick={() => {
                    NextStep(($("#ResID").text()))
                }}
            >
                NextStepUnifile
            </button>
            <button
                onClick={() => {
                    Tranfer_01(($("#ResID").text()))
                }}
            >
                Tranfer_01
            </button>
            <button
                onClick={() => {
                    MultiFiles(($("#ResID").text()))
                }}
            >
                MultiFiles - Tranferall
            </button>
            <button
                onClick={() => {
                    TranferMulti(($("#ResID").text()))
                }}
            >
                Tranfer-multi
            </button>


            <button
                onClick={() => {
                    Tranfer_ipa_red(Arruse)
                }}
            >
                Tranfer To SOUND OF ENGLISH
            </button>
            <hr />
            {Name}
            <input onChange={(e) => { SetName(e.currentTarget.value.trim()) }} type={"text"} />
            <hr />
            <p id="IndexExcel"> {IndexExcel}</p>
            <input onChange={(e) => { SetIndexExcel(e.currentTarget.value.trim()) }} type={"text"} />
            <hr />
            <button
                onClick={() => {
                    InsertListenData(Name)
                }}
            >
                InsertListenData
            </button>
            <button
                onClick={() => {
                    InsertSpeakData()
                }}
            >
                InsertSpeakData
            </button>
            <button
                onClick={() => {
                    InsertPracticeData(Name)
                }}
            >
                InsertPracticeData
            </button>
            <button
                onClick={() => {
                    InsertMainPronunciationCreate(Name)
                }}
            >
                InsertMainPronunciationCreate
            </button>
            <button
                onClick={() => {
                    InsertGD3(Name)
                }}
            >
                InsertGD3
            </button>
            <button
                onClick={() => {
                    InsertGD4(Name)
                }}
            >
                InsertGD4
            </button>
            <button
                onClick={() => {
                    let output = [];
                    AmDon.forEach(e => {
                        e.forEach((ee, ii) => {

                            let objOutPutPs = {
                                "id": ee,
                                "data": [],
                                "list": []
                            }
                            let i = true
                            TuVungDon.forEach(eee => {
                                if (eee.Ipa.includes(ee)) {
                                    i = false
                                }
                            })
                            if (i) {
                                delete e[ii]
                            }
                        })

                        $("#ResID").text(JSON.stringify(AmDon))
                    })


                }}
            >
                Lấy IPA
            </button>
            <hr />
            <button onClick={() => {
                CreateGameLink()
            }}>
                CreateGameLink
            </button>
            <button onClick={() => {
                SortGameLink()
            }}>
                SortGameLink
            </button>
            <button onClick={() => {
                SortGameLinkToString()
            }}>
                SortGameLinkToString
            </button>
            <button onClick={() => {
                uniqueGameLink()
            }}>
                uniqueGameLink
            </button>
            <button onClick={() => {
                AllSortAbove3()
            }}>
                AllSortAbove3
            </button>
            <button onClick={() => {
                SortX()
            }}>
                SortX
            </button>
            <button onClick={() => {
                SortDive2()
            }}>
                SortDive2
            </button>
            <div id="ResID" style={{ padding: "35px" }}></div>
            <div>
                {showTestGame(FileGamePickNumber, IndexExcel)}
            </div>
        </div >

    )

}

export default C1_Create


function showTestGame(Data, Index) {
    try {
        let ARRC = [21, 22, 23, 24, 25, 26, 27, 28, 29]
        let Arrr = []
        for (let i = 10; i < 40; i++) {
            Arrr.push(i)
        }
        console.log(Arrr)
        return (
            <div>
                {/* {JSON.stringify(Arrr)} */}
                <table className="table table-sm">
                    <tbody>
                        {ARRC.map((e, i) =>
                            <tr key={i}>
                                {Arrr.map((ee, ii) =>
                                    <td
                                        style={{ backgroundColor: Data[Index].includes(e + "" + ee) ? "yellow" : "transparent" }}
                                        key={ii}>{"--"}</td>
                                )}
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




function CreateGameLink() {
    let i = [
        ";2525"
    ]
    // alert(1)
    let oput = []
    i.forEach((e) => {
        oput = oput.concat(LoopCreate(e))
    })
    // $("#ResID").text(JSON.stringify(oput))
    console.log(JSON.stringify(oput))
}
function SortGameLink() {
    let oput = []
    FileGamePickNumber.forEach((e) => {
        if (unique(e).length === 6) {
            oput.push(e)
        }
    })
    // $("#ResID").text(JSON.stringify(oput))
    console.log(JSON.stringify(oput))

}
function SortGameLinkToString() {
    let oput = []
    FileGamePickNumber.forEach((e) => {
        let i = "";
        e.forEach(ee => {
            let j = ee + ";"
            i = i + j
        })
        oput.push(i)
    })
    $("#ResID").text(JSON.stringify(unique(oput)))

}

function uniqueGameLink() {
    // $("#ResID").text(JSON.stringify(unique(FileGamePickNumber)))
    let output = []
    let AI = FileGamePickNumber[0].split(";")
    let lenI = AI.length
    // console.log(lenI)
    FileGamePickNumber.forEach(e => {

        if (unique(e.split(";")).length == lenI) {

            output.push(e)
        }
    })

    console.log(JSON.stringify((output)))
}
function unique(arr) {
    return Array.from(new Set(arr)) //
}
function LoopCreate(input) {

    let ARR = input.split(";")
    let n = parseInt(ARR[ARR.length - 1].slice(0, 2))
    let m = parseInt(ARR[ARR.length - 1].slice(2, 4))
    let output = [
        input + ";" + (n - 1) + "" + (m - 1),
        input + ";" + (n) + "" + (m - 1),
        input + ";" + (n + 1) + "" + (m - 1),
        input + ";" + (n - 1) + "" + (m),
        input + ";" + (n + 1) + "" + (m),
        input + ";" + (n - 1) + "" + (m + 1),
        input + ";" + (n) + "" + (m + 1),
        input + ";" + (n + 1) + "" + (m + 1)
    ]
    // $("#ResID").text(JSON.stringify(output))
    return output
}

function AllSortAbove3() {
    let output = []
    FileGamePickNumber.forEach(e => {
        if (Sortabove3(e)) {
            output.push(e)
        }
    })
    console.log(JSON.stringify(output))
    // $("#ResID").text(JSON.stringify(output))
}

function Sortabove3(String) {
    // hop hay khong
    let i = true;
    let arrAN_01 = String.split(";")
    arrAN_01.forEach(e => {
        let arrAN_02 = GetAround(e)
        let counti = 0;
        arrAN_01.forEach(e1 => {
            arrAN_02.forEach(e2 => {
                if (e1 === e2) {
                    counti++
                }
            })
        })
        if (counti > 2) {
            i = false
        }
    })

    // console.log(i)
    // $("#ResID").text(JSON.stringify(output))
    return i
}

function SortX() {
    let output = []
    let ARRC = [15, 16, 17, 18, 19, 20, 30, 31, 32, 33, 34]
    FileGamePickNumber.forEach(e => {
        let i1 = true
        let Arr = e.split(";")
        let Arr1 = []
        Arr.forEach(ee => {
            Arr1.push(ee.slice(0, 2))
        })
        Arr1.forEach(eee => {
            if (ARRC.includes(parseInt(eee))) {
                i1 = false
            }
        })
        if (i1) {
            output.push(e)
        }
    })

    console.log(JSON.stringify(output))
}

function SortDive2() {
    let output = []

    FileGamePickNumber.forEach((e, i) => {
        if (i % 2 === 0) {
            output.push(e)
        }
    })

    console.log(JSON.stringify(output))
}



function GetAround(String) {
    let n = parseInt(String.slice(0, 2))
    let m = parseInt(String.slice(2, 4))
    return [
        (n - 1) + "" + (m - 1),
        (n) + "" + (m - 1),
        (n + 1) + "" + (m - 1),
        (n - 1) + "" + (m),
        (n + 1) + "" + (m),
        (n - 1) + "" + (m + 1),
        (n) + "" + (m + 1),
        (n + 1) + "" + (m + 1)
    ]
}