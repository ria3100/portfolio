import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { StoreContext } from 'redux-react-hook';

import { createBrowserHistory } from 'history'
import { Router } from 'react-router'

import store from './modules'
// const store = configureStore()

// import registerServiceWorker from './registerServiceWorker'

import Top from './pages/topPage'

import './assets/scss/style.css'
import 'bulma/css/bulma.min.css'

// const store = makeStore()
const history = createBrowserHistory()

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <Top />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
)
// registerServiceWorker()

