import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOrders } from 'redux/orders/ordersAction'
import { TOrderData } from 'redux/orders/ordersReducer'
import { TRootState } from 'redux/rootReducer'
import { Loading } from 'shared/ui/kit'
import styled from 'styled-components'

import { TableRow } from './lib'

const StyledTableBody = styled.div`
  position: relative;
  padding-left: 3px;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 186px);

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #dae0e7;
    padding: 3px 0;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    padding: 3px 0;
    background: #002137;
    border-radius: 8px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: calc(100% - 3px);
    height: 1px;
    background: #dae0e7;
  }
`

const StyledLoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
`

interface IProps {
  ordersList: TOrderData[]
  token: string
  priority: any[]
  getOrders: () => void
}

function TableBody({ getOrders, ordersList, priority, token }: IProps) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (token) {
      getOrders()
      setIsLoading(false)
    }
  }, [token, isLoading, getOrders])

  return (
    <>
      {!isLoading ? (
        <StyledTableBody>
          {ordersList && ordersList.map((it) => <TableRow key={it.id} data={it} priority={priority} />)}
        </StyledTableBody>
      ) : (
        <StyledLoadingWrap>
          <Loading />
        </StyledLoadingWrap>
      )}
    </>
  )
}

const mapStateToProps = (state: TRootState) => ({
  ordersList: state.ordersList.orders,
  priority: state.references.priorities,
  token: state.authorization.token,
})

const mapDispatchToProps = (dispatch: any) => ({
  getOrders: bindActionCreators(getOrders, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(TableBody)
