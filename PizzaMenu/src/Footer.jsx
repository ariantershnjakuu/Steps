import React from "react";
import Order from "./Order"

export default function Footer() {
    const hour = new Date().getHours();
    console.log("Hours", hour)
    const openHour = 9;
    const closedHour = 22;
    const isOpen = hour >= openHour && hour <= closedHour;

    return (
        <div className="footer-container">
            {
                isOpen ? (
                    <Order closedhour={closedHour} openHour={openHour} />
                ) : (
                    <Rect.Fragment>
                    <p>
                    We're are happy to welcome you from {openHour}:00 and {closedHour}:00.
                    </p>
                    </Rect.Fragment>
                )
            }

        </div>
    )
}