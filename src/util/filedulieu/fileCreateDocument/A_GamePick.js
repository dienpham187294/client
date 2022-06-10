import FileGamePickNumber from "./gamePickNumber.json"
import $ from "jquery"
function showTestGame(Data, Index) {
    try {
        let ARRC = [21, 22, 23, 24, 25, 26, 27, 28, 29]
        let Arrr = []
        for (let i = 10; i < 40; i++) {
            Arrr.push(i)
        }
        // console.log(Arrr)
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
export {
    showTestGame,
    CreateGameLink, SortGameLinkToString, SortGameLink, uniqueGameLink, AllSortAbove3, Sortabove3, SortX, SortDive2
}