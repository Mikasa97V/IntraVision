import Logo from 'assets/logo.png'
import Navigation from 'features/navigation/ui/Navigation'
import styled from 'styled-components'

const Sider = styled.aside`
  width: 95px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
  padding-top: 16px;

  background-color: #002137;
`

const Sidebar = () => (
  <Sider>
    <img src={Logo} alt="logo" width="52px" height="44px" />
    <Navigation />
  </Sider>
)

export default Sidebar
