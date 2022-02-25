import { useEffect, useState } from "react";
import Check_ImageOrNot from "./Check_ImageOrNot"
let saveData;
export default
    function ShowBigView(dataRoot, data, Total, SET_Data_phongto, UpdateDataTable, SET_UpdateDataTable) {
    useEffect(() => {
        if (data !== null) {
            SET_UpdateDataTable(data)
        }
    }, [data])

    try {
        if (data === null) {
            return null
        }
        return (
            <div
                style={{
                    height: "350px",
                    backgroundColor: "white",
                    overflow: "auto",
                    zIndex: 3,
                    padding: "1px",
                    textAlign: "left"
                }}>
                {showInside01(data, Total, UpdateDataTable, SET_UpdateDataTable)}
                {showTable_01(dataRoot, SET_Data_phongto)}
            </div>

        )

    } catch (error) {
        console.log(error)
        return null
    }
}



function showTable_01(dataRoot, SET_Data_phongto) {
    try {
        if (dataRoot.length <= 1) {
            return null
        }
        return <div
            style={{ position: "fixed", bottom: "10%", left: "1200px", border: "1px solid black", padding: "15px", backgroundColor: "rgb(48, 65, 86)", color: "white" }}>
            <i>Pick Table</i>
            {dataRoot.map((e, index) =>
                <div key={index}>
                    <div>
                        {dataRoot.map((eee, indexeee) =>
                            <div
                                key={indexeee}
                                style={{
                                    cursor: "pointer",
                                }}>
                                <button
                                    className="btn btn-primary mt-1"
                                    onClick={() => {
                                        SET_Data_phongto(eee)
                                    }}
                                >
                                    {showListTable(eee, indexeee)}
                                </button>
                            </div>
                        )}
                    </div>

                </div >
            )}
        </div>
    } catch (error) {
        return null
    }


}
function showListTable(eee, indexeee) {

    try {
        return (
            <>
                {
                    Check_ImageOrNot(eee[0]) ?
                        <img
                            src={eee[0]} width="40px" height={"30px"} /> :
                        <span
                            style={{ width: "80px" }}
                        >Table {indexeee + 1}</span>
                }
            </>
        )
    } catch (error) {
        return <span
            style={{ width: "80px" }}
        >Table {indexeee + 1}</span>
    }

}

function showInside01(data, Total, UpdateDataTable, SET_UpdateDataTable) {
    try {
        if (typeof (data[0]) === "string") {
            return (
                <>
                    {
                        data.map((eeee, indexeeee) =>
                            <div
                                key={indexeeee}
                                style={{
                                    display: "inline-block",
                                    border: "1px solid black",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    margin: "5px",
                                }}
                            >
                                {Check_ImageOrNot(eeee) ?
                                    <img
                                        onClick={() => {
                                            Total.stObj.inputSumit += "===" + eeee;
                                            Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                                            Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                        }}
                                        src={eeee} width="150px" height={"150px"} style={{ margin: "5px 25px", cursor: "pointer" }} /> :

                                    <div>
                                        <i
                                            onClick={() => {
                                                Total.stObj.inputSumit += "===" + eeee;
                                                Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                                                Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                            }}
                                            style={{ cursor: "pointer" }}
                                        ><>{eeee}</></i>
                                    </div>
                                }
                            </div>
                        )
                    }
                </>
            )
        }
        else {
            return (
                <>
                    {showTable00(UpdateDataTable, SET_UpdateDataTable, data, Total)}
                </>
            )
        }


    } catch (error) {

    }
}

function showTable00(eee, SET_UpdateDataTable, data, Total) {
    try {

        return (
            <>
                <input
                    onChange={(e) => {
                        if (e.currentTarget.value === "") {
                            SET_UpdateDataTable(data)
                        }
                        else {
                            sortTable(e.currentTarget.value, SET_UpdateDataTable, data)
                        }
                    }}
                    placeholder="Enter letters to search!"
                    type={"text"} className="form-control" />
                {showtableWithoutInput(eee, Total)}
            </>
        )
    } catch (error) {
        console.log(error)
        return null
    }
}
function showtableWithoutInput(eee, Total) {
    try {
        let arrOfKeys = Object.keys(eee[0])
        return (
            <table className="table">
                <thead>
                    <tr>
                        {arrOfKeys.map((e, i) => <th key={i}>{e}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {eee.map((e1, i1) =>
                        <tr key={i1}>
                            {arrOfKeys.map((ee2, ii2) =>
                                <td key={ii2}>{
                                    Check_ImageOrNot(e1[ee2])
                                        ? <img
                                            style={{ cursor: "pointer" }}
                                            src={e1[ee2]} width="150px" height={"150px"} style={{ margin: "5px 0px" }} />
                                        : <span
                                        >{e1[ee2]}</span>
                                }</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        )
    } catch (error) {
        return null
    }
}

function sortTable(e, SET_UpdateDataTable, data) {
    try {
        let arrInput = e.toLocaleLowerCase().split(" ")

        let arrOuput = []

        data.forEach(e1 => {
            let i = true
            arrInput.forEach(e2 => {
                if (!JSON.stringify(e1).toLocaleLowerCase().includes(e2)) (
                    i = false
                )
            });

            if (i) (
                arrOuput.push(e1)
            )
        });
        SET_UpdateDataTable(arrOuput)
    } catch (error) {

    }
}
