import { SetStateAction, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createOrder, TNewOrderDTO } from 'redux/orders/ordersAction'
import PrimaryButton from 'shared/ui/kit/button/PrimaryButton'
import styled from 'styled-components'

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 55px 37px;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 73px;
`

const StyledFieldsWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  color: #9f9ea7;
`

const StyledInput = styled.textarea`
  width: 100%;
  max-width: 625px;
  padding: 10px;

  resize: none;
  background: #f9f9fa;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &.name {
    height: 85px;
  }

  &.description {
    height: 134px;
  }

  &:focus {
    outline: none;
    border: 1px solid #42aaff;
    box-shadow: 0 0 7px rgba(0, 140, 240, 0.15), inset -1px 0px 7px rgba(0, 0, 0, 0.11);
    transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
`

interface IProps {
  createOrder: (payload: TNewOrderDTO) => void
}

function NewModal({ createOrder }: IProps) {
  const [nameValue, setNameValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')

  const onChange = (e: { target: { id: string; value: SetStateAction<string> } }) => {
    if (e.target.id == 'name') setNameValue(e.target.value)
    if (e.target.id == 'description') setDescriptionValue(e.target.value)
  }
  const onClick = () => {
    if (nameValue.trim().length >= 3 && descriptionValue.trim().length >= 10) {
      createOrder({ description: descriptionValue, name: nameValue })
    }
  }

  return (
    <StyledLayout>
      <StyledForm>
        <StyledFieldsWrap>
          <StyledField>
            <span>Название</span>
            <StyledInput name="name" id="name" className="name" onChange={onChange} value={nameValue} />
          </StyledField>
          <StyledField>
            <span>Описание</span>
            <StyledInput
              name="description"
              id="description"
              className="description"
              onChange={onChange}
              value={descriptionValue}
            />
          </StyledField>
        </StyledFieldsWrap>
        <PrimaryButton text="Сохранить" onClick={onClick} />
      </StyledForm>
    </StyledLayout>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  createOrder: bindActionCreators(createOrder, dispatch),
})

export default connect(null, mapDispatchToProps)(NewModal)
