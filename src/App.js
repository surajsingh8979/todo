import React, { useState } from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from "./ListCom";

const App=() =>{
  
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);
  const itemEvent = (event) =>{
    setItem(event.target.value);

  }
  const listOfItem=() =>{
    setNewItem((preval)=>{
      return [...preval, item]

    });
    setItem(" ");

  };
  return (
   <>
   <div className="main_div">
    <div className="center_div">
      <br/>
      <h1> ToDo List</h1>
      <br/>
      <input type="text" value={item} placeholder="Add an item" onChange={itemEvent}/>
      <Button className="newBtn" onClick={listOfItem}> <AddIcon/></Button>
      <br/>
      <ol>
        { newitem.map((val) =>{
          return <ListCom text={val} />;
        })}
      </ol>

    
      
   </div>
   </div>

   </>
  );
}

export default App;
