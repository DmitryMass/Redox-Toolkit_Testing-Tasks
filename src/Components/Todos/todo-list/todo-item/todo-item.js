import React from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo, toggleCompleted } from '../../../../Store/Slice/todoSlice';

const TodoItem = ({ todo: { text, completed, id } }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleCompleted(id))}>Complete</button>
      <span className={completed ? 'done' : ''}>{text}</span>
      <button
        onClick={() => {
          dispatch(removeTodo(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
