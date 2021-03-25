import React, { useRef, useEffect, useState } from "react";
import { Application } from "pixi.js";
import RandomInt from "../../../helpers/randomInt"
import CheckMassageAndCommand from "../../../helpers/CheckMessage"
import * as PIXI from "pixi.js";
import { getCookie } from "../../../helpers/functionCookies"
let ArrXYofMySprite = []
let arrAllGameData = [];
let idRoom;
let ArrSocketIdToSent = [];
let AllMessageSave = "";
let AnwertoSay = "-"
let TimeToClick = Date.now()
const arrContentOfConversation = [
    [
        "Simple greetings",
        "Hi! ",
        "Hello!",
        "Hello there! ",
        "Howdy!",
        "Hey!",
        "2"
    ],
    [
        "General greetings",
        "How are you? ",
        "How’s it going? ",
        "How's it been?",
        "How is everything?",
        "How's everything?",
        "How have you been?",
        "How’ve you been?",
        "How you been?",
        "How's tricks?",
        "What have you been up to?",
        "What's new?",
        "What's up?",
        "What's happening? ",
        "What's going on? ",
        "3"
    ],
    [
        "Greetings for various times of the day",
        "Good morning.",
        "Morning.",
        "How are you this bright morning?",
        "Good afternoon.",
        "Afternoon.",
        "Good evening.",
        "Evening.",
        "4"
    ],
    [
        "Greeting a person you haven't seen in a long time",
        "I haven’t seen you in years!",
        "Long time no see! ",
        "I haven't seen you in an age!",
        "I haven’t seen you in a month of Sundays!",
        "5"
    ],
    [
        "Welcomimg someone who has returned",
        "Welcome back!",
        "Welcome back, stranger! ",
        "Long time no see!",
        "Where were you? ",
        "Where have you been?",
        "Where did you go?",
        "6"
    ],
    [
        "Expressing surprise at meeting someone",
        "What a suprise to meet you here!",
        "Imagine meeting you here!",
        "Fancy meeting you here.",
        "Never thought I’d see you here!",
        "What are you doing in this neck of the woods?",
        "What are you doing in this part of town?",
        "What are you doing out of the office?",
        "Where ve you been hiding yourself?",
        "What have you been up to?",
        "Shouldn’t you be in school?",
        "Shouldn’t you be at work?",
        "Have you been keeping busy?",
        "You been keeping busy? Been keeping busy?",
        "7"
    ],
    [
        "After you have greeted someone",
        "We seem to keep running into each other.",
        "Haven't we met before?",
        "We have to stop meeting like this",
        "Didn’t we meet at that party last week?",
        "I’m sorry; I've forgotten your name.",
        "I’ve been meaning to call you.",
        "8"
    ],
    [
        "Concerning a journey or vacation",
        "How was it?",
        "How did it go?",
        "Did everything go OK?",
        "Did you have fun?",
        "Youil have to tell US all about it.",
        "Did you take any pictures?",
        "Do you have pictures?",
        "Were the locals friendly?",
        "Were the natives friendly?",
        "Did you bring me anything?",
        "We missed you.",
        "We missed you around here.",
        "We've missed you around here. It just wasn't the same without you.",
        "9"
    ],
    [
        "Expressing your state of health and happiness",
        "I'm fine.",
        "I'm cool.",
        "Keeping cool.",
        "Dandy.",
        "Fine and dandy.",
        "Great.",
        "Couldn't be better.",
        "Happy as a clam. ",
        "Okay.",
        "All right.",
        "Can't complain. ",
        "No complaints.",
        "I have nothing to complain about.",
        "10"
    ],
    [
        "Telling how you have been doing—positive",
        "Keeping busy.",
        "Keeping myself busy.",
        "Been keeping myself busy.",
        "Keeping out of trouble.",
        "Been keeping out of trouble.",
        "Been up to no good",
        "Been keeping my nose clean",
        "11"
    ],
    [
        "Telling how you have been doing—neutral",
        "Getting by.",
        "Been getting by.",
        "Fair to middling. ",
        "So-so.",
        "Plugging along.",
        "Could be worse.",
        "Could be better.",
        "Same as always.",
        "Same as usual",
        "12"
    ],
    [
        "Telling how you have been doing—negative",
        "Not good.",
        "Not so good.",
        "Not too good. ",
        "None too good.",
        "Not well",
        "Nor very well.",
        "Not so well. ",
        "Not too well.",
        "None too well.",
        "Not so hot.",
        "Not too hot.",
        "None too hot.",
        "Not great.",
        "Not so great.",
        "None too great.",
        "Crummy.",
        "Kind of crummy.",
        "I've seen better days.",
        "I've had better days.",
        "Could be better.",
        "I've been better.",
        "I've been under the weather.",
        "13"
    ],
    [
        "Explaining that you have been busy",
        "Keeping busy.",
        "Keeping myself busy.",
        "Been keeping myself busy.",
        "I'm swamped.",
        "I'm snowed under.",
        "I don’t have time to breathe.",
        "I don’t have time to think.",
        "There aren't enough hours in the day.",
        "Not a moment to spare.",
        "I’ve been running around with my head cut off",
        "I've been running around like a chicken with it's head cut off ",
        "14"
    ],
    [
        "Inviting a friend for a drink or coffee",
        "Do you have time for coffee?",
        "How about a cup of coffee?",
        "Let's go get coffee. ",
        "Do you have any time?",
        "Let’s go for coffee.",
        "Lets go for a beer.",
        "Let’s go for a drink.",
        "15"
    ],
    [
        "Introducing someone to someone else",
        "I'd like you to meet my friend Mary. ",
        "I’d like you to meet Mary.",
        "Uris is my friend Mary.",
        "John, this is Mary. ",
        "Mary, John. ",
        "Mary, have you met John?",
        "Mary, do you know John?",
        "Mary, shake hands with John Jones. ",
        "Do you two know each other?",
        "Have you met?",
        "Have you two been introduced?",
        "Haven't you been introduced?",
        "Oh, I’m sorry; how silly of me. Ulis is Mary.",
        "Mary, John is the guy I was telling you about. ",
        "You two have a lot in common.",
        "16 When you have just been introduced to someone",
        "Good to meet you.",
        "Nice to meet you.",
        "Nice meeting you.",
        "How nice to meet you. ",
        "How very nice to meet you. ",
        "What a pleasure to meet you. ",
        "It’s a pleasure to have finally met you. ",
        "I am pleased to make your acquaintance. ",
        "I'm happy to meet you.",
        "I'm glad to meet you.",
        "Glad to meet you.",
        "A pleasure. ",
        "17 After you have been introduced to someone",
        "I've been wanting to meet you for some time.",
        "John has told me all about you.",
        "John has told me so much about you.",
        "I've heard so much about you.",
        "I've heard so much about you ",
        "I feel I know you already.",
        "So we finally meet face to face.",
        "We’ve exchanged e-mails; it's nice to meet in person.",
        "I'm sorry, what was your name again?",
        "I didn't catch your name. Im terrible at names. ",
        "18"
    ],
    [
        "Asking how someone is",
        "How are you?",
        "How’s your family?",
        "How's the family?",
        "How are you doing?",
        "How are you doing today?",
        "How you doing?",
        "Are you doing OK?",
        "How are you feeling?",
        "How you feeling?",
        "Are you feeling better today?",
        "How have you been?",
        "How you been? ",
        "19"
    ],
    [
        "Asking someone how things are going",
        "How're things?",
        "How’re things with you?",
        "How're things going?",
        "How's with you?",
        "Hows by you? ",
        "How's business?",
        "How's tricks? ",
        "How’s it shakin'? ",
        "How's everything?",
        "How's every little thing?",
        "How's everything going?",
        "How's it going?",
        "How goes it?",
        "How goes it with you?",
        "How are you getting on?",
        "How are you getting along?",
        "How's the world been treating you?",
        "Ending a Conversation",
        "20"
    ],
    [
        "Signaling the end of a conversation",
        "Oh, look at the time!",
        "It's getting later.",
        "Well, David, it's really good to see you, but I really must go.",
        "It's been fun talking to you.",
        "(It's been) nice chatting with you.",
        "It's so good to see you again.",
        "We have to make plans to get together some time.",
        "Let’s do lunch sometime. ",
        "21"
    ],
    [
        "Ending a telephone conversation",
        "I really have to go now. ",
        "We'll talk sometime.",
        "There's someone on the other line. ",
        "I must say good-bye now.",
        "The doorbell is ringing. ",
        "I'll call you back. ",
        "Can I call you back? ",
        "Something has come up.",
        "I have to get back to my work. ",
        "I'll call again later. ",
        "Can we continue this later? ",
        "My other line is ringing.",
        "I have to get back to work before the boss sees I won’t keep you any longer.",
        "I'll let you go now.",
        "22"
    ],
    [
        "Ending a conversation abruptly",
        "I’m going to have to run.",
        "Must run.",
        "I’m all out of time. I'll have to say good-bye now. ",
        "Look at the time. I really must go.",
        "It’s been great talking to you, but I have to go. ",
        "Wow! I’m late. Look, I'll call you.",
        "Sorry, but I have to leave now.",
        "Let’s continue this another time. I really must go.",
        "Good-Byes",
        "23"
    ],
    [
        "Simple good-byes",
        "Good-bye.",
        "Bye.",
        "Bye-bye.",
        "Good day. ",
        "Good evening.",
        "Good night.",
        "Good-bye until later.",
        "Good-bye until next time.",
        "Good-bye for now.",
        "See you later.",
        "See you later, alligator.",
        "Later, gator.",
        "Later.",
        "I’ll try to catch you later.",
        "I’ll catch you later.",
        "Catch you later.",
        "I'll talk to you soon.",
        "Let’s get together soon.",
        "I’ll be seeing you.",
        "I'll see you real soon.",
        "See ya.",
        "See you real soon.",
        "See you around.",
        "See you in a little while.",
        "See you next year.",
        "See you then.",
        "See you tomorrow. ",
        "24"
    ],
    [
        "Taking leave of someone",
        "(It was) good to see you.",
        "(It was) nice to see you.",
        "Nice meeting you.",
        "It was a pleasure meeting you. ",
        "It is a pleasure to have met you. ",
        "It's been a real pleasure."
    ],
    [
        "Leaving a place",
        "Are we ready to leave?",
        "Are you about finished?",
        "Are you ready to go?",
        "Ready to go?",
        "Ready to roll? ",
        "Are we away? ",
        "Lets blow",
        "Let’s get out of this taco stand.",
        "Let's go while the going's good.",
        "Let's get while the gettings good",
        "Let's head out.",
        "Let's beat a hasty retreat",
        "Let's motor.",
        "Let’s hit the road, ",
        "Let’s boogie.",
        "Let’s split.",
        "Let’s make like a tree and leave",
        "Let's make like the wind and blow.",
        "Let’s make like a banana and split",
        "Exit stage right.",
        "Exit stage left.",
        "Retreat! ",
        "26"
    ],
    [
        "When someone is leaving on a journey",
        "Have a good trip!",
        "Have a nice flight.",
        "Have a nice trip.",
        "Have a safe trip. ",
        "Have a safe journey.",
        "Drive carefully.",
        "Take care of yourself.",
        "Take care.",
        "We'll miss you.",
        "All the best."
    ],
    [
        "Making plans to keep in touch with someone",
        "I'll call you when I ger home. ",
        "Call when you get there. Don’t forget to call.",
        "Write me",
        "Let's write.",
        "You’ve got my e-mail address? Text me. ",
        "I'm on Facebook.",
        "I'll be in touch.",
        "Let's keep in touch.",
        "Agreeing",
        "28"
    ],
    [
        "Simple agreement",
        "Yes.",
        "Yeah ",
        "Yep. ",
        "Yup.",
        "Right.",
        "You're right.",
        "Right you are.",
        "Right on!",
        "Sure.",
        "Sure thing.",
        "You bet.",
        "Absolutely.",
        "By all means.",
        "29"
    ],
    [
        "Stating your concurrence",
        "This is true.",
        "That’s true.",
        "You're right.",
        "Ain’t that the truth? ",
        "Ain’t it the truth? ",
        "That's right.",
        "That’s for certain.",
        "That’s for sure.",
        "That's for darn sure.",
        "That's for damn sure",
        "Damn straight!",
        "It works for me.",
        "Well said.",
        "I agree with you 100 percent.",
        "I couldn't agree with you more.",
        "I have no problem with that. We see eye to eye on this.",
        "I couldn't have said it better.",
        "30"
    ],
    [
        "Expressing acceptance",
        "I think it's fine.",
        "It's good enough.",
        "It's satisfactory.",
        "It'll do.",
        "It'll serve the purpose.",
        "I like it.",
        "I love it.",
        "I think it s great.",
        "I like the color.",
        "I like the texture.",
        "I like the flavor.",
        "It's got a good rhythm.",
        "It's wonderful.",
        "It's fabulous.",
        "It's a masterpiece. ",
        "That suit's me fine.",
        "That’s the ticket",
        "That’s just what the doctor ordered",
        "That’s just what I needed.",
        "That hit's the spot",
        "That fit's the bill",
        "That’s it.",
        "That's the greatest thing since sliced bread ",
        "It’s in a league of it's own.",
        "I give it four stars.",
        "It gets two thumbs up. ",
        "I’ve hit the jackpot.",
        "31"
    ],
    [
        "Stating that you understand",
        "I hear you.",
        "I hear you, man.",
        "I hear what you're saying.",
        "I see what you’re saying.",
        "I can see what you're saying.",
        "I can see that.",
        "I see what you mean.",
        "I see where you're coming from.",
        "I know what you mean.",
        "Point well taken.",
        "I know what you’re talking about. ",
        "I understand what you're saying. ",
        "Understood.",
        "I dig it. ",
        "I can dig it. ",
        "I got you.",
        "(I) got it. ",
        "I follow you. ",
        "I’m with you.",
        "I’m there with you.",
        "I’ve been there.",
        "Read you loud and clear."
    ],
    [
        "Making sure you are understood.",
        "Does that make any sense? ",
        "Am I making sense?",
        "Are you following me? ",
        "Know what I'm saying? ",
        "You know?",
        "Do you see what I mean? ",
        "See what I mean?",
        "Don't you see?",
        "Do you get the message? ",
        "Do you get the picture?",
        "Get the message?",
        "Get the picture?",
        "Get my drift?",
        "Do you get it?",
        "Get it?",
        "Do you follow?",
        "Do you follow me?",
        "Do you agree?",
        "You're with me, right? ",
        "Are you with me on this?",
        "Do we see eye to eye on this? ",
        "Disagreeing",
        "33"
    ],
    [
        "Stating simple disagreement or refusal",
        "No.",
        "Nope.",
        "No way.",
        "Not a chance.",
        "Not!",
        "I don't think so.",
        "34"
    ],
    [
        "Stating categorical disagreement",
        "That's not right.",
        "You’ve got that wrong.",
        "You’ve got it all wrong.",
        "Wrong!",
        "You missed the boat ",
        "You're missing the boat",
        "Wrong on both counts.",
        "You’re wrong.",
        "You’re dead wrong.",
        "You’re off",
        "You’re way offbase.",
        "35"
    ],
    [
        "Stating strong disagreement",
        "I disagree completely.",
        "I couldn’t disagree (with you) more.",
        "Bullshit, (taboo)",
        "That’s a lie.",
        "That’s a big, fat lie. ",
        "You're lying through your teeth. ",
        "Look me in the eye and say that.",
        "36"
    ],
    [
        "Stating your disagreement with a proposition",
        "That’s out of the listNumberToQuestion.",
        "That’s unthinkable.",
        "That’s insane.",
        "That doesn't even merit a response.",
        "I’ll give that all the consideration it's due.",
        "37"
    ],
    [
        "Expressing rejection",
        "I cant stand it.",
        "I hate it.",
        "I don’t care for it.",
        "I don’t like it.",
        "It's not my style.",
        "It stinks",
        "It sucks  ",
        "It reeks ",
        "My kid could do that. ",
        "It's awful.",
        "It’s terrible.",
        "It’s hideous.",
        "It's dreadful. ",
        "It's hell on earth ",
        "I don't get it.",
        "Don’t quit your dayjob.",
        "38"
    ]
]
// console.log(arrContentOfConversation[RandomInt(0, arrContentOfConversation.length - 1)][0])
function Mbody({ socket, gamePlayData, message, ArrIDofAllMemberInRoom, IDofRoom }) {
    const ref = useRef(null);
    const [Time, SetTime] = useState(300);
    const [TimeToChangeQuestion, SetTimeToChangeQuestion] = useState(15);
    const [AllQuestion, SetAllQuestion] = useState([]);
    const [NumberOfQuestion, SetNumberOfQuestion] = useState(0);
    const [AnwerRight, SetAnwerRight] = useState("");
    const [AnwerChoose, SetAnwerChoose] = useState("");
    const [StatusToPlay, SetStatusToPlay] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            SetTime(Time => Time - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval1 = setInterval(() => {
            SetTimeToChangeQuestion(Time => Time - 1);
        }, 1000);
        return () => clearInterval(interval1);
    }, []);
    useEffect(() => {
        if (Time === 0) {
            SetStatusToPlay(false);

        }
    }, [Time])
    useEffect(() => {
        if (TimeToChangeQuestion === 0 && StatusToPlay && NumberOfQuestion < AllQuestion.length - 1) {
            SetTimeToChangeQuestion(15)
            let number = NumberOfQuestion + 1;
            SetAnwerRight(AllQuestion[number].AnwerRight)
            SetNumberOfQuestion(NumberOfQuestion + 1);
        }
    }, [TimeToChangeQuestion, AllQuestion, NumberOfQuestion, StatusToPlay])
    useEffect(() => {
        arrAllGameData = gamePlayData;
    }, [gamePlayData])
    // useEffect(() => {
    //     if (CheckMassageAndCommand(message, AnwerChoose, 60) && AnwerChoose === AnwerRight) {
    //         SetTime(Time + 20);
    //         SetNumberOfQuestion(NumberOfQuestion + 1);
    //     }
    //     // console.log(CheckMassageAndCommand(message, AnwerChoose, 60));
    // }, [message, AnwerChoose, NumberOfQuestion, SetNumberOfQuestion, SetTime, Time, AnwerRight])

    useEffect(() => {
        if (socket.id === IDofRoom) {
            socket.emit("monopoly", ["SendListOfQuestion", ReturnArrOfQuesiton(arrContentOfConversation), ArrIDofAllMemberInRoom]);
        }
        socket.on("updateListOfQuestion", (data) => {
            SetAllQuestion(data);
        });
    }, [socket, IDofRoom, ArrIDofAllMemberInRoom, SetAllQuestion])
    useEffect(() => {
        if (AllQuestion.length > 1) {
            SetNumberOfQuestion(0);
            SetAnwerRight(AllQuestion[0].AnwerRight)
            SetStatusToPlay(true)
        }
    }, [AllQuestion])
    useEffect(() => {
        AllMessageSave += " " + message
        if (CheckMassageAndCommand(AllMessageSave, AnwerChoose, 60)[0] && AnwerChoose === AnwerRight && AnwerRight !== AnwertoSay && StatusToPlay) {
            AllMessageSave = "";
            AnwertoSay = AnwerRight;
            SetTime(T => T + 30)
            document.getElementById("audioBTN").play()
            // console.log("socket")
            socket.emit("monopoly", ["AddScore", IDofRoom, getCookie("username")])
        }
    }, [message, AnwerChoose, AnwerRight, NumberOfQuestion, AllQuestion, StatusToPlay, socket, IDofRoom])



    useEffect(() => {
        const app = new Application({
            width: 1000,
            height: 320,
            backgroundColor: 0x5BBA6F,
        });
        // On first render add app to DOM
        ref.current.appendChild(app.view);
        // Start the PixiJS app

        app.loader
            .add('BackGroundImg', './logo511.png')
            .add('Sprite', './img/guest.png')
            .add('AnswerA', './img/AnswerA.png')
            .add('AnswerB', './img/AnswerB.png')
            .add('AnswerC', './img/AnswerC.png')
            .add('AnswerD', './img/AnswerD.png')
            .load((loader, resources) => {
                // This creates a texture from a 'bunny.png' image
                const BackGroundImg = new PIXI.Sprite(resources.BackGroundImg.texture);
                const gameScene = new PIXI.Container();
                gameScene.interactive = true;
                gameScene.on('mousedown', function (e) {
                    ArrXYofMySprite[0] = e.data.global.x;
                    ArrXYofMySprite[1] = e.data.global.y;
                    // console.log(ArrXYofMySprite);
                    if (Date.now() - TimeToClick > 1500) {
                        TimeToClick = Date.now()
                        socket.emit("monopoly", ["monopolyPlayGame", idRoom, getCookie("username"), ArrXYofMySprite, ArrSocketIdToSent])
                    }

                });
                gameScene.on('touchend', function (e) {
                    ArrXYofMySprite[0] = e.data.global.x;
                    ArrXYofMySprite[1] = e.data.global.y;
                    // console.log(ArrXYofMySprite);
                    if (Date.now() - TimeToClick > 1500) {
                        TimeToClick = Date.now()
                        socket.emit("monopoly", ["monopolyPlayGame", idRoom, getCookie("username"), ArrXYofMySprite, ArrSocketIdToSent])
                    }
                });
                // Setup the position of the bunny
                BackGroundImg.x = app.renderer.width / 2;
                BackGroundImg.y = app.renderer.height / 2;
                // // Rotate around the center
                BackGroundImg.anchor.x = 0.5;
                BackGroundImg.anchor.y = 0.5;

                // Add the bunny to the scene we are building
                gameScene.addChild(BackGroundImg);
                // let arrAnswerImg = [];
                // //A
                // let AnswerAImg = new PIXI.Sprite(resources.AnswerA.texture);
                // AnswerAImg.x = 200;
                // AnswerAImg.y = 50;
                // AnswerAImg.text = ".....";
                // AnswerAImg.interactive = true;
                // AnswerAImg.on('mousedown', function (e) {
                //     SetAnwerChoose(AnswerAImg.text)
                // });
                // AnswerAImg.on('touchend', function (e) {
                //     SetAnwerChoose(AnswerAImg.text)
                // });
                // arrAnswerImg.push(AnswerAImg)
                // gameScene.addChild(AnswerAImg);
                // //B
                // let AnswerAImgB = new PIXI.Sprite(resources.AnswerB.texture);
                // AnswerAImgB.x = 750;
                // AnswerAImgB.y = 50;
                // AnswerAImgB.text = ".....";
                // AnswerAImgB.interactive = true;
                // AnswerAImgB.on('mousedown', function (e) {
                //     SetAnwerChoose(AnswerAImgB.text)
                // });
                // AnswerAImgB.on('touchend', function (e) {
                //     SetAnwerChoose(AnswerAImgB.text)
                // });
                // arrAnswerImg.push(AnswerAImgB)
                // gameScene.addChild(AnswerAImgB);
                // //C
                // let AnswerAImgC = new PIXI.Sprite(resources.AnswerC.texture);
                // AnswerAImgC.x = 200;
                // AnswerAImgC.y = 200;
                // AnswerAImgC.text = ".....";
                // AnswerAImgC.interactive = true;
                // AnswerAImgC.on('mousedown', function (e) {
                //     SetAnwerChoose(AnswerAImgC.text)
                // });
                // AnswerAImgC.on('touchend', function (e) {
                //     SetAnwerChoose(AnswerAImgC.text)
                // });
                // arrAnswerImg.push(AnswerAImgC)
                // gameScene.addChild(AnswerAImgC);
                // //D

                // let AnswerAImgD = new PIXI.Sprite(resources.AnswerD.texture);
                // AnswerAImgD.x = 750;
                // AnswerAImgD.y = 200;
                // AnswerAImgD.text = ".....";
                // AnswerAImgD.interactive = true;
                // AnswerAImgD.on('mousedown', function (e) {
                //     SetAnwerChoose(AnswerAImgD.text)
                // });
                // AnswerAImgD.on('touchend', function (e) {
                //     SetAnwerChoose(AnswerAImgD.text)
                // });
                // arrAnswerImg.push(AnswerAImgD)
                // gameScene.addChild(AnswerAImgD);
                //End

                // let styleAnswer = new PIXI.TextStyle({
                //     fontFamily: "Futura",
                //     fontSize: 30
                // });
                // styleAnswer.fill = "blue";
                // let Anwer1 = new PIXI.Text("...", styleAnswer);
                // Anwer1.x = 100;
                // Anwer1.y = 50;
                // gameScene.addChild(Anwer1);
                // arrAnwer.push(Anwer1)




                idRoom = arrAllGameData[0].id;

                let ArrSpriteInPixi = [];
                let ArrNameSpriteInPixi = [];
                let ArrChatofSpriteInPixi = [];
                let ArrOfScore = [];

                arrAllGameData[0].members.forEach((e, index) => {
                    ArrSocketIdToSent.push(e.id);

                    let Sprite = new PIXI.Sprite(resources.Sprite.texture);
                    Sprite.x = 50;
                    Sprite.y = 50;
                    Sprite.username = e.username
                    let style1 = new PIXI.TextStyle({
                        fontFamily: "Futura",
                        fontSize: 20
                    });
                    if (e.username === getCookie("username")) {
                        style1.fill = "blue";
                    } else {
                        style1.fill = "black"
                    }
                    let style2 = new PIXI.TextStyle({
                        fontFamily: "Futura",
                        fontSize: 26
                    });
                    style1.fill = "red";

                    let messgeChat1 = new PIXI.Text("", style2);
                    messgeChat1.x = Sprite.x - 20;
                    messgeChat1.y = Sprite.y - 40;
                    // messgeChat1.style.fill = "black"
                    // messgeChat1.text = messageChat;
                    gameScene.addChild(messgeChat1);
                    ArrChatofSpriteInPixi.push(messgeChat1)


                    let message = new PIXI.Text(e.username, style1);
                    message.x = Sprite.x - 20;
                    message.y = Sprite.y - 20;

                    let messageScore = new PIXI.Text(e.score, style1);
                    messageScore.x = Sprite.x + 30;
                    messageScore.y = Sprite.y;
                    // Sprite.addChild()


                    ArrSpriteInPixi.push(Sprite)
                    ArrNameSpriteInPixi.push(message)
                    ArrOfScore.push(messageScore)
                    gameScene.addChild(messageScore);
                    gameScene.addChild(message);
                    gameScene.addChild(Sprite);

                });



                // Listen for frame updates
                app.stage.addChild(gameScene)
                app.ticker.add((delta) => {
                    // arrAnswerImg.forEach((e, index) => {
                    //     // console.log(ArrQuestion)
                    //     if (ArrQuestion.length > 1) {
                    //         e.text = ArrQuestion[NumberOfQuestion1].listofAnwser[index]
                    //     }
                    // })
                    ArrSpriteInPixi.forEach((e, index) => {
                        arrAllGameData[0].members.forEach((ee) => {
                            if (e.username === ee.username) {
                                ArrChatofSpriteInPixi[index].text = ee.text;
                                ArrOfScore[index].text = ee.score;
                                if (e.x < ee.x && ee.x - e.x > 1.5) { e.x += 2.5; ArrNameSpriteInPixi[index].x += 2.5; ArrChatofSpriteInPixi[index].x += 2.5; ArrOfScore[index].x += 2.5; }
                                if (e.x > ee.x && e.x - ee.x > 1.5) { e.x -= 2.5; ArrNameSpriteInPixi[index].x -= 2.5; ArrChatofSpriteInPixi[index].x -= 2.5; ArrOfScore[index].x -= 2.5; }
                                if (e.y < ee.y && ee.y - e.y > 1.5) { e.y += 2.5; ArrNameSpriteInPixi[index].y += 2.5; ArrChatofSpriteInPixi[index].y += 2.5; ArrOfScore[index].y += 2.5; }
                                if (e.y > ee.y && e.y - ee.y > 1.5) { e.y -= 2.5; ArrNameSpriteInPixi[index].y -= 2.5; ArrChatofSpriteInPixi[index].y -= 2.5; ArrOfScore[index].y -= 2.5; }
                            }
                        })

                    })
                });
            });


        app.start();

        // return () => {
        //     // On unload stop the application
        //     app.stop();
        // };
    }, [socket]);

    return <div style={{ position: "absolute", top: "60px", border: "1px solid black", backgroundColor: "white" }} >
        <div> <audio id="audioBTN" controls style={{ display: "none" }} src={require("./correct.wav")}></audio></div>
        <div>
            {Time} || {TimeToChangeQuestion}
            <br />
            {AllQuestion.length > 0 ?
                <div className="row">
                    <div className="col-12"> <h5>{AllQuestion[NumberOfQuestion].tittle}</h5> </div>
                    <div className="col-6"
                        onClick={() => SetAnwerChoose(AllQuestion[NumberOfQuestion].listofAnwser[0])}
                        style={{ cursor: "pointer", backgroundColor: AnwerChoose === AllQuestion[NumberOfQuestion].listofAnwser[0] ? "yellow" : "transparent" }}>
                        {AllQuestion[NumberOfQuestion].listofAnwser[0]}
                    </div>
                    <div className="col-6"
                        onClick={() => SetAnwerChoose(AllQuestion[NumberOfQuestion].listofAnwser[1])}
                        style={{ cursor: "pointer", backgroundColor: AnwerChoose === AllQuestion[NumberOfQuestion].listofAnwser[1] ? "yellow" : "transparent" }}>
                        {AllQuestion[NumberOfQuestion].listofAnwser[1]}
                    </div>
                    <div className="col-6"
                        onClick={() => SetAnwerChoose(AllQuestion[NumberOfQuestion].listofAnwser[2])}
                        style={{ cursor: "pointer", backgroundColor: AnwerChoose === AllQuestion[NumberOfQuestion].listofAnwser[2] ? "yellow" : "transparent" }}>
                        {AllQuestion[NumberOfQuestion].listofAnwser[2]}
                    </div>
                    <div className="col-6"
                        onClick={() => SetAnwerChoose(AllQuestion[NumberOfQuestion].listofAnwser[3])}
                        style={{ cursor: "pointer", backgroundColor: AnwerChoose === AllQuestion[NumberOfQuestion].listofAnwser[3] ? "yellow" : "transparent" }}>
                        {AllQuestion[NumberOfQuestion].listofAnwser[3]}
                    </div>
                </div> : ""}

        </div>
        <div ref={ref}></div>
    </div >;
}

export default Mbody




function ReturnArrOfQuesiton(arr) {
    let arrSTT = [];
    for (let i = 0; i < arr.length - 1; i++) {
        arrSTT.push(i);
    }
    let arr100QS = [];
    for (let i = 0; i < 100; i++) {
        let arrTemp = arrSTT.sort(() => Math.random() - 0.5);
        arr100QS.push({ "listNumberToQuestion": [arrTemp[0], arrTemp[1], arrTemp[2], arrTemp[3]] })
    }
    let arrReturnArrOfQuesiton = [];
    arr100QS.forEach(e => {
        // console.log(e.listNumberToQuestion)
        let Tittle = arr[e.listNumberToQuestion[0]][0];
        let AnwerRight = arr[e.listNumberToQuestion[0]][RandomInt(1, arr[e.listNumberToQuestion[0]].length - 2)];
        let AwerWrong1 = arr[e.listNumberToQuestion[1]][RandomInt(1, arr[e.listNumberToQuestion[1]].length - 2)];
        let AwerWrong2 = arr[e.listNumberToQuestion[2]][RandomInt(1, arr[e.listNumberToQuestion[2]].length - 2)];
        let AwerWrong3 = arr[e.listNumberToQuestion[3]][RandomInt(1, arr[e.listNumberToQuestion[3]].length - 2)];
        let ArrOfQuestionFisrt = [AnwerRight, AwerWrong1, AwerWrong2, AwerWrong3];
        let ArrOfQuestionFinal = ArrOfQuestionFisrt.sort(() => Math.random() - 0.5);
        arrReturnArrOfQuesiton.push({ "tittle": Tittle, "AnwerRight": AnwerRight, "listofAnwser": ArrOfQuestionFinal })
    })
    return arrReturnArrOfQuesiton
}
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// list = list.sort(() => Math.random() - 0.5)
// console.log(list)

