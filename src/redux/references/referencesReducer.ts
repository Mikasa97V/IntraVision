import { Reducer } from 'redux'

import { SET_PRIORITIES } from './priorities/prioritiesAction'
import { SET_STATUSES } from './statuses/statusesAction'

export type TPriorities = {
  priorities: any[]
  statuses: any[]
}

const initialState: TPriorities = {
  priorities: [],
  statuses: [],
}

export const referencesReducer: Reducer<TPriorities> = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRIORITIES:
      return {
        ...state,
        priorities: action.payload,
      }
    case SET_STATUSES:
      return {
        ...state,
        statuses: action.payload,
      }
    default:
      return state
  }
}
