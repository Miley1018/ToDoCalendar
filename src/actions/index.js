import {MOVE_TO} from './consts.js'

export function moveTo(toIndex, task) {
  return {
    type: MOVE_TO,
    payload: task,
    toIndex: toIndex
  }
}
