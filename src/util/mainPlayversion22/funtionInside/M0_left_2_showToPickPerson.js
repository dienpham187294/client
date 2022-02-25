
import Check_ImageOrNot from "./Check_ImageOrNot";
import PickRandom from "./PickRandom";
import PixiJSDiv from "./A4_pixiJs"
import $ from "jquery"
export default function showToPickPerson(
    DataShowToPick, SET_DataShowToPick, StatusShowToPick, SET_StatusShowToPick,
    ArrOfPeopeAppear_ReactData, AddTo_Show_ArrOfPeopeAppear_ReactData,
    Total
) {
    try {

        return (
            <>
                {StatusShowToPick ?
                    <div style={{
                        position: "fixed", top: "70px", width: "400px",
                        left: "250px", bottom: "0px", backgroundColor: "white", overflowY: "auto", textAlign: "center", zIndex: 4,
                        border: "5px solid blue", borderRadius: '5px'
                    }}>
                        <h5>Request list!</h5>
                        {showRequestList(ArrOfPeopeAppear_ReactData)}
                    </div>
                    :
                    null}
                <div
                    id="ID_PixijsDiv"
                    style={{
                        position: "fixed", top: "70px",
                        left: "650px", backgroundColor: "white",
                        overflow: "auto", textAlign: "center", zIndex: 4,
                        border: "5px solid blue", borderRadius: '5px'
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

function showRequestList(DataShowToPick) {
    console.log(DataShowToPick[0])
    try {
        return (
            <div>
                {DataShowToPick.map((e, i) =>
                    <div className="M0_L_inside_listdiv" key={i}>
                        <div className="row">
                            <div className="col-6"> {ShowImage(e.total)}</div>
                            <div className="col-6 M0_L_inside_listdiv_div2">
                                <div> <i>Do it</i></div>
                                <div> <i>How to do!</i></div>
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