
import { useEffect, useState } from "react"
import $ from "jquery"
import readXlsxFile from 'read-excel-file'
import sound20 from "../../util/filedulieu/3000tuthongdung/sounds20"
import T0_linkApi from "../../util/toolAll/T0_linkApi"
import AmDon from "../../util/filedulieu/3000tuthongdung/AmDon.json"
import AmDoi from "../../util/filedulieu/3000tuthongdung/AmDoi.json"
import TuVungDon from "../../util/filedulieu/3000tuthongdung//TuVungDon.json"
import TuVungDoi from "../../util/filedulieu/3000tuthongdung/TuVungDoi.json"
import pickNRandomElementsOfArray from "../../util/filedulieu1/dataHelperFunction/pickNRandomElementsOfArray_GetFrom1"
let Arruse = null
const arrIndentity = [
    {
        "name": "Richard",
        "gender": "male",
        "img": "https://i.postimg.cc/d0pCY5Wv/man1.png"
    },
    {
        "name": "Barbara",
        "gender": "female",
        "img": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
    },
    {
        "name": "Michael",
        "gender": "male",
        "img": "https://i.postimg.cc/SRWCVcf4/man2.png"
    },
    {
        "name": "Betty",
        "gender": "female",
        "img": "https://i.postimg.cc/wMKDhwJF/women2.png"
    },
    {
        "name": "Steven",
        "gender": "male",
        "img": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
    },
    {
        "name": "Kimberly",
        "gender": "female",
        "img": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
    },
    {
        "name": "Robert",
        "gender": "male",
        "img": "https://i.postimg.cc/J7JN1WVF/man4.png"
    },
    {
        "name": "Lisa",
        "gender": "female",
        "img": "https://i.postimg.cc/02spjH9y/women4.jpg"
    },
    {
        "name": "William",
        "gender": "male",
        "img": "https://i.postimg.cc/mgdMdLCP/man5.png"
    },
    {
        "name": "Dorothy",
        "gender": "female",
        "img": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
    },
    {
        "name": "David",
        "gender": "male",
        "img": "https://i.postimg.cc/d0pCY5Wv/man1.png"
    },
    {
        "name": "Susan",
        "gender": "female",
        "img": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
    },
    {
        "name": "Anthony",
        "gender": "male",
        "img": "https://i.postimg.cc/SRWCVcf4/man2.png"
    },
    {
        "name": "Donna",
        "gender": "female",
        "img": "https://i.postimg.cc/wMKDhwJF/women2.png"
    },
    {
        "name": "Charles",
        "gender": "male",
        "img": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
    },
    {
        "name": "Mary",
        "gender": "female",
        "img": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
    },
    {
        "name": "Christopher",
        "gender": "male",
        "img": "https://i.postimg.cc/J7JN1WVF/man4.png"
    },
    {
        "name": "Michelle",
        "gender": "female",
        "img": "https://i.postimg.cc/02spjH9y/women4.jpg"
    },
    {
        "name": "Kenneth",
        "gender": "male",
        "img": "https://i.postimg.cc/mgdMdLCP/man5.png"
    },
    {
        "name": "Ashley",
        "gender": "female",
        "img": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
    },
    {
        "name": "Mark",
        "gender": "male",
        "img": "https://i.postimg.cc/d0pCY5Wv/man1.png"
    },
    {
        "name": "Linda",
        "gender": "female",
        "img": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
    },
    {
        "name": "Thomas",
        "gender": "male",
        "img": "https://i.postimg.cc/SRWCVcf4/man2.png"
    },
    {
        "name": "Patricia",
        "gender": "female",
        "img": "https://i.postimg.cc/wMKDhwJF/women2.png"
    },
    {
        "name": "Matthew",
        "gender": "male",
        "img": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
    },
    {
        "name": "Margaret",
        "gender": "female",
        "img": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
    },
    {
        "name": "Daniel",
        "gender": "male",
        "img": "https://i.postimg.cc/J7JN1WVF/man4.png"
    },
    {
        "name": "Karen",
        "gender": "female",
        "img": "https://i.postimg.cc/02spjH9y/women4.jpg"
    },
    {
        "name": "Donald",
        "gender": "male",
        "img": "https://i.postimg.cc/mgdMdLCP/man5.png"
    },
    {
        "name": "Sarah",
        "gender": "female",
        "img": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
    }
]

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
            <div id="ResID" style={{ padding: "35px" }}></div>
        </div >

    )

}

export default C1_Create






function Tranfer_01(inX) {

    try {

        let input = JSON.parse(inX)
        let getKeys = Object.keys(input[0])

        input.forEach((e, ei) => {
            delete e["null"]
            e.name = arrIndentity[ei % (30)]["name"]
            e.gender = arrIndentity[ei % (30)]["gender"]
            e.img = arrIndentity[ei % (30)]["img"]
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


function TranferMulti(inX) {

    try {
        let inputAll = JSON.parse(inX)
        // Tranfer_01(JSON.stringify(inputAll[0]))

        let inputFinal = []
        inputAll.forEach(input => {
            let getKeys = Object.keys(input[0])
            input.forEach((e, ei) => {
                delete e["null"]
                e.name = arrIndentity[ei % (30)]["name"]
                e.gender = arrIndentity[ei % (30)]["gender"]
                e.img = arrIndentity[ei % (30)]["img"]
                e.submit = []
                e.question = []
                e.answer = []
                e.des = []
                getKeys.forEach(ee => {
                    if (ee.includes("Z")) {
                        e.submit.push(e[ee])
                        delete e[ee]
                    }
                    if (ee.includes("M")) {
                        e.des.push(e[ee])
                        delete e[ee]
                    }
                    if (ee.includes("A")) {
                        let id = ee.slice(1, 3)

                        e.question.push({ id: id, data: e[ee] })
                        delete e[ee]
                    }

                    if (ee.includes("B")) {
                        let id = ee.slice(1, 3)
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
            inputFinal = inputFinal.concat(input)
        })

        $("#ResID").text(JSON.stringify(
            {
                "info": "",
                "base": [],
                "data": inputFinal
            }
        ))
    } catch (error) {
        console.log(error)
    }
}



function Unifile(inX) {
    try {
        let input = JSON.parse(inX)
        //  let getKeys = Object.keys(input[0])
        // console.log(input)
        let output = []
        let i = input.length
        let n = input[0].length

        // console.log(input[i][n])
        for (let m = 0; m < n; m++) {
            let out = []
            for (let j = 0; j < i; j++) {
                out = out.concat(input[j][m])
            }
            output.push(out)
        }



        $("#ResID").text(JSON.stringify(output))
    } catch (error) {
        alert("Lỗi")
        console.log(error)
    }
}

function Unifile_02(inX, lenIdx) {
    try {
        let input = JSON.parse(inX)
        //  let getKeys = Object.keys(input[0])
        // console.log(input)
        let output = []
        let i = input.length
        let n = input[0].length

        // console.log(input[i][n])
        for (let m = 0; m < n; m++) {
            let out = []
            for (let j = 0; j < i; j++) {
                out = out.concat(input[j][m])
            }
            output.push(out)
        }
        let ArrT = pickNRandomElementsOfArray(output, lenIdx + 1)

        return [output[0]].concat(ArrT)




        // $("#ResID").text(JSON.stringify([output[0]].concat(pickNRandomElementsOfArray(output, lenIdx))))
    } catch (error) {
        alert("Lỗi")
        console.log(error)
    }
}

function NextStep(inX) {

    try {
        let rows = JSON.parse(inX)
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
        arr.forEach(e => {
            delete e["null"]
        })
        $("#ResID").text(JSON.stringify(arr))

        return arr
    } catch (error) {
        alert("Lỗi")
        console.log(error)
    }
}


function MultiFiles(inX) {
    try {
        let input = JSON.parse(inX)
        let Ouput = []
        let indexGetJust30InX = 0
        for (let i = 0; i < input.length; i++) {
            for (let j = i; j < input.length; j++) {
                if (i !== j) {
                    indexGetJust30InX++
                }
            }
        }
        let indexGetJust30OutX = (30 + 30 % indexGetJust30InX) / indexGetJust30InX

        console.log(indexGetJust30OutX)
        for (let i = 0; i < input.length; i++) {
            for (let j = i; j < input.length; j++) {
                if (i !== j) {
                    let temInput = []
                    temInput.push(input[i])
                    temInput.push(input[j])
                    Ouput.push(
                        NextStep(
                            JSON.stringify(
                                ((Unifile_02(JSON.stringify(temInput), indexGetJust30OutX)))
                            )
                        )
                    )
                }
            }
        }



        $("#ResID").text(JSON.stringify(Ouput))
    } catch (error) {
        alert("Lỗi")
        console.log(error)
    }
}


function Tranfer_ipa_red(input) {
    try {
        let ArrOuput = []
        input.forEach(e => {
            let i = e.ipa
            sound20.forEach(ee => {
                i = i.split(ee).join(`<111 class="122">` + ee + `</111>`)
            })
            i = i.split("111").join(`span`)
            i = i.split("122").join(`soundOfEnglish`)

            // let j = `<i class="soundOfEnglish1">` + e.lyrics + `</i><br/>`
            let str = `<div class="divSoundOfEnglish">` +
                // j +
                i
                + `</div>`

            ArrOuput.push(str)

        })
        ArrOuput.forEach((e, i) => {
            let divT = `<div id="divR"` + i + `">` + e + `</div>`
            $("#ResID").append(divT)

        })



    } catch (error) {
        console.log(error)
    }
}

function InsertListenData(Name) {

    try {
        let Input = JSON.parse($("#ResID").text())

        let arrObjectInput = Object.keys(Input[0])

        if (arrObjectInput.length !== 2) {
            alert("Fail")
            return null
        }
        if (!arrObjectInput.includes("Read")) {
            alert("Fail")
            return null
        }
        if (!arrObjectInput.includes("Answer")) {
            alert("Fail")
            return null
        }

        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: Name, body: $("#ResID").text() })
        };
        fetch(T0_linkApi + "InsertListenData", requestOptions)
            .then((res) => res.json())
            .then((json) => {
                alert("InsertListenData")
            })
    } catch (error) {
        alert("Fail")
    }

}
function InsertSpeakData() {

    try {
        let Input = JSON.parse($("#ResID").text())

        let arrObjectInput = Object.keys(Input[0])

        if (arrObjectInput.length !== 2) {
            alert("Fail")
            return null
        }
        if (!arrObjectInput.includes("Words")) {
            alert("Fail")
            return null
        }
        if (!arrObjectInput.includes("IPA")) {
            alert("Fail")
            return null
        }
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: $("#ResID").text() })
        };
        fetch(T0_linkApi + "InsertSpeakData", requestOptions)
            .then((res) => res.json())
            .then((json) => {
                alert("InsertSpeakData")
            })
    } catch (error) {
        alert("Fail")
    }
}

function InsertPracticeData(Name) {

    try {
        let Input = JSON.parse($("#ResID").text())

        let arrObjectInput = Object.keys(Input.data[0])

        if (arrObjectInput.length < 3) {
            alert("Fail len")
            return null
        }
        if (!arrObjectInput.includes("description")) {
            alert("Fail description")
            return null
        }
        if (!arrObjectInput.includes("password")) {
            alert("Fail password")
            return null
        }
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: Name, body: $("#ResID").text() })
        };
        fetch(T0_linkApi + "InsertPracticeData", requestOptions)
            .then((res) => res.json())
            .then((json) => {
                alert("InsertPracticeData")
            })
    } catch (error) {
        alert("Fail all")
    }
}



function InsertGD3(Name) {

    try {
        let Input = JSON.parse($("#ResID").text())

        let arrObjectInput = Object.keys(Input.data[0])

        if (arrObjectInput.length < 3) {
            alert("Fail len")
            return null
        }
        // if (!arrObjectInput.includes("description")) {
        //     alert("Fail description")
        //     return null
        // }
        // if (!arrObjectInput.includes("password")) {
        //     alert("Fail password")
        //     return null
        // }
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: Name, body: $("#ResID").text() })
        };
        fetch(T0_linkApi + "InsertGD3", requestOptions)
            .then((res) => res.json())
            .then((json) => {
                alert("InsertGD3")
            })
    } catch (error) {
        alert("Fail all")
    }
}

function InsertGD4(Name) {

    try {
        let Input = JSON.parse($("#ResID").text())

        let arrObjectInput = Object.keys(Input.data[0])

        if (arrObjectInput.length < 3) {
            alert("Fail len")
            return null
        }
        // if (!arrObjectInput.includes("description")) {
        //     alert("Fail description")
        //     return null
        // }
        // if (!arrObjectInput.includes("password")) {
        //     alert("Fail password")
        //     return null
        // }
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: Name, body: $("#ResID").text() })
        };
        fetch(T0_linkApi + "InsertGD4", requestOptions)
            .then((res) => res.json())
            .then((json) => {
                alert("InsertGD4")
                $("#ResID").text("")
            })
    } catch (error) {
        alert("Fail all")
    }
}


function InsertMainPronunciationCreate(Name) {
    try {
        let Input = JSON.parse($("#ResID").text())

        let arrObjectInput = Object.keys(Input.data[0])

        if (arrObjectInput.length < 3) {
            alert("Fail len")
            return null
        }
        if (!arrObjectInput.includes("word")) {
            alert("Fail word")
            return null
        }
        if (!arrObjectInput.includes("ipa")) {
            alert("Fail ipa")
            return null
        }
        // if (!arrObjectInput.includes("password")) {
        //     alert("Fail password" )
        //     return null
        // }
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: Name, body: $("#ResID").text() })
        };
        fetch(T0_linkApi + "InsertMainPronunciationCreate", requestOptions)
            .then((res) => res.json())
            .then((json) => {
                alert("InsertMainPronunciationCreate")
            })
    } catch (error) {
        alert("Fail all")
        console.log(error)
    }
}

function CreateGameLink() {

    let Arr = []
    $("#ResID").text(JSON.stringify(Arr))
    console.log(Arr)
}