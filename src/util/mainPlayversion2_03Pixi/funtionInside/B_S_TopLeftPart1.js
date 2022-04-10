export default function showTopLeftPart1(Info_Avatar_Reactdata, ShowInfoHint, Info_Icon_Reactdata, SET_ShowHint, ShowHint, SET_Avatar_Reactdata, SET_DataAction) {
    try {
        return <div className="col-6" style={{ textAlign: "left", display: "inline-block" }}>
            <div style={{ display: "inline-block", cursor: "pointer" }}>
                <img
                    alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="100px" height={"100px"}
                    onMouseOver={() => { SET_ShowHint(!ShowHint) }}
                    onMouseLeave={() => { SET_ShowHint(!ShowHint) }}
                />
            </div>
            <div style={{ display: "inline-block" }}>
                {ShowInfoHint(Info_Icon_Reactdata)}
            </div>
            <div id="showDivInHint" style={{ display: "inline-block" }}></div>

            <button
                style={{ float: "right" }}
                onClick={() => {
                    SET_Avatar_Reactdata(null)
                    SET_DataAction(null)
                }}
                className="btn btn-danger ml-5">Pass</button>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}
