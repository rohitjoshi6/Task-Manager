import React from 'react'
import { useState } from 'react/cjs/react.development'

const App = () => {

  const [inputList, setInputList]=useState("trial1");
  const [Items, setItems]=useState([]);
  
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList]
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> Task Manager</h1>
          <br />
          <input type="text" placeholder="Add items" onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}

            {Items.map((itemvalue)=>{
              return  <li>{itemvalue}</li> 
            })}
          </ol>

        </div>
      </div>      

    </>
  )
}

export default App

