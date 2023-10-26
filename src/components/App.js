import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [color, setColor] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function changeColor(){
    setColor(color => !color)
  }
  const appClass = false ? "App dark" : "App light"
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeColor}>{color ? "App dark" : "App light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
