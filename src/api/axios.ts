import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://intravision-task.test01.intravision.ru/api',
})

const blackList = ['/Tenants']

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token && config.url && !blackList.includes(config.url)) {
    config.baseURL = `${config.baseURL}/${token}`
  }
  return config
})

export default instance
