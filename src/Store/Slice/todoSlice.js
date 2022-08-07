import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
    toggleCompleted: (state, { payload }) => {
      const toggleTodo = state.todos.find((todo) => todo.id === payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
