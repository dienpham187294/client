function showTestGame(Data, Index) {
    try {
        let ARRC = [21, 22, 23, 24, 25, 26, 27, 28, 29]
        let Arrr = []
        for (let i = 10; i < 41; i++) {
            Arrr.push(i)
        }
        // console.log(Arrr)
        let nM = Data[Index].split(";")
        let nnM = nM[nM.length - 1]

        return (
            <div>
                {/* {JSON.stringify(Arrr)} */}
                <table>
                    <tbody>
                        {Arrr.map((e, i) =>
                            <tr key={i}>
                                {Arrr.map((ee, ii) =>
                                    <td
                                        style={{
                                            backgroundColor:
                                                nnM == e + "" + ee ? "blue" :
                                                    Data[Index].includes(e + "" + ee)
                                                        ? "yellow" : "transparent"
                                        }}
                                        key={ii}>{
                                            e + "" + ee
                                        }


                                    </td>
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

export { showTestGame }