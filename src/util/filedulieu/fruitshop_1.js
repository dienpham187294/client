import $ from "jquery"
import ReactDOMServer from 'react-dom/server'
import ReadMessage from "../ReadMessage"
const kg = [1, 2, 3, 5]
const store = [
    {
        "name_en": "orange",
        "name_vi": "Cam",
        "img": "https://i.postimg.cc/HLmGHW13/orange.jpg",
        "price": "1000",
        "unit": "kg",
    },
    {
        "name_en": "apple",
        "name_vi": "Táo",
        "img": "https://i.postimg.cc/ncLhbkGM/apple.jpg",
        "price": "2000",
        "unit": "kg"
    },
    {
        "name_en": "bananas",
        "name_vi": "Chuối",
        "img": "https://i.postimg.cc/G2rbMJpL/bananas.jpg",
        "price": "3000",
        "unit": "kg"
    }
]

export default function md_data_fruitshop_1(Total) {
    this.data = {
        "total": {
            "image": "https://img.freepik.com/free-vector/fruit-shop-with-fruit-cartoon-style-isolated_1308-50421.jpg?size=626&ext=jpg", "status": true,
            "imageMain": "https://i.postimg.cc/SRWCVcf4/man2.png",
            "gender": "male",
            "shopname_en": "Fruit shop",
            "shopname_vi": "Cửa hàng trái cây",
            "description": "Quán cô Vy",
            "robotspeakfirst": [
                "Hi, may I help you?",
                "Hello, what do you want?"
            ]
        },
        "begin": {
            "handling_next": [
                {
                    "manspeak": [
                        "I want to buy something?"
                    ],
                    "robotspeak": [
                        "What do you what to buy?",
                    ],

                    "function": function () {
                        ShowStore(store)
                    },
                    "handling_next": giaotiep(Total)
                },
                {
                    "manspeak": [
                        "I want to sell something?"
                    ],
                    "robotspeak": [
                        "Please take thing you want to sell?",
                    ],

                    "function": function () {
                        function show(input) {
                            try {
                                return (
                                    <>
                                        {input.map((e, i) =>
                                            <div
                                                id={e.name_en + i}
                                                key={i} style={{ border: "1px solid green", borderRadius: "5px", width: "150px", display: "inline-block", cursor: "pointer" }}>
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
                        $("#divPlayer").html("");
                        $("#divPlayer").append(ReactDOMServer.renderToString(
                            <div>
                                <div>
                                    <b>Money: </b>{Total.bag.money}
                                </div>
                                <br />
                                {show(Total.bag.items)}
                            </div>
                        ));
                        Total.bag.items.forEach((e, i) => {
                            $("#" + e.name_en + i).on("click", function () {
                                $("#divNPC").html("");
                                ReadMessage("You want to sell " + e.name_en + ". How many do you want to sell?", Total.voice, 0.9)
                                $("#divNPC").append(ReactDOMServer.renderToString(
                                    <div>
                                        <img src={e.img} alt="img" width="60px" />
                                        <input id="001" type="number" placeholder="Nhập số lượng muốn bán" />
                                        <input id="002" type="button" value="Xong" />
                                    </div>
                                ))
                                $("#002").on("click", function () {
                                    let sellQuantity = $("#001").val()
                                    if (sellQuantity > 0 && sellQuantity <= e.quantity) {

                                        ReadMessage("You sell " + sellQuantity + "kg .I will take it by " + e.price * 70 / 100 + "coins per kg. Do you agree?", Total.voice, 0.9)
                                        $("#divNPC").html("");
                                        $("#divNPC").append(ReactDOMServer.renderToString(
                                            <div>
                                                Sell: {sellQuantity} Kg.
                                                <br />
                                                {e.price * 70 / 100} coins /kg.
                                                <br />
                                                <b>Total: </b> {e.price * 70 / 100 * sellQuantity}
                                                <br />
                                                <button id="btn001">Yes</button>
                                                <button id="btn002">No</button>
                                            </div>
                                        ))
                                        $("#btn001").on("click", function () {
                                            e.quantity -= sellQuantity
                                            Total.bag.money += e.price * 70 / 100 * sellQuantity
                                            Total.saveBag()
                                            $("#divNPC").html("");
                                            $("#divPlayer").html("");
                                        })
                                        $("#btn002").on("click", function () {
                                            $("#divNPC").html("");
                                            $("#divPlayer").html("");
                                        })

                                    } else {
                                        ReadMessage("You don't have enough to sell.", Total.voice, 0.9)
                                    }
                                })
                            })
                        })


                    },
                    "handling_next": []
                }
            ]
        },
        "store": store
    }

}


function giaotiep(Total) {
    let giaotiep = []
    store.forEach(e => {
        let obj = {
            "manspeak": [
                "I want to buy " + e.name_en
            ],
            "robotspeak": [
                "You want to buy " + e.name_en + ", is that right?"
            ],

            "function": function () {
                ShowStore([e])
            }
            ,
            "handling_next": [
                {
                    "manspeak": [
                        "Yes"
                    ],
                    "robotspeak": [
                        "Please choose how many do you want."
                    ],
                    "function": function () {
                        ShowKG(kg, e, Total)
                    },
                    "handling_next": [
                        {
                            "manspeak": [
                                "How much is it?"
                            ],
                            "robotspeak": ["It is " + e.price + " coins per " + e.unit],

                            "function": null,
                            "handling_next": []
                        },
                        {
                            "manspeak": [
                                "I want to buy another thing."
                            ],
                            "robotspeak": ["It is ok. What do you want?"],

                            "function": function () {
                                Total.HandlingNext(Total.gameHandle.Data_I.begin.handling_next[0].handling_next);
                                ShowStore(store)
                            },
                            "handling_next": []
                        }
                    ]
                },
                {
                    "manspeak": [
                        "No"
                    ],
                    "robotspeak": ["What do you want?"],

                    "function": function () {
                        Total.HandlingNext(Total.gameHandle.Data_I.begin.handling_next[0].handling_next)
                    },
                    "handling_next": []
                }
            ]
        }

        giaotiep.push(obj)
    })

    return giaotiep
}





const ShowKG = function (arr, fruit, Total) {
    function show(arr) {
        try {
            return (
                <div>
                    {arr.map(e =>
                        <div
                            style={{ border: "1px solid black", display: "inline-block", padding: "5px", width: "60px", cursor: "pointer" }}
                            key={e}
                            id={e}
                        >
                            {e} Kg
                        </div>
                    )}
                </div>
            )
        } catch (error) {
            return null
        }

    }
    $("#divNPC").append(ReactDOMServer.renderToString(show(arr)));
    arr.forEach(e => {
        $("#" + e).on("click", function () {
            ReadMessage("You want to buy " + e + " kg " + fruit.name_en + ".Is it?", Total.voice, 1)
            let buy = [
                {
                    "manspeak": ["Yes"],
                    "robotspeak": ["This is your " + fruit.name_en + "."],
                    "function": function () {

                        $("#divShowOutline").show();
                        $("#divShowOutline2").html("");
                        $("#divShowOutline2").append(ReactDOMServer.renderToString(
                            <div>
                                <img src={fruit.img} alt={fruit.name_en} />
                                <br />
                                <button
                                    className="btn btn-outline-primary"
                                    id={e + "1"}
                                >Nhận/Recive</button>
                            </div>
                        ));
                        let objItem = fruit
                        objItem.quantity = e
                        Total.bag.items.push(objItem)
                        Total.bag.money -= fruit.price * e;
                        localStorage.setItem("dataBag", JSON.stringify(Total.bag))
                        $("#" + e + "1").on("click",
                            function () {
                                $("#divShowOutline").hide();
                            }
                        )
                    },
                    "handling_next": [
                    ]
                },
                {
                    "manspeak": ["No"],
                    "robotspeak": [],
                    "function": null,
                    "handling_next": []
                }
            ]
            Total.HandlingNext(buy)
        })
    })
}

const ShowStore = function (arr) {
    $("#divNPC").html("");
    $("#divNPC").append(ReactDOMServer.renderToString(
        <div>
            {arr.map(e =>
                <div style={{ border: "1px solid black", display: "inline-block" }} key={e} id={e.name_en}>
                    {e.name_en}
                    <hr />
                    <img src={e.img} alt={e.name_en} width="60px" />
                </div>
            )}
        </div>
    ));
}