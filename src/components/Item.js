import React, { useState } from "react";

function Item({ name, category }) {
  const [insidecart , setInsideCart] = useState(true)
  const checkTheCart = insidecart ? "" : "in-cart"
  const checkAdd = insidecart ? "add" : "remove"
  function changeButton(){
    setInsideCart(insidecart => !insidecart)
  }
  return (
    <li className={checkTheCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={checkAdd} onClick={changeButton}>{insidecart ? "Add To Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
