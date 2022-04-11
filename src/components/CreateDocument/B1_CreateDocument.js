
import { useEffect, useState } from "react"
import $ from "jquery"
import readXlsxFile from 'read-excel-file'
let Arruse = null
function C1_Create() {

    useEffect(() => {
        try {
            const input = document.getElementById('input')

            input.addEventListener('change', () => {
                readXlsxFile(input.files[0]).then((rows) => {
                    let Arr1 = rows[0]
                    let arr = []
                    rows.forEach((e, i) => {

                        if (i > 0) {
                            let obj = {}
                            Arr1.forEach((ee, i) => {
                                obj[ee] = e[i]
                            })

                            arr.push(obj)
                        }

                    })
                    $("#ResID").text(JSON.stringify(arr))
                    Arruse = arr
                })

            })

        } catch (error) {
            console.log(error)
        }
    }, [])

    return (

        <div className="row">
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
                    Tranfer_01(Arruse)
                }}
            >
                Tranfer_01
            </button>
            <hr />
            <div id="ResID" style={{ padding: "35px" }}></div>
        </div>

    )

}

export default C1_Create


function Tranfer_01(input) {
    console.log(typeof (input))
    try {
        let getKeys = Object.keys(input[0])
        console.log(getKeys)
        input.forEach(e => {
            e.submit = []
            e.question = []
            e.answer = []
            getKeys.forEach(ee => {
                if (ee.includes("Z")) {
                    e.submit.push(e[ee])
                    delete e[ee]
                }
                if (ee.includes("A")) {
                    let id = ee.slice(1, 2)
                    e.question.push({ id: id, data: e[ee] })
                    delete e[ee]
                }
                if (ee.includes("B")) {
                    let id = ee.slice(1, 2)
                    e.answer.push({ id: id, data: e[ee] })
                    delete e[ee]
                }
            })
        })
        input.forEach(e => {
            let arrC = []
            e.QA = {}

            e.question.forEach(ee => {

                if (!arrC.includes(ee.id)) {
                    arrC.push(ee.id)
                    e.QA[ee.id] = {}
                    e.QA[ee.id].qs = []
                    e.QA[ee.id].aw = []
                    e.QA[ee.id].qs.push(ee.data)
                } else {
                    e.QA[ee.id].qs.push(ee.data)
                }
            })
            e.answer.forEach(ee => {
                e.QA[ee.id].aw.push(ee.data)
            })
            delete e.question
            delete e.answer

            e.QaRes = []
            let A1 = Object.keys(e.QA)
            A1.forEach(ee => {
                e.QaRes.push(e.QA[ee])
            })
            e.QA = e.QaRes
            delete e.QaRes
        })
        $("#ResID").text(JSON.stringify(
            {
                "info": "",
                "base": [],
                "data": input
            }

        ))
    } catch (error) {
        console.log(error)
    }
}