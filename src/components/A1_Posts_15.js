import All40lesson from "../util/filedulieu/fileCreateDocument/D_Round1_40L.json"

export default function A1Pricing() {



    return (
        <div>
            {Show40Ls(All40lesson)}
        </div>
    )
}
function Show40Ls(All40lesson) {
    return (
        <div>
            {All40lesson.map((e, i) =>
                <div key={i}>
                    <h5>Bài thực hành giai đoạn 3</h5>
                    <i>  {"III.A Practice -" + (Math.floor(i / 2) + 1)}</i>
                    <hr />
                    {showIn40Lesson(e)}

                </div>
            )}
        </div>
    )
}
function showIn40Lesson(data) {
    let obj = (data[0])
    let qs = ""
    let aw = ""
    let Arr1 = []



    obj.forEach((e, i) => {
        if (qs === "" && e.includes("A")) {
            qs = data[1][i]
        }

    })
    obj.forEach((e, i) => {
        if (aw === "" && e.includes("B")) {
            aw = data[1][i]
        }

    })
    data.forEach((ee, ii) => {
        if (ii > 0) {
            let obj1 = {
                "Sts": "",
                "submit": "",
                "IPA": ""
            }
            obj.forEach((e, i) => {

                if (obj1.Sts === "" && e.includes("B")) {
                    obj1.Sts = data[ii][i]
                }
                if (obj1.submit === "" && e.includes("Z")) {
                    obj1.submit = data[ii][i]
                }
                if (obj1.IPA === "" && e.includes("IPA")) {
                    obj1.IPA = data[ii][i]
                }
            })
            Arr1.push(obj1)
        }
    })
    return (
        <div>
            <b>  <i>Luyện nói câu: {qs}</i></b>
            <br />
            <b>  <i>Luyện nghe bài III: {qs}</i></b>
            <hr />
            {tableIn(Arr1)}

        </div>
    )
}
function tableIn(Arr1) {
    return (
        <table className="table table-sm">
            <tbody>
                {Arr1.map((e, i) =>
                    <tr key={i}>
                        <td>
                            {e.Sts}
                        </td>
                        <td>
                            {e.submit}
                        </td>
                        <td>
                            {e.IPA}
                        </td>
                    </tr>
                )}

            </tbody>
        </table>
    )
}