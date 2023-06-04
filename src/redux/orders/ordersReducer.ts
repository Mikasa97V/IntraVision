import { Reducer } from 'redux'

import { SET_ORDERS } from './ordersAction'

export type TOrderData = {
  id: number
  name: string
  statusName: string
  statusRgb: string
  executorName: string
  priorityName: string
}

export type TOrders = {
  orders: TOrderData[]
}

const initialState: TOrders = {
  orders: [],
}

export const ordersReducer: Reducer<TOrders> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      }
    default:
      return state
  }
}
