export default function showTopCenter1(
    props,
    showSubmitSyxtax,
    Info_ToSunmit_Reactdata,
    NameOflession, Score, Sai, Boqua, D4_Time,
    eS_CountPercentRight, eS_CountPercentWrong
) {
    try {
        return <div className="col-6">
            <div className="row">

                <div className="col-8">
                    <div>
                        <i style={{ fontSize: "small" }}>{NameOflession}</i>
                        <br />
                        <b> Điểm: {Score}
                            <span style={{ color: "red" }}> Chọn sai: {Sai} </span>
                            | <span style={{ color: "red" }}>{Boqua}</span> </b>
                        <span>
                            {D4_Time}
                        </span>

                    </div>

                    {props.ShowInterim ?
                        <span id="showInterimID" style={{ height: "50px", color: "violet" }}></span>
                        : <span id="showInterimID" style={{ color: "violet", backgroundColor: "violet" }}></span>}

                    <div id="ArrRead">
                  
                    </div>
                </div>
                <div className="col-4">
                    <span id="percentID_SAI">{eS_CountPercentWrong}</span>
                    <span id="percentID_DUNG">{eS_CountPercentRight}</span>
                    <hr />
                    {showSubmitSyxtax(Info_ToSunmit_Reactdata)}
                    <span id="complete" style={{ color: "red" }}></span>

                </div>
            </div>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}