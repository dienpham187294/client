import React, { useState, useEffect } from "react";
// import CheckLoginAlready from"../../helpers/CheckLoginAlreadyOrNot"
import RandomInt from "../../helpers/randomInt"

function Vocabulary({ socket }) {
    const [Question, SetQuestion] = useState("")
    const [Answer, SetAnswer] = useState("")
    const [ArrChoose, SetArrChoose] = useState([])
    useEffect(() => {
        if (ArrChoose.length > 0) {

            SetQuestion(ArrChoose[RandomInt(0, ArrChoose.length - 1)].name)
        }
    }, [ArrChoose])

    useEffect(() => {
        if (Answer === Question) {
            document.getElementById("audioBTN").play()
            ArrChoose.forEach(e => {
                if (e.name === Answer) { e.status = false };
                SetAnswer("")
            })
            if (arrAllTrue(ArrChoose).length > 0) {
                let arr = arrAllTrue(ArrChoose)
                SetQuestion(arr[RandomInt(0, arr.length - 1)].name)
            }
        }
    }, [Answer, Question, ArrChoose])

    return (
        <div className="row">
            <audio id="audioBTN" controls style={{ display: "none" }} src={require("./Vocabulary/correct.wav")}></audio>
            <div className="col-md-2 sm-12 mt-3 text-center" style={{ padding: "10px" }}>
                <div>
                    <button onClick={() => SetArrChoose([])} className="btn btn-outline-primary mt-3" style={{ width: "100%" }}> Guild</button>
                </div>
                <ShowTableofContent arrVocabularyFinal={arrVocabularyFinal} SetArrChoose={SetArrChoose} />
            </div>
            <div className="col-md-8 sm-12 text-center">
                {ArrChoose.length === 0 ? <div>
                    <iframe title="3" width="100%" height="500px" src="https://www.youtube.com/embed/EYxXuzei1D4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> :
                    <div>
                        < h3 > Where is <span style={{ color: "red" }}> {Question} </span>  </h3>
                        <ShowVocabulary arrVocabulary={arrAllTrue(ArrChoose)} SetAnswer={SetAnswer} />
                    </div>
                }
            </div>
        </div >
    )
}
export default Vocabulary



function ShowVocabulary(props) {
    let listVocabary;
    if (props.arrVocabulary.length > 0) {
        listVocabary = props.arrVocabulary.map((dot, i) =>
            <div onClick={() => props.SetAnswer(dot.name)} style={{ cursor: "pointer" }} key={i} className="col-md-4 sm-12"><img alt={dot.name} src={dot.img} width="200px" /></div>
        )
    } else {
        listVocabary = <h1> Good Job</h1>
    }
    return (
        <div className="row"> {listVocabary} </div>)
}

function ShowTableofContent(props) {
    const listTableOfContent = props.arrVocabularyFinal.map((dot, index) =>
        <div key={index}>
            <button onClick={() => props.SetArrChoose(dot.allimg)} className="btn btn-outline-primary mt-3" style={{ width: "100%" }}>{dot.name} </button>
        </div>
    )

    return (
        listTableOfContent)
}



function arrAllTrue(arrOrigin) {
    let ArrTrue = [];
    arrOrigin.forEach(e => {
        if (e.status) { ArrTrue.push(e) }
    });
    return ArrTrue
}




let arrVocabularyFinal = [
    {
        "name": "Pet Animal Image",
        "allimg": [
            {
                "img": "https://i.postimg.cc/Nj8tB80H/cat.png",
                "name": "cat",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/xdtSb0Mj/dog.png",
                "name": "dog",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/Njvt3CQt/goldfish.png",
                "name": "goldfish",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/TPR6wyyH/hamster.png",
                "name": "hamster",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/j52YHG4H/kitten.png",
                "name": "kitten",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/bdcXjdcg/mouse.png",
                "name": "mouse",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/JnFVPPp9/parrot.png",
                "name": "parrot",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/x8br7M7q/puppy.png",
                "name": "puppy",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/66DTQ0Bj/rabbit.png",
                "name": "rabbit",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/tR1YyfGn/tropicalfish.png",
                "name": "tropicalfish",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/pXzr5FT2/turtle.png",
                "name": "turtle",
                "status": true
            }
        ]
    },
    {
        "name": "Farm Animal Image",
        "allimg": [
            {
                "img": "https://i.postimg.cc/L4DPNbKq/turkey.png",
                "name": "turkey",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/qRfcHhjz/bees.png",
                "name": "bees",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/76g3HHWX/chicken.png",
                "name": "chicken",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/hvsVmCgd/cow.png",
                "name": "cow",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/fWfc1bXR/crab.png",
                "name": "crab",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/gkcVpPqq/deer.png",
                "name": "deer",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/65Hd51Ms/dove.png",
                "name": "dove",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/Z5C69FQW/duck.png",
                "name": "duck",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/t4wWFn02/fish.png",
                "name": "fish",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/FKScpFNm/goat.png",
                "name": "goat",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/wvdNGKjN/horse.png",
                "name": "horse",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/cHM3qDvb/pig.png",
                "name": "pig",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/J0rkRbJ4/rabbit.png",
                "name": "rabbit",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/MH9jHvb0/sheep.png",
                "name": "sheep",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/285ZJ7r0/shrimp.png",
                "name": "shrimp",
                "status": true
            }
        ]
    },
    {
        "name": "Birds Image",
        "allimg": [
            {
                "img": "https://i.postimg.cc/8CmbVdns/bald-eagle.png",
                "name": "bald eagle",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/TP6cSN0Z/blackbird.png",
                "name": "blackbird",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/RFPQWSmB/crow.png",
                "name": "crow",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/J0G3Jf7B/dove.png",
                "name": "dove",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/C5XG4cdr/flamingo.png",
                "name": "flamingo",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/zDcF5Gpw/goose.png",
                "name": "goose",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/g29yXtCn/hawk.png",
                "name": "hawk",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/bwQxQHPL/ostrich.png",
                "name": "ostrich",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/XvL9PjpC/owl.png",
                "name": "owl",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/VNmj4rLw/parrot.png",
                "name": "parrot",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/TwHgRtj2/peacock.png",
                "name": "peacock",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/76LS8F2Q/penguin.png",
                "name": "penguin",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/XqGFX9xf/pigeon.png",
                "name": "pigeon",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/gjChhrBf/raven.png",
                "name": "raven",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/zD6K6PX0/robin.png",
                "name": "robin",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/rF4xkCDc/seagull.png",
                "name": "seagull",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/6pNR52ZZ/sparrow.png",
                "name": "sparrow",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/FKrL3MDs/stork.png",
                "name": "stork",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/4xbcKfvS/swallow.png",
                "name": "swallow",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/JhpBqp23/swan.png",
                "name": "swan",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/bJMSXs8s/turkey.png",
                "name": "turkey",
                "status": true
            },
            {
                "img": "https://i.postimg.cc/hjhQ3Vkk/woodpecker.png",
                "name": "woodpecker",
                "status": true
            }
        ]
    }
]