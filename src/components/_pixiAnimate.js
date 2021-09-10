import React, { useRef, useEffect } from "react";
import Md_xy from "../util/md_xy";
// import io from 'socket.io-client'
let i = 0;
function PixiAnimate(props) {
    const xy = new Md_xy(0, 0)
    const ref = useRef(null);
    //////////
    useEffect(() => {
        if (i === 0) {
            // On first render create our application
            try {
                const PIXI = require("pixi.js");
                const { Application } = require("pixi.js");
                const app = new Application({
                    width: 350,
                    height: 500,
                    backgroundColor: "yellow"
                });
                let bg = PIXI.Sprite.from('https://i.postimg.cc/c1TbKHGj/Made-my-first-Town-Map.jpg')
                bg.width = 350;
                bg.height = 500;
                app.stage.addChild(bg);
                app.interactive = true;

                app.renderer.view.addEventListener('click', function (e) {
                    xy.set_xy(e.layerX, e.layerY);
                    try {
                        ticker.start();
                    } catch (error) {

                    }
                });

                app.renderer.view.addEventListener("touchend", function (e) {
                    xy.set_xy(e.changedTouches[0].layerX - 18, e.changedTouches[0].layerY);
                    try {
                        ticker.start();
                    } catch (error) {

                    }
                })

                let sprite = PIXI.Sprite.from('https://i.postimg.cc/28nB0R6j/Avatar-2.jpg');
                sprite.width = 60;
                sprite.height = 60;
                sprite.x = 33;
                sprite.y = 33;
                sprite.anchor.set(0.5);

                app.stage.addChild(sprite)


                const ticker = new PIXI.Ticker();
                ticker.add(animated);
                // ticker.start();
                function animated() {
                    try {
                        if (sprite.x < xy.x) {
                            sprite.x += 3
                        }
                        if (sprite.y < xy.y) {
                            sprite.y += 3
                        }
                        if (sprite.x > xy.x) {
                            sprite.x -= 3
                        }
                        if (sprite.y > xy.y) {
                            sprite.y -= 3
                        }
                        if (
                            sprite.x === xy.x &&
                            sprite.y === xy.y
                        ) {
                            props.ID.fnObj.SET_arrLocation(xy.check_xy())
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
        }
        i++
        console.log(i)
    });

    return (
        <div id="id_pixiCanvas" ref={ref} />
    )
}

export default PixiAnimate

