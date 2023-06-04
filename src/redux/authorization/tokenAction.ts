import instance from 'api/axios'
import { ActionCreator } from 'redux'

export const SET_TOKEN = 'SET_TOKEN'

export type TSetTenantId = {
  type: typeof SET_TOKEN
  token: string
}

export const setToken: ActionCreator<TSetTenantId> = (token) => ({
  token,
  type: SET_TOKEN,
})

export const getAuthToken = async () => await instance.get('/Tenants')

export const setAuthToken: any = () => async (dispatch: any) => {
  const res = await getAuthToken()
  const token = res.data
  localStorage.setItem('token', token)
  dispatch(setToken(token))
}
