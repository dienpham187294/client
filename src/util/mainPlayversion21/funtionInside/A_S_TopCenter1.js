export default function showTopCenter1(
    props,
    showSubmitSyxtax,
    Info_ToSunmit_Reactdata
) {
    try {
        return <div className="col-6">
            <div className="row">

                <div className="col-8">
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