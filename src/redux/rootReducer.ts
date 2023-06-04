import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { tokenReducer, TToken } from './authorization/tokenReducer'
import { ordersReducer, TOrders } from './orders/ordersReducer'
import { referencesReducer } from './references/referencesReducer'

export type RootState = ReturnType<typeof store.getState>

export type TPriorities = {
  rgb: string
  id: number
  name: string
}

export type TReferences = {
  priorities: any[]
  statuses: any[]
}

export type TRootState = {
  authorization: TToken
  ordersList: TOrders
  references: TReferences
}

export const rootReducer = combineReducers({
  authorization: tokenReducer,
  ordersList: ordersReducer,
  references: referencesReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
