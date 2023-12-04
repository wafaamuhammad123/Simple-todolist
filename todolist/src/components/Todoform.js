
import React, { useState } from 'react';
import shortid from 'shortid';
import './style.css';
const Todoform = (props) => {//to get the fn addtodo
    const [text,setText] = useState("")//text=>to handle change in the input
    // store text in a state and then show it in dom

    const handleChange = (e)=>{
        setText(//to change state val by using e.target.val.. get the input and store ot in state as a txt
            e.target.value
        )
     } 
     const handleSubmit = (e)=>{
        e.preventDefault();
        
        props.onSubmit({//inside it the tood obj
            id : shortid.generate(),// create unique id 
            text : text,//text im entering it
            complete : false
        });
       setText("")//to clean the input field after adding the task

     }
  return (
    <form onSubmit={handleSubmit}>
    <input className='input-field' type="text" onChange={handleChange} value={text}/>
    <button className='add' onClick={handleSubmit}>Add new</button>
</form>
  )
}

export default Todoform;
