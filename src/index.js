import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
import App from './components/App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'


const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


