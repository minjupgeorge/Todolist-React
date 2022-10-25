import React from 'react';

export const Todo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} 
        className={todo.complete ? "todo checked" : "todo"}>
            {todo.task} 
        </div>
    );
};
