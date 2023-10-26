import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //remember our items is a property in the shoppinglist from our app.js
  //console.log({items})
  //useState to assign our selected Category variable is equal to the select option "All" and set a function to describe what happens if not

  const [selectCategory, setSelectCategory] = useState("All")
  //create a function that calls and returns the set function when the value of the select option changes
  function handleChange(event){
    //the setSelectCategory is a function takes in an event and resturns the event target value
    setSelectCategory(event.target.value)
  }
  //create a new array that has the filtered out items from our items array 
  const newItemsArray = items.filter(item =>{
    //use an if statement to check if the selected Category variable is equal to the select option "All"
    if(selectCategory === "All"){
      return true
    }
    //if its not true then return for an item.category that matches the selected category
    else{
      return item.category === selectCategory
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* this is where you call the handleChange function when the select dropdown is clicked */}
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      {/* this is where our list will be displayed */}
      <ul className="Items">
        {/* this is where we map our new items array */}
        {newItemsArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
