import React from "react";
import birdData from "./data/birds";
import Bird from "./components/bird";
import Cart from "./components/cart";
import CheckOut from "./components/checkout";
import { useState } from "react";


function App() {
  const [addOn, setAddOn] = useState([])
  const [discount, setDiscount] = useState(null)
  const [total, setTotal] = useState(null)


  function handleAdoptBtn(birdId) {
    return birdData.filter(el => {
      if (el.id === birdId) {
        const newTotal = total + el.amount
        setAddOn([...addOn, el])
        setTotal(newTotal)
        if (addOn.length >= 2) {
          setDiscount(10)
          setTotal(newTotal - (newTotal * .1))
        }
      }
    })
  }


  return (
    <div className="container">
      {birdData.map(data =>
        <Bird key={data.id}
          id={data.id}
          name={data.name}
          price={data.amount}
          image={data.img}
          handleAdoptBtn={handleAdoptBtn}
        />
      )}
      <Cart addOn={addOn} total={total} discount={discount} />
      <CheckOut />
    </div>
  );
};

export default App;
