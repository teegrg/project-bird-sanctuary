import React from "react";

const Cart = ({addOn, total, discount}) => {
    return (
        <div className="cart">
            <h2>Cart</h2>
            <p><strong>Discount: {discount}%</strong></p>
            <p><strong>Total: ${total}</strong></p>   
            <ol>
            {addOn.map((el, index) => <li key={index}>{el.name} ${el.amount}</li>)}
            </ol>
        </div>
    )
}

export default Cart;