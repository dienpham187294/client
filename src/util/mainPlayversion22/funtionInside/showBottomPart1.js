import $ from "jquery"
export default function showBottomPart1(
    props,
    SET_Boqua, SET_StatusShowToPick, SET_DataAction
) {
    try {
        return <div
            style={{
                position: "fixed",
                bottom: "1%",
                left: "250px",
                width: "80%",
                textAlign: "right",
                backgroundColor: "white",

            }}
        >
            <button
                className="btn btn-outline-primary ml-3"
                id="btnNguoitieptheo"
                onClick={() => {
                    SET_Boqua(B => B + 1)
                    SET_StatusShowToPick(true)
                    SET_DataAction(null)
                }}
            >Next</button>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}
