import React, { useState } from "react";

export const Todoform = ({ addTask}) => {
  const [addnew, setTodolist] = useState("");



  return (
    <form
    onSubmit ={(e) => {
        e.preventDefault();
                addTask(addnew);
        setTodolist("")
    }} >
      <label>Add New Task</label>
      <input
        name="addnew"
        type="text"
        value={addnew}
        onChange={(e) => setTodolist(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};