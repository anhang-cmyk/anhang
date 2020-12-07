import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise' // 中间件
import thunk from 'redux-thunk' // 中间件
import reduces from '@/reducer'
import { persistReducer } from 'redux-persist' // 数据持久化
import storage from 'redux-persist/lib/storage' // localstorage
// import sessionStorage from 'redux-persist/lib/storage/session' // session
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// 我要对哪些 state 做数据持久化
const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['home'], // 白名单
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  persistReducer(rootPersistConfig, combineReducers(reduces)), 
  composeEnhancers(applyMiddleware(promise, thunk))
)

export default store







