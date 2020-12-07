import { 
  SET_HOME_AGE,
  GET_HOME_DATA,
} from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

// 创建了一个 action
export function setAge () {
  return {
    type: SET_HOME_AGE,
    payload: 26,
  }
}

export function getData () {
  return {
    type: GET_HOME_DATA,
    payload: get(api.getuser),
  }
}

export function getThunk (opt) {
  console.log(opt, 1)
  return dispatch => dispatch({
    type: GET_HOME_DATA,
    payload: get(api.getuser),
  })
}




