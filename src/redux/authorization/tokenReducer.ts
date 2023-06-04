import { Reducer } from 'redux'

import { SET_TOKEN } from './tokenAction'

export type TToken = {
  token: string
}

const initialState: TToken = {
  token: '',
}

export const tokenReducer: Reducer<TToken> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    default:
      return state
  }
}
