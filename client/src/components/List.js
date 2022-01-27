import axios from 'axios';
import React from 'react';

export default function List({ todos, fetchTodos }) {
    const apiUrl = 'http://localhost:8080/api/tasks';
    const displayList = () => {
        return (
            <div>
                {todos.map(item => {
                    const status = item.completed ? 'completed' : 'waiting';
                    return (
                        <div className='task_item' key={item._id} onClick={()=> changeStatusTodo(item)}>
                            <li className={`${status}`}>{item.task}<button><i className="bi bi-trash" onClick={()=> removeTodo(item)}></i></button></li>
                        </div>
                    )
                })}
            </div>
        )
    }
    const changeStatusTodo = (item) => {
        axios.put(apiUrl+'/'+item._id, {completed: !item.completed}).then(res => fetchTodos())
    }
    const removeTodo = (item) => {
         axios.delete(apiUrl+'/'+item._id).then(res => fetchTodos())
    }

    return (
        <div className='list_container'>
            <ul>
                {displayList()}
            </ul>
        </div>
    )
}
