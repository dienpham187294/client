import React, { useRef, useEffect, useState } from "react";
import GetFinal from "../mainPlayversion22/funtionInside/A4Sub1_GetFinal"
import $ from "jquery"
let arrLocation = [{ x: 0, y: 0 }];
let imgG = "https://i.postimg.cc/fTcBHdrC/guest.png"
let iCheck = true
let iNext = "none";
let time = Date.now()
let ArrSprite = {}
function PixiJSDiv() {
    // const Data_objMapPixi = JSON.parse($("#ID_objMapPixijs").text())
    const ref = useRef(null);
    useEffect(() => {
        // On first render create our application
        try {

            const PIXI = require("pixi.js");
            const { Application } = require("pixi.js");
            const app = new Application({
                width: 400,
                height: 400,
                backgroundColor: "tranparent"
            });
            let bg = PIXI.Sprite.from('https://i.postimg.cc/VkTnKBrp/MapGame.jpg')
            bg.width = 400;
            bg.height = 400;
            app.stage.addChild(bg);
            app.interactive = true;
            app.renderer.view.addEventListener('click', function (e) {
                let Xuse, Yuse;
                if ((e.layerX + sprite.x) % 3 === 0) {
                    Xuse = e.layerX;
                } else {
                    Xuse = e.layerX - (e.layerX + sprite.x) % 3
                }
                if ((e.layerY + sprite.y) % 3 === 0) {
                    Yuse = e.layerY;
                } else {
                    Yuse = e.layerY - (e.layerY + sprite.y) % 3
                }
                $("#xyindex").text(Xuse + ":" + Yuse)
                if (Date.now() - time > 100) {
                    iNext = "none";


                }

                arrLocation.push({ x: Xuse, y: Yuse });

                try {
                    ticker.start();
                } catch (error) {

                }
            });


            let sprite = PIXI.Sprite.from('https://i.postimg.cc/pXtT9NJc/staff-Of-Restaurant.png');
            sprite.width = 60;
            sprite.height = 60;
            sprite.x = 99;
            sprite.y = 99;
            sprite.anchor.set(0.5);
            app.stage.addChild(sprite)


            const ticker = new PIXI.Ticker();
            ticker.add(animated);
            // ticker.start();
            function animated() {
                try {
                    if (sprite.x < GetFinal(arrLocation)["x"]) {
                        sprite.x += 3
                    }
                    if (sprite.y < GetFinal(arrLocation)["y"]) {
                        sprite.y += 3
                    }
                    if (sprite.x > GetFinal(arrLocation)["x"]) {
                        sprite.x -= 3
                    }
                    if (sprite.y > GetFinal(arrLocation)["y"]) {
                        sprite.y -= 3
                    }
                    if (
                        sprite.x === GetFinal(arrLocation)["x"] &&
                        sprite.y === GetFinal(arrLocation)["y"]
                    ) {
                        ticker.stop();
                    }
                } catch (error) {
                }
            }
            // Add app to DOM
            ref.current.appendChild(app.view);
            // Start the PixiJS app
            app.start();
            return () => {
                // On unload completely destroy the application and all of it's children
                app.destroy(true, true);
            };
        } catch (error) {
            console.log(error)
        }
    }, []);



    return (
        <>

            <div ref={ref} />
            {/* <p id="xyindex"></p> */}
        </>

    )
}

export default PixiJSDiv


function BtnAddData(n) {
    $("#numberData").text(n);
    $("#btnUpdateDataShowToPick")[0].click(n)
}
