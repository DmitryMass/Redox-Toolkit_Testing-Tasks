import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './Components/App';
import store from './Store/store';

import './styles/reset.css';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
