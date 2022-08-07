import React from 'react';
import { nanoid } from 'nanoid';

import { useSelector } from 'react-redux';
import TodoItem from './todo-item/todo-item';

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todos);
  return (
    <div>
      {todoList.map((todo) => {
        return <TodoItem key={nanoid()} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
