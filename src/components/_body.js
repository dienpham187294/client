import React from "react";
import PixiAnimate from "./_pixiAnimate";
import Sub from "./_sub";



export default function Body({ ID }) {

    return (
        <div>
            <PixiAnimate ID={ID} />
            <Sub Total={ID} />
        </div>
    )
}