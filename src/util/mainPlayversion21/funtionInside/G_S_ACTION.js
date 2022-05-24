
import $ from "jquery"

export default
    function showAction(DataAction, SET_DataAction, Data_Commands, showOptionToRead, Score, showHintAlot, Total, DataActionSearch, SET_DataActionSearch) {
    let ArrT2 = JSON.parse(JSON.stringify(DataAction));
    ArrT2.list.forEach((e, i) => {
        e.id = i
    })
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
            <div className="row">
                <input
                    onChange={(e) => {
                        if (e.currentTarget.value === "") {
                            SET_DataActionSearch("")
                            console.log(e.currentTarget.value, "111")


                        }
                        else {
                            SET_DataActionSearch(e.currentTarget.value)
                            console.log(e.currentTarget.value, "111")
                        }
                    }}
                    placeholder="Search!"
                    type={"text"} />
                <hr />
                <div className="row" style={{ textAlign: "left", height: "270px" }}>
                    <div className="col-6 border-right" style={{ height: "200px", overflow: "auto" }}>
                        {RightDiv(DataAction, SET_DataAction, showHintAlot, ArrT2, DataActionSearch)}
                    </div>
                    <div className="col-6" style={{ height: "200px", overflow: "auto" }}>
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
            <div className="row">
                <div className="col-3">
                    {checkAction(DataAction, Total) ? <i>{showOptionToRead(Score, Data_Commands)}</i> : null}
                </div>
                <div className="col-3">
                    {checkAction(DataAction, Total) ? <h5 style={{ color: "red" }}>Done</h5> : null}
                </div>
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

function RightDiv(DataAction, SET_DataAction, showHintAlot, ArrT2, DataSearch) {
    return (
        <div>

            {sortTable(DataSearch, DataAction.list).map((e, i) =>
                <p
                    key={i}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        try {
                            console.log(e.id)
                        } catch (error) {

                        }
                        ArrT2.list.forEach(ee => {
                            if (ee.id === e.id) {
                                ee.stt = false
                                SET_DataAction(ArrT2);

                            }
                        })
                    }}

                >{e.stt ? showHintAlot(e.data, e.title) : null}</p>
            )}
        </div>
    )
}
function sortTable(e, data) {
    try {
        if (e === "") {
            return data
        }
        let arrInput = e.toLocaleLowerCase().split(" ")

        let arrOuput = []

        data.forEach(e1 => {
            let i = true
            arrInput.forEach(e2 => {
                if (!JSON.stringify(e1.data).toLocaleLowerCase().includes(e2)) (
                    i = false
                )
            });

            if (i) (
                arrOuput.push(e1)
            )
        });
        return (arrOuput)
    } catch (error) {
        return data
    }
}
