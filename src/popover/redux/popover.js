import omit from 'lodash/omit'
import { OPEN_POPOVER, CLOSE_POPOVER } from './popover.actions'

export const initState = { }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, { type, payload } = initAction) => {
  switch (type) {
    case OPEN_POPOVER: return { ...state, [payload]: true }
    case CLOSE_POPOVER: return omit(state, [payload])
    default: return state
  }
}
