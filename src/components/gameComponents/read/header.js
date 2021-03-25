import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
const e = React.createElement;




function Mheader({ gamePlayData, socket }) {

    useEffect(() => {

    }, [gamePlayData]);
    function showHeader() {
        let arrPlayers = [];
        if (gamePlayData.length > 0) {
            gamePlayData[0].members.forEach(eee => {
                if (eee.status) {
                    arrPlayers.push(e("div", { key: eee.id, style: { width: "20%", display: "inline-block", borderRadius: "6px" } }, [eee.username, " | ", eee.point]))
                }
            });;
        }
        let showHeader = e("div", {}, arrPlayers)
        return showHeader
    }
    return (
        <Container>
            {showHeader()}
        </Container>
    );
}

export default Mheader;