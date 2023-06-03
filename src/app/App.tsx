// import { useEffect, useState } from 'react'
import AssetsPage from 'pages/assets/AssetsPage'
import BasePage from 'pages/base/Base'
import CustomerPage from 'pages/customers/CustomerPages'
import WorkersPage from 'pages/workers/WorkersPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from 'shared/ui'
import Sidebar from 'shared/ui/sidebar/SideBar'
import styled from 'styled-components'

import OrdersPage from '../pages/orders/OrdersPage'
import SettingsPage from '../pages/settings/SettingsPage'
import GlobalStyles from './styled'

const Content = styled.main``

const Layout = styled.section<{ flexDirection: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};

  background-color: #fff;
`

// const getTenantgId = async () => {
//   const tenantguid = 'http://intravision-task.test01.intravision.ru/api/Tenants'
//   const res = await fetch(tenantguid)
//   localStorage.setItem('tenantguid', await res.json())

//   // return await res.json()
// }

function App() {
  // useEffect(() => {
  //   getTenantgId()
  // }, [])
  return (
    <BrowserRouter>
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
            </Routes>
          </Content>
        </Layout>
      </Layout>
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
