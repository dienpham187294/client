import { useEffect, useState } from "react"
import FileGamePickNumber from "../../filedulieu/fileCreateDocument/gamePickNumber.json"



export default function H_S_Data_ScoreList(Score) {

    const [DataInput, SetDataInput] = useState(FileGamePickNumber[Date.now() % (FileGamePickNumber.length - 1)])
    const [DataInputC, SetDataInputC] = useState([])
    const [DataInputFinal, SetDataInputFinal] = useState()
    useEffect(() => {
        if (DataInput !== undefined) {
            let Arr = DataInput.split(";")

            SetDataInputC([Arr[0]])
            SetDataInputFinal(Arr[Arr.length - 1])
        }
    }, [DataInput])

    try {
        return (
            <div>
                {showTestGame(DataInput, DataInputC, SetDataInputC, Score, DataInputFinal)}
            </div>
        )
    } catch (error) {
        return null
    }

}
function showTestGame(Data, Data2C, SetDataInputC, Score, DataInputFinal) {
    try {
        let Arrr = [21, 22, 23, 24, 25, 26, 27, 28, 29]
        let Arrr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
        return (
            <div>
                {/* {JSON.stringify(Arrr)} */}
                <i>Truy tìm kho báu - 1 điểm tương đương 1 cơ hội dò 1 ô vuông</i>
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
                                            backgroundColor:
                                                Data.includes(e + "" + ee)
                                                    && Data2C.includes(e + "" + ee) &&
                                                    DataInputFinal === (e + "" + ee) ? "blue" :
                                                    Data.includes(e + "" + ee)
                                                        && Data2C.includes(e + "" + ee) ? "yellow" :
                                                        Data2C.includes(e + "" + ee) ? "red" : "transparent",
                                        }}
                                        key={ii}>{
                                            Data2C[0] === (e + "" + ee) ? "B" :
                                                DataInputFinal === (e + "" + ee) && Data2C.includes(e + "" + ee) ? "E" :
                                                    "--"}</td>
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



// function showTestGame1(Data, Data2C, SetDataInputC, Score, DataInputFinal) {
//     try {
//         let Arrr = [21, 22, 23, 24, 25, 26, 27, 28, 29]
//         let Arrr2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
//         return (
//             <div>
//                 {/* {JSON.stringify(Arrr)} */}
//                 <i>Truy tìm kho báu - 1 điểm tương đương 1 cơ hội dò 1 ô vuông</i>
//                 <table className="table table-sm table-bordered">
//                     <tbody>
//                         {Arrr.map((e, i) =>
//                             <tr key={i}>
//                                 {Arrr2.map((ee, ii) =>
//                                     <td
//                                         onClick={() => {
//                                             // if (Data2C.length - 2 < Score) {
//                                             SetDataInputC(Data2C.concat([e + "" + ee]))
//                                             // } else {
//                                             //     alert("Need more score!")
//                                             // }
//                                         }}
//                                         style={{
//                                             backgroundColor:
//                                                 Data.includes(e + "" + ee)
//                                                     ? "yellow"
//                                                     : "transparent",
//                                         }}
//                                         key={ii}>{
//                                             Data2C[0] === (e + "" + ee) ? "B" :
//                                                 DataInputFinal === (e + "" + ee) ? "E" :
//                                                     "--"}</td>
//                                 )}
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         )


//     } catch (error) {
//         console.log(error)
//         return null
//     }
// }

