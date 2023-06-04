import axios from 'axios'
import { Action, ActionCreator } from 'redux'
import { RootState } from 'redux/rootReducer'
import { ThunkAction } from 'redux-thunk'

export const GET_ORDERS = 'GET_ORDERS'
export const SET_ORDERS = 'SET_ORDERS'

export type TGetOrders = {
  type: typeof GET_ORDERS
}

export type TSetOrders = {
  type: typeof SET_ORDERS
  payload: any[]
}

export const setOrders: ActionCreator<TSetOrders> = (payload) => ({
  payload,
  type: SET_ORDERS,
})

export const getOrders = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: any) => {
  const token = localStorage.getItem('token')
  if (!token) return
  const res = await axios.get(`http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=${token}`)
  dispatch(setOrders(res.data.value))
}
