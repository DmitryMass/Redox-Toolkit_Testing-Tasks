import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Store/Slice/todoSlice';
import { nanoid } from 'nanoid';
import TodoList from './todo-list';

const Todo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const addTodoHandler = (e) => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: inputValue,
      completed: false,
    };
    dispatch(addTodo(todo));
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          placeholder="Type todo"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <TodoList />
    </div>
  );
};

export default Todo;
