import React from 'react';
import axios from 'axios';

export default function Form({setTodos, fetchTodos}) {

  const apiUrl = 'http://localhost:8080/api/tasks';
  const formHandling = (e) => {
    let itemToAdd = '';
    e.preventDefault();
    itemToAdd = e.target.firstChild.value
    if(itemToAdd !== ''){
      addTodo(itemToAdd);
      fetchTodos()
      e.target.firstChild.value = ''
    }
  }
  const addTodo = (todo) =>{
     axios.post(apiUrl, {task: todo})
  }
  return (
    <div className='Form_container'>
      <form onSubmit={formHandling}>
        <input type="text" placeholder='Write a task...' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
