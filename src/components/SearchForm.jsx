import { useDispatch } from "react-redux"
import styled from "styled-components"
import { setKeyword } from "../redux/noteSlice"

const FormInput = styled.form`
width: 100%;
display: flex;
align-items: center;
`

const Input = styled.input`
width: 100%;
border: 1px solid transparent;
&:focus {
  outline: none;
}
`

const Button = styled.button`
border: none;
background: white;
cursor: pointer;
`

const SearchForm = () => {
  const dispatch = useDispatch();
  return (
    <FormInput>
      <Input type="text" placeholder="Search ..." onChange={(e) => {
        e.preventDefault();
        dispatch(setKeyword(e.target.value));
      }} />
      <Button type="submit">
        🔎
      </Button>
    </FormInput>
  )
}

export default SearchForm