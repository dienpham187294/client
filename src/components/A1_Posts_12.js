import mostUsedEnglish from "../util/filedulieu/3000tuthongdung/mostUsedEnglish.json"
// import mostUsedExample from "../util/filedulieu/3000tuthongdung/mostUsedExample.json"
// import $ from "jquery"
// import { Link } from 'react-router-dom';
// import setSrcVideo from "../util/filedulieu1/dataHelperFunction/setSrcVideo"
// import Postmenu from "./A1_PostsMenu"
export default function A1Pricing() {



    return (
        <div>

            <hr />
            <b>1000 từ vựng được sử dụng thường xuyên nhất!</b>
            <table className="table">
                <tbody>
                    {
                        mostUsedEnglish.map((e, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.Word}</td>
                                <td>{e.Ipa}</td>
                                <td>{e.Mean}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


            {/* <Postmenu/> */}
        </div >

    )
}