import React from "react";
import Logo from "../public/pizzalogo.svg"


export default function Header() {
    return (
        <header className="App-header">
            <div className='navbar'>
                <div>
                    <img src={Logo} alt="logo" className='logo' />
                </div>
                <ul className='navbar-list'>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        US
                    </li>
                </ul>
            </div>
        </header>
    )
}