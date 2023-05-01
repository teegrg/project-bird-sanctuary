import React from "react";

const CheckOut = () => {
   function handleSubmit() {
    alert("You have adopted birds. Thank you")
   } 


    return (
        <div className="checkOut">
            <form>
                <h2>Checkout</h2>
                <label htmlFor="">First Name</label>
                <input type="text" />
                <label htmlFor="">Last Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Zip Code</label>
                <input type="number" />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default CheckOut