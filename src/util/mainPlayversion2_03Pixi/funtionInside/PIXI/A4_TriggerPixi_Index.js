import $ from "jquery"


export default function TriggerDataPIXI(MoveData, SET_Move) {



    return (
        <div>
            <p id="inputTriggerPIXI"></p>
            <button
                id="btnTriggerPIXI"
                onClick={() => {
                    try {
                        let ArrIN = JSON.parse($("#inputTriggerPIXI").text())
                        let t0 = true
                        MoveData.forEach(e => {
                            let t1 = ArrIN[0] > e.index[0]
                            let t2 = ArrIN[0] < e.index[2]
                            let t3 = ArrIN[1] > e.index[1]
                            let t4 = ArrIN[1] < e.index[3]
                            if (t1 && t2 && t3 && t4) {
                                t0 = false
                                SET_Move(e.data)
                            }
                        });
                        if (t0) {
                            SET_Move(null)
                        }

                    } catch (error) {

                    }

                }}
            >
                V
            </button>
        </div>
    )
}