import React from "react";



const Bird = ({ name, price, image, handleAdoptBtn, id }) => {

    return (

        <div className="card" >
            <h5>{name}</h5>
            <p>Price ${price}</p>
            <img src={image} alt="bird" />
            <br />
            <button onClick={() => handleAdoptBtn(id)}>Adopt</button>
        </div>

    )
}

export default Bird;