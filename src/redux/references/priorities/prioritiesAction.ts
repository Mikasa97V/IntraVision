import instance from 'api/axios'
import { Action, ActionCreator } from 'redux'
import { RootState } from 'redux/rootReducer'
import { ThunkAction } from 'redux-thunk'

export const GET_PRIORITIES = 'GET_PRIORITIES'
export const SET_PRIORITIES = 'SET_PRIORITIES'

export type TGetPriorities = {
  type: typeof GET_PRIORITIES
}

export type TSetPriorities = {
  type: typeof SET_PRIORITIES
  payload: any[]
}

export const setPriorities: ActionCreator<TSetPriorities> = (payload) => ({
  payload,
  type: SET_PRIORITIES,
})

export const getPriorities = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: any) => {
  const token = localStorage.getItem('token')
  if (!token) return
  const res = await instance.get('/Priorities')
  dispatch(setPriorities(res.data))
}
