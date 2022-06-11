
import { useEffect, useState } from "react"
import $ from "jquery"
import readXlsxFile from 'read-excel-file'

// import AmDon from "../../util/filedulieu/3000tuthongdung/AmDon.json"
// import AmDoi from "../../util/filedulieu/3000tuthongdung/AmDoi.json"
// import TuVungDon from "../../util/filedulieu/3000tuthongdung//TuVungDon.json"
// import TuVungDoi from "../../util/filedulieu/3000tuthongdung/TuVungDoi.json"

import FileGamePickNumber from "../../util/filedulieu/fileCreateDocument/gamePickNumber.json"

import {
    Unifile, Unifile_02, NextStep, Tranfer_01, MultiFiles, TranferMulti,
    Tranfer_ipa_red, InsertListenData, InsertSpeakData,
    InsertPracticeData, InsertMainPronunciationCreate, InsertGD3, InsertGD4,
    Inser40Round1GD3, Inser40Round2GD3, Inser40Round3GD3, GD4_01, GD4_02, GD4_03,
    DGhepCauF, GDALL
} from "../../util/filedulieu/fileCreateDocument/A_InputData_Tranfer_01"

import {
    showTestGame,
    CreateGameLink,
    SortGameLinkToString,
    SortGameLink, uniqueGameLink,
    AllSortAbove3, Sortabove3, SortX, SortDive2
}
    from "../../util/filedulieu/fileCreateDocument/A_GamePick"

import ListFileNameExcelInput from "../../util/filedulieu/fileCreateDocument/A_listNameFileExcel.json"
import All40lesson from "../../util/filedulieu/fileCreateDocument/D_Round1_40L.json"

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



    let ArrBTN1 = [
        {
            "name": "Unifile",
            "FN": (() => {
                Unifile((JSON.parse($("#ResID").text())))
            })
        },
        // {
        //     "name": "Unifile2",
        //     "FN": (() => {
        //         Unifile_02((JSON.parse($("#ResID").text())))
        //     })
        // },
        {
            "name": "NextStepUnifile",
            "FN": (() => {
                NextStep(JSON.parse(($("#ResID").text())))
            })
        },
        // {
        //     "name": "Tranfer_01",
        //     "FN": (() => {
        //         Tranfer_01(($("#ResID").text()))
        //     })
        // },
        // {
        //     "name": "MultiFiles- transferAll",
        //     "FN": (() => {
        //         MultiFiles(($("#ResID").text()))
        //     })
        // },
        // {
        //     "name": "Tranfer-multi",
        //     "FN": (() => {
        //         TranferMulti(($("#ResID").text()))
        //     })
        // },
        // {
        //     "name": "Tranfer To SOUND OF ENGLISH",
        //     "FN": (() => {
        //         Tranfer_ipa_red(Arruse)
        //     })
        // },
        {
            "name": "Insert one time all 40Round1GD3",
            "FN": (() => {
                Inser40Round1GD3()
            })
        },
        {
            "name": "Insert one time all 40Round2GD3",
            "FN": (() => {
                Inser40Round2GD3()
            })
        },
        {
            "name": "Insert one time all 40Round3GD3",
            "FN": (() => {
                Inser40Round3GD3()
            })
        },
        {
            "name": "Insert one time all GD4_01",
            "FN": (() => {
                GD4_01()
            })
        },
        {
            "name": "Insert one time all GD4_02",
            "FN": (() => {
                GD4_02()
            })
        },
        {
            "name": "Insert one time all GD4_03",
            "FN": (() => {
                GD4_03()
            })
        },
        {
            "name": "DGhepCauF",
            "FN": (() => {
                DGhepCauF()
            })
        },
        {
            "name": "GDALL",
            "FN": (() => {
                GDALL()
            })
        }


    ]

    let ArrBTN2 = [
        {
            "name": "InsertListenData",
            "FN": (() => {
                InsertListenData(Name)
            })
        },
        {
            "name": "InsertSpeakData",
            "FN": (() => {
                InsertSpeakData()
            })
        },
        {
            "name": "InsertPracticeData",
            "FN": (() => {
                InsertPracticeData()
            })
        },
        {
            "name": "InsertMainPronunciationCreate",
            "FN": (() => {
                InsertMainPronunciationCreate(Name)
            })
        },
        {
            "name": "InsertGD3",
            "FN": (() => {
                InsertGD3(Name)
            })
        },
        {
            "name": "InsertGD4",
            "FN": (() => {
                InsertGD4(Name)
            })
        }
    ]
    let ArrBTN3 = [
        {
            "name": "CreateGameLink",
            "FN": (() => {
                CreateGameLink()
            })
        },
        {
            "name": "SortGameLink",
            "FN": (() => {
                SortGameLink()
            })
        },
        {
            "name": "SortGameLinkToString",
            "FN": (() => {
                SortGameLinkToString()
            })
        },
        {
            "name": "uniqueGameLink",
            "FN": (() => {
                uniqueGameLink()
            })
        },
        {
            "name": "AllSortAbove3",
            "FN": (() => {
                AllSortAbove3()
            })
        },
        {
            "name": "SortX",
            "FN": (() => {
                SortX()
            })
        },
        {
            "name": "SortDive2",
            "FN": (() => {
                SortDive2()
            })
        }

    ]

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
            {showButton(ArrBTN1)}
            <hr />
            {Name}
            <input onChange={(e) => { SetName(e.currentTarget.value.trim()) }} type={"text"} />
            <hr />
            <p id="IndexExcel"> {IndexExcel}</p>
            <input onChange={(e) => { SetIndexExcel(e.currentTarget.value.trim()) }} type={"text"} />
            <hr />
            {showButton(ArrBTN2)}

            <hr />
            {showButton(ArrBTN3)}
            <div id="ResID" style={{ padding: "35px" }}></div>
            <div>
                {/* {showTestGame(FileGamePickNumber, IndexExcel)} */}
                {/* {Show40Ls(All40lesson)} */}
            </div>
        </div >

    )

}

export default C1_Create


function showButton(ArrBTN) {
    return (
        <div>
            {ArrBTN.map((e, i) =>
                <button key={i} onClick={() => {
                    e.FN()
                }}>
                    {e.name}
                </button>
            )}

        </div>
    )
}
