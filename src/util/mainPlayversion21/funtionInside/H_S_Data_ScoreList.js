import { useEffect, useState } from "react"
import FileGamePickNumber from "../../filedulieu/fileCreateDocument/gamePickNumber.json"



export default function H_S_Data_ScoreList(Score) {

    const [DataInput, SetDataInput] = useState(FileGamePickNumber[Date.now() % (FileGamePickNumber.length - 1)])
    const [DataInputC, SetDataInputC] = useState([])

    useEffect(() => {
        if (DataInput !== undefined) {
            let Arr = DataInput.split(";")
            SetDataInputC([Arr[0], Arr[Arr.length - 1]])
        }
    }, [DataInput])

    try {
        return (
            <div>
                {showTestGame(DataInput, DataInputC, SetDataInputC, Score)}
            </div>
        )
    } catch (error) {
        return null
    }

}
function showTestGame(Data, Data2C, SetDataInputC, Score) {
    try {
        let Arrr = [21, 22, 23, 24, 25, 26, 27, 28, 29]
        let Arrr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
        return (
            <div>
                {/* {JSON.stringify(Arrr)} */}
                <i>Link 0 and X! 1 Score ~ 1 Chance to pick!</i>
                <table className="table table-sm table-bordered">
                    <tbody>
                        {Arrr.map((e, i) =>
                            <tr key={i}>
                                {Arrr2.map((ee, ii) =>
                                    <td
                                        onClick={() => {
                                            if (Data2C.length - 2 < Score) {
                                                SetDataInputC(Data2C.concat([e + "" + ee]))
                                            } else {
                                                alert("Need more score!")
                                            }
                                        }}
                                        style={{
                                            backgroundColor: Data.includes(e + "" + ee) && Data2C.includes(e + "" + ee) ? "yellow" : Data2C.includes(e + "" + ee) ? "red" : "transparent",
                                        }}
                                        key={ii}>{Data2C[0] === (e + "" + ee) ? 0 : Data2C[1] === (e + "" + ee) ? "X" : "--"}</td>
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

