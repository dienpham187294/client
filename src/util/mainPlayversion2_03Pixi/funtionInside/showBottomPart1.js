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
            {/* <button
                className="btn btn-outline-danger ml-3"
                style={{
                    float: "left",
                }}
                onClick={() => {
                    props.Total.fnObj.SET_PageChange(0)
                    try {
                        $("#idStopLisening")[0].click()
                    } catch (error) { }
                }}
            >
                
                <i className="bi bi-arrow-left-circle-fill"></i>
                Chọn bài
            </button> */}
            {/* <button
                className="btn btn-sm btn-outline-info ml-3"
                style={{ float: "left" }}
            >
                <a target={"_blank"} href="https://forms.gle/JZWwQNx4XP8fDken9">Đóng góp ý kiến</a>
            </button> */}


            {/* <button
                className="btn btn-sm btn-warning"
                onClick={() => {
                    getOnline(RoomOnline, idMember, Score, SET_DataOnline)
                }}
            >Cập nhật</button> */}


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
