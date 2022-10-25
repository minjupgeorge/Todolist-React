import React from 'react';
import { Todo } from './Todo';
 
 
export const Todolist = ({toDoList,handleToggle,handleFilter}) => {
    console.log("toDoList",toDoList)
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
               )
           })}
           <button style={{margin: '20px'}} onClick={handleFilter}>Delete Completed Task</button>
       </div>
   );
};
 
