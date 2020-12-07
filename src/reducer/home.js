import { 
  SET_HOME_AGE,
  GET_HOME_DATA,
} from '@/constants/actionTypes'

const defaultState = {
  age: 25,
  name: '小花',
  data: [],
}

export default function home (state = defaultState, action) {
  switch (action.type) {
    case SET_HOME_AGE:
      return { ...state, age: action.payload }

    case GET_HOME_DATA:
      return { ...state, data: action.payload }
    
    default:
      return state
  }
}