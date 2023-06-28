// import React, { useState, useEffect } from 'react';
// import './App.css';

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     const storedTodos = localStorage.getItem('todos');
//     if (storedTodos) {
//       setTodos(JSON.parse(storedTodos));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       const newTodo = {
//         id: new Date().getTime(),
//         text: inputValue,
//         completed: false,
//       };
//       setTodos([...todos, newTodo]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const handleToggleTodo = (id) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Enter a task"
//       />
//       <button onClick={handleAddTodo}>Add</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span
//               style={{
//                 textDecoration: todo.completed ? 'line-through' : 'none',
//               }}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => handleToggleTodo(todo.id)}>
//               {todo.completed ? 'Undo' : 'Complete'}
//             </button>
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;


import React, { useState, useEffect } from 'react';
import {FaEdit, FaTrash } from 'react-icons/fa'
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span
                className="todo-text"
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleToggleTodo(todo.id)}>
                {todo.completed ? 'Undo' : <FaEdit />}
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}><FaTrash /></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;


