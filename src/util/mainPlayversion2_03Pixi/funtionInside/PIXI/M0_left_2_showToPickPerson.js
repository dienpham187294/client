
import Check_ImageOrNot from "../FN/Z_F_Check_ImageOrNot";
import PickRandom from "../PickRandom";
import PixiJSDiv from "./A4_pixiJs"
import $ from "jquery"
import ReadMessage from "../../../Read/ReadMessage";

export default function showToPickPerson(
    DataShowToPick, SET_DataShowToPick, StatusShowToPick, SET_StatusShowToPick,
    ArrOfPeopeAppear_ReactData, AddTo_Show_ArrOfPeopeAppear_ReactData,
    Total
) {



    try {
        return (
            <>
                {StatusShowToPick ?
                    <div
                        className="M0_L_inside"
                    >
                        <div>
                            <button
                                className="btnMap btn btn-primary"
                                style={{
                                    display: "none",
                                }}
                                id="btnShow"
                                onClick={() => {
                                    $("#ID_PixijsDiv").show()
                                    $("#btnHide").show()
                                    $("#btnShow").hide()
                                }}
                            >
                                Show map
                            </button>
                            <button
                                className="btnMap btn btn-danger"
                                id="btnHide"
                                onClick={() => {

                                    $("#ID_PixijsDiv").hide()
                                    $("#btnHide").hide()
                                    $("#btnShow").show()
                                }}
                            >
                                Hide map
                            </button>
                        </div>
                        {showRequestList(ArrOfPeopeAppear_ReactData, Total)}

                    </div>
                    :
                    null}
                <div
                    id="ID_PixijsDiv"
                    style={{
                        position: "fixed", top: "70px",
                        left: "500px", backgroundColor: "white",
                        overflow: "auto", textAlign: "center", zIndex: 4,
                        borderRadius: '5px'
                    }}
                >
                    <PixiJSDiv />
                </div>

            </>
        )
    } catch (error) {
        console.log(error)
        return null
    }
}

function showRequestList(DataShowToPick, Total) {
    try {
        return (
            <div>
                {DataShowToPick.map((e, i) =>
                    <div className="M0_L_inside_listdiv" key={i}>
                        <div className="row">
                            <div className="col-6"> {ShowImage(e.total)}</div>
                            <div className="col-6 M0_L_inside_listdiv_div2">
                                <div

                                    onClick={() => {
                                        Total.fnObj.setMark_F_S_People(e.total.viewPick.moveLocation)
                                        console.log(e.total.viewPick.moveLocation)
                                    }}
                                >
                                    <i>Do it!</i>
                                </div>
                                <div
                                    onClick={() => {
                                        Total.fnObj.setData_Guild(e.total.viewPick.guild)
                                    }}
                                > <i>Guide!</i></div>
                            </div>
                        </div>
                        <div style={{ textAlign: "left" }}>
                            <i>Description:</i>
                            <br />
                            <i>Conditions:</i>
                            <br />
                            <i>Reward:</i>
                        </div>
                    </div>

                )}
            </div>
        )
    } catch (error) {
        return null
    }

}


function ShowImage(data) {
    try {

        return <>
            <img src={data.viewPick.img} height="120px" />
        </>
    } catch (error) {
        try {
            if (data.icon !== undefined && data.icon !== "" && data.icon !== null && Check_ImageOrNot(data.icon)) {
                return <img src={data.icon} height="120px" />
            } else {
                return <img src={"https://i.postimg.cc/VNJf7gXX/person.png"} height="120px" />
            }

        } catch (error) {
            return <img src={"https://i.postimg.cc/VNJf7gXX/person.png"} height="120px" />
        }


    }
}

