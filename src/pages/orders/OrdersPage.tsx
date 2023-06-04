import { Table } from 'shared/ui'
import Button from 'shared/ui/kit/button/Button'
import styled from 'styled-components'

const StyledLayout = styled.section``
const StyledPrimaryButtonWrap = styled.div`
  padding-top: 25px;
  padding-left: 262px;
`

const OrdersPage = () => (
  <StyledLayout>
    <StyledPrimaryButtonWrap>
      <Button text="Создать заявку" />
    </StyledPrimaryButtonWrap>
    <Table />
  </StyledLayout>
)

export default OrdersPage
