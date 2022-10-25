import React, { useState } from 'react';
import './App.css';
import data from './data.json'
import {Header} from './components/Header'
import {Todolist} from './components/Todolist'
import { Todoform } from './components/Todoform';
import { Todo } from './components/Todo';

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  
  const addTask= (userInput) => {
    setToDoList((copy) =>[...copy, { id: copy.length + 1, task: userInput, complete: false }]);
    
  }

  return (
    <div className="App">
     <Header />
     <Todoform addTask={addTask} />
     <Todolist toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    
   </div>
  );
}

export default App;
