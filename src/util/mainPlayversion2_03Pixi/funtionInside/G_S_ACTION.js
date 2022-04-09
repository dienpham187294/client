export default
    function showAction(DataAction, SET_DataAction, Data_Commands, showOptionToRead, Score, showHintAlot, Total) {
    let ArrT2 = JSON.parse(JSON.stringify(DataAction));
    return (
        <div style={{
            position: "fixed", top: "220px", bottom: "0px", width: "800px", padding: "5px",
            left: "500px", backgroundColor: "white", textAlign: "center", zIndex: 4,
            border: "1px solid black", borderRadius: '5px'
        }}>
            <div className="col-12" style={{ textAlign: "left", backgroundColor: "rgb(48, 65, 86)", color: "white", padding: "15px" }}>
                <h5>{DataAction.name}</h5>
            </div>
            <hr />
            <div className="row" style={{ height: "300px", overflow: "auto" }}>
                <div className="row" style={{ textAlign: "left" }}>
                    <div className="col-6 border-right">
                        {DataAction.list.map((e, i) =>
                            <p
                                key={i}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    ArrT2.list[i].stt = false;
                                    SET_DataAction(ArrT2);

                                }}
                            >{e.stt ? showHintAlot(e.data, e.title) : null}</p>
                        )}
                    </div>
                    <div className="col-6">
                        {DataAction.list.map((e, i) =>
                            <p
                                key={i}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    ArrT2.list[i].stt = true;
                                    SET_DataAction(ArrT2)

                                }}
                            >{!e.stt ? showHintAlot(e.data, e.title) : null}</p>
                        )}
                    </div>
                </div>
            </div>
            <hr />
            <div>
                {checkAction(DataAction, Total) ? <i>{showOptionToRead(Score, Data_Commands)}</i> : null}
                {checkAction(DataAction, Total) ? <h5 style={{ color: "red" }}>Done</h5> : null}
            </div>

        </div>
    )
}

function checkAction(DataAction, Total) {
    try {

        let n = true
        DataAction.list.forEach((e, i) => {
            if (e.stt !== e.submit) {
                n = false
            }
        })
        if (n) { Total.stObj.StateOfListen = "strictmode" } else { Total.stObj.StateOfListen = "none" }
        return n

    } catch (error) {
        try {
            let n = true
            DataAction.list.forEach((e, i) => {
                if (e.stt !== DataAction.submit[i]) {
                    n = false
                }
            })
            if (n) { Total.stObj.StateOfListen = "strictmode" } else { Total.stObj.StateOfListen = "none" }
            return n
        } catch (error) {
            return false
        }
    }

}

