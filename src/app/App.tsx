import React from 'react';
import styled from 'styled-components';
import GlobalStyles from "./styled";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "../features/navigation/ui/Navigation";
import OrdersPage from "../pages/orders/OrdersPage";
import SettingsPage from "../pages/settings/SettingsPage";

const Header = styled.header`
  width: 100%;
  height: 65px;
  padding: 15px 20px 10px;

  background-color: #D1E0ED;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
`

const Sider = styled.aside`
  width: 95px;
  height: 100%;
  
  background-color: #002137;
`

const Content = styled.main`

`

const Layout = styled.section<{ flexDirection: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection};

  background-color: #fff;
`

const InputElement = styled.input`
  width: 100%;
  max-width: 680px;
  height: 100%;
  padding: 5px 13px;

  background: #FFFFFF;
  border: 1px solid #42AAFF;
  border-radius: 20px;
  box-shadow: 0 0 7px rgba(0, 140, 240, 0.15), inset -1px 0px 7px rgba(0, 0, 0, 0.11);
  
  &:focus-visible {
    outline: none;
    border: none;
  }
`


function App() {
  return (
    <BrowserRouter>
      <Layout flexDirection="row">
        <Sider>
          <Navigation/>
        </Sider>
        <Layout flexDirection="column">
          <Header>
            <InputElement type="text" />
          </Header>
          <Content>
            <Routes>
              {/*<Route path="/knowledgeBase" element={}/>*/}
              <Route path="/orders" element={<OrdersPage/>}/>
              {/*<Route path="/workers" element={}/>*/}
              {/*<Route path="/customers" element={}/>*/}
              {/*<Route path="/assets" element={}/>*/}
              <Route path="/settings" element={<SettingsPage/>}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
