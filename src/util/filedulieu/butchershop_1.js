export default
    {
        "total": {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKeNB0S0_a3gAGZNtouvnYhwb1dDrsbP0UaQ&usqp=CAU",
            "status": true,
            "gender": "female",
            "shopname_en": "Butcher shop",
            "shopname_vi": "Cửa hàng thịt tươi",
            "robotspeakfirst": [
                "Hi",
                "Hello"
            ]
        },
        "begin": {
            "handling_next": [
                {
                    "manspeak": [
                        "Hi how are you?"
                    ],
                    "robotspeak": [
                        "I'm good. How are you?",
                        "Not too bad. How are you?"
                    ],
                    "icon": "",
                    "function": {
                        "end_successfull": false,
                        "end_unsuccessfull": false
                    },
                    "handling_next": [
                        {
                            "manspeak": [
                                "I am fine. Thank you."
                            ],
                            "robotspeak": [
                                "I want to buy something."
                            ],
                            "icon": "",
                            "function": {
                                "end_successfull": false,
                                "end_unsuccessfull": false
                            },
                            "handling_next": []
                        }
                    ]
                }
            ]
        },
        "middle": {
            "handling_next": [
                {
                    "manspeak": [
                        "What do you want?"
                    ],
                    "robotspeak": [
                        "I want to buy bananas."
                    ],
                    "icon": "",
                    "function": {
                        "end_successfull": false,
                        "end_unsuccessfull": false
                    },
                    "handling_next": []
                }
            ]
        },
        "end": {
            "handling_next": [
                {
                    "manspeak": [
                        "Here you are!"
                    ],
                    "robotspeak": [
                        "Thank you."
                    ],
                    "icon": "",
                    "function": {
                        "end_successfull": true,
                        "end_unsuccessfull": false
                    },
                    "handling_next": []
                }
            ]
        },
        "nameoftable": "Cửa hàng hoa quả",
        "nameofheader": [
            "Hoa quả"
        ],
        "dataoftable": [
            [
                "Cam",
                "orange",
                "https://i.postimg.cc/HLmGHW13/orange.jpg"
            ],
            [
                "Táo",
                "apple",
                "https://i.postimg.cc/ncLhbkGM/apple.jpg"
            ],
            [
                "Chuối",
                "bananas",
                "https://i.postimg.cc/G2rbMJpL/bananas.jpg"
            ]
        ]
    }