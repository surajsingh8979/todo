import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import "./App.css";


const ListCom=(props) =>{


    const[line, setLine]= useState(false);


    const cutlt = () =>{

        setLine(true);
    };

    return(
        <div className="todo_style">
          <span onclick={cutlt}>
          <DeleteIcon className="deleteIcon"/>
              </span>  
              <li style={{textDecoration:line ? "line-through": "none"}}>
              {props.text}
              </li>
        </div>

    );

};

export default ListCom;
