import instance from 'api/axios'
import axios from 'axios'
import { Action, ActionCreator } from 'redux'
import { RootState } from 'redux/rootReducer'
import { ThunkAction } from 'redux-thunk'

export const GET_ORDERS = 'GET_ORDERS'
export const ADD_NEW_ORDER = 'ADD_NEW_ORDER'
export const GET_ORDER = 'GET_ORDER'
export const SET_ORDERS = 'SET_ORDERS'
export const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER'

export type TNewOrderDTO = {
  name: string
  description: string
}

export type TGetOrders = {
  type: typeof GET_ORDERS
}

export type TGetOrder = {
  type: typeof GET_ORDER
}

export type TSetCurrentOrder = {
  type: typeof SET_CURRENT_ORDER
  payload: any
}

export type TSetOrders = {
  type: typeof SET_ORDERS
  payload: any[]
}

export type TAddNewOrder = {
  type: typeof ADD_NEW_ORDER
  payload: any
}

export const addNewOrder: ActionCreator<TAddNewOrder> = (payload: TNewOrderDTO) => ({
  payload,
  type: ADD_NEW_ORDER,
})

export const setCurrentOrder: ActionCreator<TSetCurrentOrder> = (payload) => ({
  payload,
  type: SET_CURRENT_ORDER,
})

export const createOrder =
  (payload: TNewOrderDTO): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (display) => {
    const res = await instance.post(`/Tasks`, payload)
    display(getOrder(res.data))
  }

export const getOrder =
  (id: number): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    const res = await instance.get(`/Tasks/${id}`)
    console.log('task', res.data)
    dispatch(setCurrentOrder(res.data))
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
