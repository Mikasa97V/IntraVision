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

const StyledTextarea = styled.textarea`
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

function NewModal() {
  return (
    <StyledLayout>
      <StyledForm>
        <StyledFieldsWrap>
          <StyledField>
            <span>Название</span>
            <StyledTextarea name="name" id="name" className="name" />
          </StyledField>
          <StyledField>
            <span>Описание</span>
            <StyledTextarea name="name" id="name" className="description" />
          </StyledField>
        </StyledFieldsWrap>
        <PrimaryButton text="Сохранить" />
      </StyledForm>
    </StyledLayout>
  )
}

export default NewModal
