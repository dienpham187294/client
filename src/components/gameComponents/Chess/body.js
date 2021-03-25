import React, { useRef, useEffect } from "react";
import { Application } from "pixi.js";
import * as PIXI from "pixi.js";
import { getCookie } from "../../../helpers/functionCookies"

let ArrXYofMySprite = []
let arrAllGameData = [];
let idRoom;
let ArrSocketIdToSent = []
function Mbody({ socket, gamePlayData }) {
    const ref = useRef(null);

    useEffect(() => {
        arrAllGameData = gamePlayData;
        console.log(arrAllGameData[1])
    }, [gamePlayData])




    useEffect(() => {
        const app = new Application({
            width: 800,
            height: 600,
            backgroundColor: 0x5BBA6F,
        });
        // On first render add app to DOM
        ref.current.appendChild(app.view);
        // Start the PixiJS app

        app.loader
            .add('BackGroundImg', './chessImg/ChessBoard.png')
            .add('Sprite', './img/guest.png')
            .add('BHau', './chessImg/BHau.png')
            .add('BVua', './chessImg/BVua.png')
            .add('BTuong', './chessImg/BTuong.png')
            .add('BMa', './chessImg/BMa.png')
            .add('BXe', './chessImg/BXe.png')
            .add('BTot', './chessImg/BTot.png')
            .add('WHau', './chessImg/WHau.png')
            .add('WVua', './chessImg/WVua.png')
            .add('WTuong', './chessImg/WTuong.png')
            .add('WMa', './chessImg/WMa.png')
            .add('WXe', './chessImg/WXe.png')
            .add('WTot', './chessImg/WTot.png')
            .load((loader, resources) => {
                // This creates a texture from a 'bunny.png' image
                const BackGroundImg = new PIXI.Sprite(resources.BackGroundImg.texture);
                const gameScene = new PIXI.Container();
                gameScene.interactive = true;
                gameScene.on('mousedown', function (e) {
                    ArrXYofMySprite[0] = e.data.global.x;
                    ArrXYofMySprite[1] = e.data.global.y;
                    console.log(ArrXYofMySprite);
                    socket.emit("chess", ["monopolyPlayGame", idRoom, getCookie("username"), ArrXYofMySprite, ArrSocketIdToSent])
                });
                // Setup the position of the bunny
                BackGroundImg.x = app.renderer.width / 2;
                BackGroundImg.y = app.renderer.height / 2;
                // // Rotate around the center
                BackGroundImg.anchor.x = 0.5;
                BackGroundImg.anchor.y = 0.5;

                // Add the bunny to the scene we are building
                gameScene.addChild(BackGroundImg);
                // const BHau = new PIXI.Sprite(resources.BHau.texture);
                // BHau.x = 145;
                // BHau.y = 43;
                // gameScene.addChild(BHau);
                let arrChessman = []
                arrAllGameData[1].forEach(e => {
                    // let Chessman = new PIXI.Sprite(resources.{ e.img }.texture);
                    let Chessman = new PIXI.Sprite(PIXI.Texture.from('./chessImg/' + e.img + '.png'));
                    Chessman.x = e.x;
                    Chessman.y = e.y;
                    Chessman.name = e.Name
                    arrChessman.push(Chessman)
                    gameScene.addChild(Chessman)
                }
                )









                idRoom = arrAllGameData[0].id;


                let ArrSpriteInPixi = [];
                let ArrNameSpriteInPixi = [];
                arrAllGameData[0].members.forEach((e, index) => {
                    ArrSocketIdToSent.push(e.id);

                    let Sprite = new PIXI.Sprite(resources.Sprite.texture);
                    Sprite.x = 50;
                    Sprite.y = 50;
                    Sprite.username = e.username
                    let style1 = new PIXI.TextStyle({
                        fontFamily: "Futura",
                        fontSize: 14
                    });
                    if (e.username === getCookie("username")) {
                        style1.fill = "blue"
                    } else {
                        style1.fill = "black"
                    }

                    let message = new PIXI.Text(e.username, style1);
                    message.x = Sprite.x - 20;
                    message.y = Sprite.y - 20;

                    // Sprite.addChild()


                    ArrSpriteInPixi.push(Sprite)
                    ArrNameSpriteInPixi.push(message)
                    gameScene.addChild(message);
                    gameScene.addChild(Sprite);

                });


                // Listen for frame updates
                app.stage.addChild(gameScene)
                app.ticker.add((delta) => {

                    ArrSpriteInPixi.forEach((e, index) => {

                        arrAllGameData[0].members.forEach((ee) => {
                            if (e.username === ee.username) {

                                if (e.x < ee.x && ee.x - e.x > 1) { e.x += 2; ArrNameSpriteInPixi[index].x += 2 }
                                if (e.x > ee.x && e.x - ee.x > 1) { e.x -= 2; ArrNameSpriteInPixi[index].x -= 2 }
                                if (e.y < ee.y && ee.y - e.y > 1) { e.y += 2; ArrNameSpriteInPixi[index].y += 2 }
                                if (e.y > ee.y && e.y - ee.y > 1) { e.y -= 2; ArrNameSpriteInPixi[index].y -= 2 }


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

    return <div ref={ref} />;
}

export default Mbody




