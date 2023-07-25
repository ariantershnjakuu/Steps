import React from "react"

export const pizzaData = [
    {
        name: "Pizza prosciutto",
        price: "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg",
        soldOut: false

    },
    {
        name: "Pizza peperoni",
        price: "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg",
        soldOut: false
    },
    {
        name: "Pizza fungi",
        price: "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg",
        soldOut: false
    },
    {
        name: "Pizza hawaiana",
        price: "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg",
        soldOut: false
    },
    {
        name: "Pizza margarita",
        price: "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg",
        soldOut: true
    },
    {
        name: "Pizza spinachi",
        price: "https://www.thespruceeats.com/thmb/MD-dSsFP6k5XBSk9XcdOIfnF4K0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prosciutto-pizza-4844358-hero-04-c0a6f73057ce4fed88982b75a5c2c8e1.jpg",
        soldOut: false
    }
]


function Pizza(props) {
    if (props.pizzaObj.soldOut) return null;
    return (
        <div className="pizza-component" >
            <div className="pizza-img">
                <img width={300} src={props.pizzaObj.price} alt='Pizza picture' />
            </div>
            <div style={{ color: props.color }} className="pizza-description">
                <h4>{props.pizzaObj.name}</h4>
            </div>
        </div>
    );
}

export default Pizza;