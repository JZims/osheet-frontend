import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
import App from './components/App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithHistory from './components/auth-provider-with-history.js'


const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  //Redux Store
  <Provider store = { store }>
    {/* React Router */}
    <BrowserRouter>
      <React.StrictMode>
        {/* Auth0 Provider */}
        <Auth0ProviderWithHistory>
        <App />
        </Auth0ProviderWithHistory>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


