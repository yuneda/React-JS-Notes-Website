import React from "react"
import styled from "styled-components"
import { add } from "../redux/noteSlice"
import { useDispatch } from "react-redux/es/exports"

const FormWrapper = styled.div`
margin: 15px;
border: 1px solid #12c4ec;
padding: 15px;
padding-bottom: 0;
border-radius: 15px;
background: #d0f3fb;
`
const Form = styled.form``
const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
`
const Label = styled.label`
font-weight: 500;
`
const Input = styled.input`
padding: 10px;
border: 1px solid #ccc;
outline: 1px solid #ccc;
border-radius: 8px;
&:focus {
  border: 1px solid #12c4ec;
  outline: 1px solid #12c4ec;
}
`

const Count = styled.div`
color: ${props => props.condition};
font-size: 1rem;
font-weight: 700;
`

const TextArea = styled.textarea`
padding: 10px;
border: 1px solid #ccc;
outline: 1px solid #ccc;
border-radius: 8px;
&:focus {
  border: 1px solid #12c4ec;
  outline: 1px solid #12c4ec;
}
`
const Select = styled.select`
border: 1px solid #ccc;
outline: 1px solid #ccc;
&:focus {
  border: 1px solid #12c4ec;
  outline: 1px solid #12c4ec;
}
`
const Option = styled.option``
const Button = styled.button`
width: 100%;
border: none;
cursor: pointer;
color : #fff;
background: #178efc;
padding: 10px;
border-radius: 10px;
font-size: 1rem;
font-weight: 600;
transition: all 0.3s ease-in-out;
&:hover {
  background: #fff;
  color: #178efc;
  border: 1px solid #178efc;
}
`

const AddForm = () => {
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [isArchived, setIsArchived] = React.useState(false);
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now() + Math.random(),
      title: title,
      body: desc,
      createdAt: date,
      archived: isArchived === "true" ? true : false,
    }
    dispatch(add(data));
  }
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <Label htmlFor="title">
            Title
          </Label>
          <Input id="title" onChange={(e) => {
            e.preventDefault();
            setTitle(e.target.value);
          }} />
          <Count condition={50 - title.length <= 5 ? "red" : "#178EFC"}>
            {50 - title.length} characters remaining
          </Count>
        </Wrapper>
        <Wrapper>
          <Label htmlFor="date">
            Dates
          </Label>
          <Input id="date" type="datetime-local" onChange={(e) => {
            e.preventDefault();
            setDate(e.target.value);
          }} />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="desc">
            Description
          </Label>
          <TextArea name="" id="desc" cols="30" rows="5" onChange={(e) => {
            e.preventDefault();
            setDesc(e.target.value);
          }} />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="archive">
            Archive
          </Label>
          <Select id="archive" defaultValue={false} onChange={(e) => {
            e.preventDefault();
            setIsArchived(e.target.value);
          }}>
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
        </Wrapper>
        <Wrapper>
          <Button type="submit">Submit</Button>
        </Wrapper>
      </Form>
    </FormWrapper>
  )
}

export default AddForm