import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import './index.css';
import App from './components/App';
import rootReducre from './reducers';

// function logger (obj,next,action)
// logger(obj)(next)(action)


// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       console.log('ACTION_TYPE =', action.type);
//       next(action);
//     }
//   }
// }        OR

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // logger code
  console.log('ACTION_TYPE =', action.type);
  next(action);
}

const store = createStore(rootReducre,applyMiddleware(logger));
console.log('store', store);
// console.log(' Before state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });

// console.log(' After state', store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      store={store}
    />
  </React.StrictMode>
);
