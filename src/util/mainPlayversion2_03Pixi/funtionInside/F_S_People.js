import Check_ImageOrNot from "./FN/Z_F_Check_ImageOrNot";
import PickRandom from "./PickRandom";
import $, { data } from "jquery"
export default function F_S_People(
    Data, setSTATUS, Total
) {
    try {
        return (
            <div
                className="F_S_People"
            >
                <div
                    className="F_S_People_02"
                    onClick={() => setSTATUS(false)}
                > Exit</div>
                <hr />
                {
                    showDivMain(Data, Total)
                }
                <hr />
                <div
                    className="F_S_People_02"
                    onClick={() => {
                        setSTATUS(false)
                    }}
                >Exit</div>
            </div>
        )
    } catch (error) {
        return <div><h1>Kết thúc</h1></div>
    }
}
function showDivMain(
    Data, Total
) {
    return <>
        {Data.map((ee, ii) =>
            <div
                className="F_S_People_01"
                onClick={() => {
                    try {
                        Total.fnObj.ADD_02(ii, Total, Data)
                        Total.fnObj.setSTATUS_E_S_MOVE(false)
                    } catch (error) {
                        console.log(error)
                        alert("waiting...")

                    }

                }}
                key={ii}>
                <img src={ee.total.viewPick.img} width="50px" />
                <i>{ee.total.viewPick.des !== undefined ? ee.total.viewPick.des : ii + 1}</i>
            </div>
        )}
    </>
}

