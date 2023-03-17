import './TodoList.css'
import { useState } from 'react';
function ToDoInput(prop)
{
    const [inputList , setInputList]=useState('');
   
    return(
        <>
        <div className="todoInput">
			<input type="text" name="" onChange={(e)=>{setInputList(e.target.value)}} value={inputList} placeholder="Enter task"/>

            <span onClick={()=>{
                if(inputList.length===0)
                {
                    return alert('task could not be empty  :(')
                }
                else{
                prop.List(inputList);
                setInputList('');}
            }}>
                
            <i className="bi bi-bookmark-plus-fill"></i>
            </span>

            
			
		</div>
		<h3>Your to-do list</h3>
		<hr/>
        </>
    );
}
export default ToDoInput;