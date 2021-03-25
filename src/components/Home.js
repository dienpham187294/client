import React from "react";
import { Container } from 'react-bootstrap';
// import { checkCookie } from '../helpers/functionCookies';
// import { Key } from "../helpers/Key";

function Home() {
    return (
        <Container>
            <iframe title="2" width="100%" height="500px" src="https://www.youtube.com/embed/XTaPDVp7fOk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Container>
    );
}

export default Home;

// function GamelistInfo(props) {
//     const listinfo = props.listinfo;
//     const listItems = <div className="row"> {listinfo.map((dot) =>
//         <div key={Key()} className="col-md-4 sm-1 mt-5">
//             <img alt="" width="280px" src={require(`../images/${dot.img}.jpg`)} />
//             <div>
//                 <h5>{dot.name}</h5>
//                 <p> {dot.description}</p>


//                 {checkCookie("username") ? < button className="btn btn-outline-primary" variant="primary">Go to ...</button> : ""}
//             </div>
//         </div >
//     )
//     } </div >;
//     return (
//         <div>{listItems}</div>
//     );
// }
// const listinfo = [

//     { id: "Reading", name: "Practice Reading", description: "Read the thing!", img: "cashflow", link: "game" },
//     { id: "Monopoly", name: "Monopoly", description: "Monopoly, real-estate board game for two to eight players.", img: "monopoly", link: "game" },
//     { id: "Pixi", name: "Practice Grammer", description: "Test your grammer and compare your score with your friends!", img: "quiz", link: "game" },
// ];