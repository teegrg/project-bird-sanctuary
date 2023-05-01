import React from "react";

const CheckOut = () => {
   function handleSubmit() {
    alert("Purchase Confirmed. You have adopted birds. Thank you!")
   } 

    return (
        <div className="checkOut">
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Zip Code</label>
                <input type="number" />
                <button >Submit</button>
            </form>
        </div>
    )
}

export default CheckOut