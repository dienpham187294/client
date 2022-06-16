import FileGamePickNumber from "./gamePickNumber.json"
import $ from "jquery"




function CreateGameLink(Data) {
    // let i = [
    //     ";2525"
    // ]
    // // alert(1)
    let oput = []
    Data.forEach((e) => {
        oput = oput.concat(LoopCreate(e))
    })
    // $("#ResID").text(JSON.stringify(oput))
    // console.log(JSON.stringify(oput))
    return oput
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
function uniqueSTR(STR) {
    let arr = STR.split(";")
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
function Sortabove3_3time(String) {
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
        if (counti > 4) {
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
    let n = Math.floor(FileGamePickNumber.length / 10000)

    FileGamePickNumber.forEach((e, i) => {
        if (i % n === 0) {
            output.push(e)
        }
    })

    console.log(JSON.stringify(output))
}

function SortX3() {
    let output = []
    let j = 0
    let nMid = Math.floor(FileGamePickNumber.length / 3)
    for (let i = 0; i < nMid; i++) {
        let ou = []
        if (j === 2) {
            j = 0
            ou = (FileGamePickNumber[nMid + i] + ";" + FileGamePickNumber[nMid * 2 + i] + ";" + FileGamePickNumber[i])
        }
        if (j === 1) {
            j++
            ou = (FileGamePickNumber[i] + ";" + FileGamePickNumber[nMid * 2 + i] + ";" + FileGamePickNumber[nMid + i])
        }
        if (j === 0) {
            j++
            ou = (FileGamePickNumber[i] + ";" + FileGamePickNumber[nMid + i] + ";" + FileGamePickNumber[nMid * 2 + i])
        }
        output.push(ou)
    }
    // FileGamePickNumber.forEach((e, i) => {
    //     if (i % 2 === 0) {
    //         output.push(e)
    //     }
    // })
    let output1 = []
    output.forEach(e => {
        let Arr = e.split(";")
        let n = parseInt(Arr[Arr.length - 1].slice(0, 2))
        let m = parseInt(Arr[Arr.length - 1].slice(2, 4))
        let i = true
        if (n >= 23 && n <= 33) {
            i = false
        }
        if (m >= 23 && m <= 33) {
            i = false
        }
        // if (!Sortabove3_3time(e)) {
        //     i = false
        // }
        if (i) {
            output1.push(e)
        }

    })
    console.log(JSON.stringify(output1))
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

function SortXY(x, y) {
    return (x < 35 && x > 15 && y < 35 && y > 15)
}


function LayHuong1(Stg) {
    let sts = true
    let Arr = Stg.split(";")
    let n = parseInt(Arr[Arr.length - 1].slice(0, 2))
    let m = parseInt(Arr[Arr.length - 1].slice(2, 4))
    sts = SortXY(n, m)
    if (n >= 25) {
        sts = false
    }
    if (m >= 25) {
        sts = false
    }

    return sts
}

function SortArrXYOver(str) {
    let Arr = str.split(";")
    let ArrX = [];
    let ArrY = [];
    Arr.forEach((e) => {
        ArrX.push(parseInt(e.slice(0, 2)))
        ArrY.push(parseInt(e.slice(2, 4)))
    })
    let st1 = true
    let st2 = true
    ArrX.forEach(e => {
        if (e < 22 || e > 28) {
            st1 = false
        }
    })
    ArrY.forEach(e => {
        if (e < 15 || e > 35) {
            st2 = false
        }
    })
    return st1 && st2
}

function getAferSort(Arr) {
    let output = []
    let output1 = []
    let i = true
    Arr.forEach(e => {
        if (Sortabove3(e) && SortArrXYOver(e)) {
            output.push(e)
        }
    })
    if (output.length > 2000) {
        i = false
        let n = Math.floor(output.length / 1000)
        output.forEach((ee, ii) => {
            if (ii % n === 0) {
                output1.push(ee)
            }
        })

    }
    if (i) {
        return output
    }
    return output1
}


function Get1000() {
    let output = ["2525"]
    for (let i = 0; i < 13; i++) {
        output = CreateGameLink(output)
        output = getAferSort(output)
    }
    console.log(JSON.stringify(output))
}

function Get2000X2() {
    let output = []
    let m = FileGamePickNumber.length
    let n = 0
    for (let i = 0; i < m; i++) {

        if (n < 100) {
            let str = FileGamePickNumber[i] + ";" + FileGamePickNumber[m - i]



            let iT = true
            let Arr = uniqueSTR(str)
            console.log(str)
            if (Arr.length < 20) {
                iT = false
            }
            if (iT) {
                n++
                output.push(str)
            }

        }

    }
    console.log(JSON.stringify(output))
}

export {
    SortDive2, Get1000, Get2000X2
}