import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]); 
  const [todoInput, setTodoInput] = useState(''); 

  
  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]); 
      setTodoInput(''); 
    }
  };

  
  const handleRemoveTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

 
  const handleResetTodos = () => {
    setTodos([]); 
  };

  return (
    <div>
      <h2>Todo List</h2>

      {}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter todo..."
      />

      {}
      <button onClick={handleAddTodo}>Add Todo</button>

      {}
      <button onClick={handleResetTodos}>Reset</button>

      {}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
