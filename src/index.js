import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Rout from '@/router'
import '@/styles/index.less'

ReactDOM.render(
  <Provider store={store}>
    <Rout />
  </Provider>,
  document.getElementById('root')
)

