import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//  Все лучше делать в отдельном файле (Тестовый вариант, для проверки работоспособности)
const URL = 'https://jsonplaceholder.typicode.com';
const request = async (url, method = 'GET', body = null) => {
  const res = await fetch(`${URL}${url}`, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (res.ok) {
    return res.json();
  }
  throw new Error('Sorry / Api error');
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await request('/posts');
      return dispatch(setPosts(res));
    } catch (e) {
      throw new Error('sorry api error');
    }
  }
  // 1 аргумент - пейлоад, 2 - опшины (у функции асинк)
);

export const removedPostById = createAsyncThunk(
  'posts/removedPostById',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await request(`/posts/${id}`, 'DELETE');
      return dispatch(deletePost(id));
    } catch (e) {
      throw new Error('Problem with deleting post');
    }
  }
);

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post.id !== payload);
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: () => console.log(' get full'),
    [getPosts.pending]: () => console.log(' get [pen]'),
    [getPosts.rejected]: () => console.log(' get rej'),
    [removedPostById.fulfilled]: () => console.log(' del full'),
    [removedPostById.pending]: () => console.log(' del [pen]'),
    [removedPostById.rejected]: () => console.log(' del rej'),
    // Лоадер, ошибки и тд, можно сделать вывод
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
