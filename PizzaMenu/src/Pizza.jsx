import React from "react"

export const pizzaData = [
    {
        name: "Pizza prosciutto",
        price: "https://www.seasonsandsuppers.ca/wp-content/uploads/2015/07/pineapple-pizza1200.jpg",
        soldOut: false

    },
    {
        name: "Pizza peperoni",
        price: "https://img.freepik.com/premium-photo/fresh-tasty-pizza-with-pepperoni-isolated-white_136401-2336.jpg?w=2000",
        soldOut: false
    },
    {
        name: "Pizza fungi",
        price: "https://www.italianstylecooking.net/wp-content/uploads/2022/01/Pizza-Funghi.jpg",
        soldOut: true
    },
    {
        name: "Pizza hawaiana",
        price: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/wrduskxe/89f21434-c493-450d-99a8-dbaca9ea0dae.jfif",
        soldOut: false
    },
    {
        name: "Pizza margarita",
        price: "https://static.toiimg.com/thumb/56868564.cms?width=1200&height=900",
        soldOut: true
    },
    {
        name: "Pizza spinachi",
        price: "https://onlineculinaryschool.net/wp-content/uploads/2018/10/online_culinary_school_pizza_spinaci-1.jpg",
        soldOut: false
    }
]


function Pizza(props) {
    // if (props.pizzaObj.soldOut) return null;
    return (
        <div className={`pizza-component ${props.pizzaObj.soldOut ? 'sold-out' : ""}`} >
            <div className="pizza-img">
                <img width={300} src={props.pizzaObj.price} alt='Pizza picture' />
            </div>
            <div style={{ color: props.color }} className="pizza-description">
                <h4>{props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.name}</h4>
            </div>
        </div>
    );
}

export default Pizza;