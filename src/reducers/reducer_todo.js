import {MOVE_TO} from '../actions/consts.js'

export default function (state={}, action) {
  switch (action.type) {
    case MOVE_TO:
      return {...state, toIndex: action.toIndex, task: action.payload}
    default:
      return state
  }
}
