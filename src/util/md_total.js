
import $ from "jquery"
import ReactDOMServer from 'react-dom/server'
export default function MDId(socket) {

    this.socket = socket
    this.idObj = {
        "divShowOutline": "divShowOutline",
        "divShowOutline2": "divShowOutline2",
    };
    this.fnObj = {}
    this.voice = 1
    this.rate = 1
    this.stateObj = {
        "store": ["123"]
    }
    this.gameHandle = {
        "XulyOrnot": false,
        "Data_I": [],
        "Data_I_1": []
    }
    this.gameFunction = {}

    this.bag = {
        "money": 20000,
        "items": []
    }
}

MDId.prototype.createID = function (id) {
    this.idObj[id] = id
    return id
}

MDId.prototype.SetVoice = function (n) {
    this.voice = n
}

MDId.prototype.HandlingNext = function (Input) {
    this.gameHandle.Data_I_1 = Input
    let arrTemp = [];
    Input.forEach(e => {
        e.manspeak.forEach(ee => {
            arrTemp.push(ee)
        })
    })
    this.fnObj.SET_Info_StrickAnwers_Reactdata(arrTemp)
}

MDId.prototype.handleGameEvent = function () {
    if (this.gameFunction !== null) { this.gameFunction() }
}


MDId.prototype.showBag = function () {

    function show(input) {
        try {
            return (
                <>
                    {input.map((e, i) =>
                        <div key={i} style={{ border: "1px solid green", borderRadius: "5px", width: "150px", display: "inline-block", cursor: "pointer" }}>
                            <img src={e.img} alt={e.name_en} width="60px" /> |
                            {e.quantity} {e.unit}
                        </div>
                    )}
                </>
            )
        } catch (error) {
            return null
        }

    }
    $("#divShowOutline").show();
    $("#divShowOutline2").html("");
    $("#divShowOutline2").append(ReactDOMServer.renderToString(
        <div>
            {/* <button className="btn btn-sm btn-outline-danger" id="btnOut">Leave!</button> */}
            <div>
                <b>Money: </b>{this.bag.money}
            </div>
            <br />
            {show(this.bag.items)}
        </div>
    ));
    // $("#btnOut").on("click", function () {
    //     $("#divShowOutline").hide()
    // })
}

MDId.prototype.saveBag = function () {
    localStorage.setItem("dataBag", JSON.stringify(this.bag))
}


MDId.prototype.sendSocket = async function (CMD, Socketdata) {
    // dispatch message to other users
    this.socket.emit("Sendata", { "status": CMD, "data": Socketdata })
};

MDId.prototype.receiveSocket = async function (Socketdata) {
    if (Socketdata.status === "CreateRoom") {
        this.fnObj.SET_Data_SanhChinhCreateRoom(Socketdata.data)
    }
    if (Socketdata.status === "chat") {

        $("#chatbox").val("")
        $("#Chatboxshow").append(ReactDOMServer.renderToString(
            <>
                <br />
                <span style={{ color: Socketdata.data.data.id === this.stateObj.SocketId ? "blue" : "black" }}>{Socketdata.data.data.text}</span>
            </>
        ));
        $("#Chatboxshow").scrollTop(1000)
    }
};
