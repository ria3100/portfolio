import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { StoreContext } from 'redux-react-hook';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './routes'

import store from './modules'
// import Top from './pages/home'

import './assets/scss/style.css'
import 'bulma/css/bulma.min.css'

// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
)
// registerServiceWorker()

