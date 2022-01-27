import Header from './components/Header';
import Form from './components/Form';
import React, { useEffect, useState } from 'react';
import List from './components/List';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const apiUrl = 'http://localhost:8080/api/tasks';

  useEffect(() => {
    fetchTodos()
  },[])
  const fetchTodos = () => {
    axios.get(apiUrl).then(res => {
      setTodos(res.data)
    })
  }
  return (
    <div className="App">
      <Header />
      <Form setTodo={setTodos} fetchTodos={fetchTodos} />
      <List todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
