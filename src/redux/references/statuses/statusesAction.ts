import instance from 'api/axios'
import { Action, ActionCreator } from 'redux'
import { RootState } from 'redux/rootReducer'
import { ThunkAction } from 'redux-thunk'

export const GET_STATUSES = 'GET_STATUSES'
export const SET_STATUSES = 'SET_STATUSES'

export type TGetStatuses = {
  type: typeof GET_STATUSES
}

export type TSetStatuses = {
  type: typeof SET_STATUSES
  payload: any[]
}

export const setStatuses: ActionCreator<TSetStatuses> = (payload) => ({
  payload,
  type: SET_STATUSES,
})

export const getStatuses = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: any) => {
  const token = localStorage.getItem('token')
  if (!token) return
  const res = await instance.get('/Statuses')
  dispatch(setStatuses(res.data))
}
