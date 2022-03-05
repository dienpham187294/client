
import { useEffect, useState } from "react"
import $ from "jquery"
import readXlsxFile from 'read-excel-file'

function C1_Create() {

    useEffect(() => {
        try {
            const input = document.getElementById('input')

            input.addEventListener('change', () => {
                readXlsxFile(input.files[0]).then((rows) => {
                    let Arr1 = rows[0]
                    console.log(Arr1)
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
                    console.log(JSON.stringify(arr))
                })
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (

        <div className="row">
            <input type="file" id="input" />
            <hr />
            <div id="ResID"></div>
            
        </div>

    )

}

export default C1_Create
