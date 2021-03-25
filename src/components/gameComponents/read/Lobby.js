import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import { getCookie } from "../../../helpers/functionCookies"
import { Key } from "../../../helpers/Key";
const e = React.createElement;


function MonopolyLobby({ room, username, setjionRoom, setStart, setMessageCheck, messageCheck }) {
  useEffect(() => {
  }, [room]);

  function showRoom() {
    let arrRoom = [];
    room.forEach(ee => {
      if (ee.status) {
        //Get all members join the room
        let arrMembers = [];
        ee.members.forEach(eee => {
          if (eee.status) {
            let member = e("tr", { key: Key() }, e("td", {}, eee.username));
            arrMembers.push(member);
          }
        });
        //Get all members join the room

        //--------------------------------
        let room = e("div", { key: Key(), className: "col-4" },
          //H1 
          e("h5", { key: Key(), }, ["Host: ", ee.host]),
          //Body
          e("table", { key: Key(), id: "lobby_body", className: "table table-striped" },
            //tbody
            e("tbody", { key: Key(), }, arrMembers)
          ),
          //Button Jion the room
          (ee.host !== username) ? e("button", { className: "btn btn-warning ml-3", onClick: () => setjionRoom(ee.host) }, "Join") :
            //Button Jion the room
            e("button", { className: "btn btn-warning ml-3", onClick: () => setStart(ee.host) }, "Start"),

        );
        arrRoom.push(room);
        //--------------------------------
      }
    });
    let ShowRooms = e("div", { key: Key(), className: "row" }, arrRoom)
    return ShowRooms
  }

  return (
    <Container>
      <p className="border border-primary mt-3" />
      <div className="row mt-3">
        <div className="col-3 mt-3">
          <span>Name: {getCookie("username")}</span>
        </div>
        <div className="col-3 mt-3">
          <span style={{ border: "1px solid blue", borderRadius: "6px", backgroundColor: messageCheck === "create room" ? "yellow" : "white" }} onClick={() => setMessageCheck("create room")}>Create a room!</span>
       
        </div>
      </div>
      <p className="border border-primary mt-3" />

      {showRoom(room)}
      <p className="border border-primary mt-3" />
    </Container >
  );
}

export default MonopolyLobby;