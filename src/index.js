import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles.css';
import { render } from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise';

const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);
render(
  <Provider store={createStoreWithMW(rootReducer)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
