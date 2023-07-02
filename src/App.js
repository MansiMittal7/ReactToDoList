
import React, { useState } from 'react';
import './App.css';
import Data from './Data';

export default function App() {

  const [input, setinput] = useState("");
  const [Items, setItems] = useState([]);

  const addItem = (e) => {
    // jo apan typ kar rhe hai usko searchbar me dikhana
  setinput(e.target.value);   

  };

  const listOfItem = () => {
  //added items ko array k from me store karna
  setItems((oldItem) =>{
    return [...oldItem,input];
  });
  //after addition of input to list clrear the search space
   setinput("");
  };
  const deleteItem = (id) =>{
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
         return index!==id
      })
    })
  };

  return (
    <>
  <div className="main_div">
    <div className="center_div">
     <br />
     <h1>TO-DO LIST</h1>
     <br />
     <input type="text" placeholder="Add an Item" 
     value={input}  //
     onChange={addItem}/>
     <button onClick={listOfItem}> + </button>
     <ol>
      {/* <li>{addItem}</li> */}
      {
      Items.map( (itemval, index) =>{
       return <Data //inside data component
       key={index}  //properties
       id={index}
       text={itemval}
       onSelect = {deleteItem}
       />;
      })
      }

     </ol>
     </div>
  </div>
  </>
  )
}


