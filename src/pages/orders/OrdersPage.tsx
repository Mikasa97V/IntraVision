import { Table } from 'shared/ui'
import Button from 'shared/ui/kit/button/Button'
import styled from 'styled-components'

const StyledLayout = styled.section``
const StyledPrimaryButtonWrap = styled.div`
  padding-top: 25px;
  padding-left: 262px;
`
// const getOrderList = async () => {
//   // const tenantguid = await getTenantgId()
//   const tenantguid = localStorage.getItem('tenantguid')
//   const url = `http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=${tenantguid}`
//   const dataRequest = await fetch(url)
//   const data = await dataRequest.json()
//   console.log(data.value)
//   return data.value
// }

function OrdersPage() {
  // getOrderList()
  return (
    <StyledLayout>
      <StyledPrimaryButtonWrap>
        <Button text="Создать заявку" />
      </StyledPrimaryButtonWrap>
      <Table />
    </StyledLayout>
  )
}

export default OrdersPage
