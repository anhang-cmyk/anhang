// 每一个 pages 业务组件 -> reduce
const defaultState = {
  age: 25,
  name: '小花',
}

export default function login (state = defaultState, action) {
  switch (action.type) {
    case 'SET_HOME_AGE':
      return { ...state, age: action.payload }
    
    default:
      return state
  }
}