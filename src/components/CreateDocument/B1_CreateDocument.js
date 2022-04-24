
import { useEffect, useState } from "react"
import $ from "jquery"
import readXlsxFile from 'read-excel-file'
import sound20 from "../../util/filedulieu/3000tuthongdung/sounds20"
import T0_linkApi from "../../util/toolAll/T0_linkApi"
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
                    arr.forEach(e => {
                        delete e["null"]
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
            <button
                onClick={() => {
                    Tranfer_ipa_red(Arruse)
                }}
            >
                Tranfer To SOUND OF ENGLISH
            </button>
            {Name}
            <input onChange={(e) => { SetName(e.currentTarget.value) }} type={"text"} />
            <button
                onClick={() => {
                    InsertListenData(Name)
                }}
            >
                InsertListenData
            </button>
            <button
                onClick={() => {
                    InsertSpeakData(Name)
                }}
            >
                InsertSpeakData
            </button>
            <hr />
            <div id="ResID" style={{ padding: "35px" }}></div>
        </div>

    )

}

export default C1_Create


function Tranfer_01(input) {

    try {
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
                alert(1)
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
                alert(2)
            })
    } catch (error) {
        alert("Fail")
    }
}

function InsertPracticeData() {

    try {
        let Input = JSON.parse($("#ResID").text())

        let arrObjectInput = Object.keys(Input[0])

        if (arrObjectInput.length < 3) {
            alert("Fail")
            return null
        }
        if (!arrObjectInput.includes("description")) {
            alert("Fail")
            return null
        }
        if (!arrObjectInput.includes("password")) {
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
                alert(2)
            })
    } catch (error) {
        alert("Fail")
    }
}