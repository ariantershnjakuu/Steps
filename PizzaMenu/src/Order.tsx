import React from "react";


export default function Order({ openHour, closedhour }) {
    console.log(closedhour)
    return (
        <div>
            <p>
                We're open from {openHour}:00 until {closedhour}:00, Come and visit us.
            </p>
        </div>
    )
}