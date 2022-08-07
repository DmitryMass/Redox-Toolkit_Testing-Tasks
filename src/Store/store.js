import { configureStore } from '@reduxjs/toolkit';
import postSlice from './Slice/postSlice';
import todoSlice from './Slice/todoSlice';
import userSlice from './Slice/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    todos: todoSlice,
    posts: postSlice,
  },
});

export default store;
