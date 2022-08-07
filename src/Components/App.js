import React from 'react';

import Todo from './Todos/todos';
import User from './User/user';
import Posts from './Posts-thunk/posts';

import styles from './index.m.css';

const App = () => {
  return (
    <div className={styles.app}>
      <User />
      <Todo />
      <Posts />
    </div>
  );
};

export default App;
