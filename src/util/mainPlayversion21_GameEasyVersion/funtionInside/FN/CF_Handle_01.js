import $ from "jquery"
import Check_ImageOrNot from "./Z_F_Check_ImageOrNot"
export default function Handle_01(Total) {
    let data = Total.stObj.AllData_OfOne
    let e = Total.stObj.inputSumit

    try {

        let status = false
        let n = e.split("===").slice(-1)[0]
        data.total.submit.forEach(e => {
            if (e.includes(n)) {
                status = true
            }
        })
        if (!status) {
            Total.fnObj.SET_Sai(S => S + 1)
        }
    } catch (error) {
    }

    if (JSON.stringify(data.total.submit) !== "[[]]") {
        try {
            data.total.submit.forEach((eee, i) => {
                let status_check_submit = true
                eee.forEach((ee, ii) => {
                    let text = ee;
                    if (typeof (ee) === "string") {
                        text = ee.toLowerCase()
                    }
                    if (e.toLowerCase().indexOf(text) === -1) {
                        status_check_submit = false
                    } else {
                        Check_ImageOrNot(ee) ?
                            $("#ct1" + i + ii).html(
                                `<img src="` + ee + `" height="50px" />`
                            )
                            : $("#ct1" + i + ii).html(ee);
                    }
                })

                if (status_check_submit) {
                    if (data.end !== null && data.end.handling_next !== null) {
                        Total.stObj.Data_temp_Strickmode = (data.end.handling_next);
                        let arrTemp = []
                        data.end.handling_next.forEach(e => {
                            Total.fnObj.Handle_OBJFN_01(e.function, Total)
                            e.manspeak.forEach(ee => {
                                arrTemp.push(ee)
                            })
                        })
                        Total.fnObj.SET_Info_StrickAnwers_Reactdata(arrTemp);
                        $("#complete").html("<b>Done!</b>")
                    } else {
                        Total.fnObj.Handle_OBJFN({ end_successfull: true }, Total)
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

}