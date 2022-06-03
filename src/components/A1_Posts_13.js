// import mostUsedEnglish from "../util/filedulieu/3000tuthongdung/mostUsedEnglish.json"
import mostUsedExample from "../util/filedulieu/3000tuthongdung/mostUsedExample.json"
// import $ from "jquery"
// import { Link } from 'react-router-dom';
// import setSrcVideo from "../util/filedulieu1/dataHelperFunction/setSrcVideo"
// import Postmenu from "./A1_PostsMenu"
export default function A1Pricing() {



    return (
        <div>
            <hr />
            <b>1000 câu cơ bản!</b>
            <table className="table">
                <tbody>
                    {
                        mostUsedExample.map((e, i) =>
                            <tr key={i}>
                                <td>{e.Example}</td>
                                <td>{e.IpaEx}</td>
                                <td>{e.MeanEx}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


            {/* <Postmenu /> */}
        </div >

    )
}