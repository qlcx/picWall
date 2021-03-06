import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

/* 设置全局样式 */
import './styles/main.css'

import App from './layouts/App'
import PicLists from './views/PicLists'

import configureStore from './redux/configureStore'
const store = configureStore()

const router = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={PicLists} />
      </Route>
    </Router>
  </Provider>
)

export default router