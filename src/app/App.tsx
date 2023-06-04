import AssetsPage from 'pages/assets/AssetsPage'
import BasePage from 'pages/base/Base'
import CustomerPage from 'pages/customers/CustomerPages'
import NotFoundPage from 'pages/notFoundPage/NotFoundPage'
import WorkersPage from 'pages/workers/WorkersPage'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { setAuthToken } from 'redux/authorization/tokenAction'
import { getPriorities } from 'redux/references/priorities/prioritiesAction'
import { getStatuses } from 'redux/references/statuses/statusesAction'
import { TRootState } from 'redux/rootReducer'
import { Header } from 'shared/ui'
import Sidebar from 'shared/ui/sidebar/SideBar'
import styled from 'styled-components'

import OrdersPage from '../pages/orders/OrdersPage'
import SettingsPage from '../pages/settings/SettingsPage'

const Content = styled.main``

const Layout = styled.section<{ flexDirection: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};

  background-color: #fff;
`

interface IProps {
  token: string
  setAuthToken: () => void
  getPriorities: () => void
  getStatuses: () => void
}

const App = ({ getPriorities, getStatuses, setAuthToken, token }: IProps) => {
  useEffect(() => {
    setAuthToken()
  }, [])

  useEffect(() => {
    if (token) {
      getPriorities()
      getStatuses()
    }
  }, [token])

  return (
    <Layout flexDirection="row">
      <Sidebar />
      <Layout flexDirection="column">
        <Header />
        <Content>
          <Routes>
            <Route path="/knowledge-base" element={<BasePage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/workers" element={<WorkersPage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/" element={<Navigate to="/orders" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state: TRootState) => ({
  token: state.authorization.token,
})

const mapDispatchToProps = (dispatch: any) => ({
  getPriorities: bindActionCreators(getPriorities, dispatch),
  getStatuses: bindActionCreators(getStatuses, dispatch),
  setAuthToken: bindActionCreators(setAuthToken, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
