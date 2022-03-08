export default function showTopCenter1(
    props,
    showSubmitSyxtax,
    Info_ToSunmit_Reactdata,
    NameOflession, Score, Sai, Boqua, D4_Time
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
                    <br />
                    <span id="percentID"></span>
                </div>
                <div className="col-4">
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