export default function showTopLeftPart1(Info_Avatar_Reactdata, ShowInfoHint, Info_Icon_Reactdata, SET_ShowHint, ShowHint) {
    try {
        return <div className="col-6" style={{ textAlign: "left", display: "inline-block" }}>

            <div className="row">

                <div className="col-4" style={{ cursor: "pointer" }}>
                    <img
                        alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="100px" height={"100px"}
                        onMouseOver={() => { SET_ShowHint(!ShowHint) }}
                        onMouseLeave={() => { SET_ShowHint(!ShowHint) }}
                    />
                </div>
                <div className="col-8" style={{ userSelect: "none" }}>
                    {ShowInfoHint(Info_Icon_Reactdata)}
                </div>
            </div>
            <div id="showDivInHint" style={{ display: "inline-block" }}></div>
            <div>
                <input className="form-control" type={"text"} placeHolder="Draft" />
            </div>
        </div >
    } catch (error) {
        console.log(error)
        return null
    }
}
