import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
