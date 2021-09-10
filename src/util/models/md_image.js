// import Linkapi from "../api/Linkapi"
// import DL from "../filedulieu/Dulieu_tieng_anh_lop7_tap_1"
import PracticeDiv from "./md_image/img_game1"
import PracticeDiv_G2 from "./md_image/img_game2"
export default function MD_Image() {

}


// MD_Image.prototype.getImage = async function (input) {


//     try {
//         // console.log("success click")
//         let res = await fetch(Linkapi + "api/getImage", {
//             method: 'POST',
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify([input])
//         })
//         let data = await res.json();
//         return data.data
//     } catch (error) {
//         console.log(error)
//         return "1"
//     }

// }

// MD_Image.prototype.getImageAll = async function () {

//     let n = 0;
//     for (let j = 0; j < DL.length; j++) {
//         for (let i = 0; i < DL[j].data.length; i++) {
//             let res = await this.getImage(DL[j].data[i].EN)
//             console.log(res, n);
//             // console.log(DL[j].data[i].EN, n, j)

//             n++

//             try {
//                 let arrHold = [];
//                 res.forEach(e => {
//                     arrHold.push(e.url)
//                 });
//                 DL[j].data[i].ArrImg = arrHold
//             } catch (error) {
//                 console.log(error)
//             }


//         }
//     }

//     console.log(JSON.stringify(DL))
//     try {
//         // document.getElementById("show_test_in_mobile").textContent = JSON.stringify(arrRes)
//     } catch (error) {
//         console.log(JSON.stringify(DL))
//     }

// }

MD_Image.prototype.Show_img = function (arr) {
    try {


        return (
            <div>
                {arr.slice(0, 2).map((e, i) =>
                    <img style={{ marginLeft: "5px" }} src={e} alt={e} key={i} width="60px" onError={(e) => console.log(e.currentTarget.style.display = "none")} />
                )}
            </div>
        )

    } catch (error) {
        return null
    }
}

MD_Image.prototype.Show_img_larger = function (arr) {
    try {


        return (
            <div>
                {arr.map((e, i) =>
                    <img style={{ marginLeft: "5px" }} src={e} alt={e} key={i} width="120px" onError={(e) => console.log(e.currentTarget.style.display = "none")} />
                )}
            </div>
        )

    } catch (error) {
        return null
    }
}

MD_Image.prototype.game_withImg = function (arr, SET_Game_Nhinhinhdoanchu) {

    try {
        let arrres = []

        arr.slice(-3).forEach(e => {
            arrres.push(e.data)
        });





        return <PracticeDiv Data={arr} SET_Game_Nhinhinhdoanchu={SET_Game_Nhinhinhdoanchu} />
    } catch (error) {
        return null
    }

}



MD_Image.prototype.game_withlisten = function (arr, SET_Game_Nghevachoncau) {
    return <PracticeDiv_G2 Data={arr} SET_Game_Nghevachoncau={SET_Game_Nghevachoncau} />
}
