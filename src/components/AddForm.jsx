import styled from "styled-components"

const FormWrapper = styled.div`
margin: 15px;
border: 1px solid #12c4ec;
padding: 15px;
border-radius: 15px;
background: #d0f3fb;
`
const Form = styled.form``
const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`
const Label = styled.label``
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
`

const AddForm = () => {
  return (
    <FormWrapper>
      <Form>
        <Wrapper>
          <Label htmlFor="title">
            Title
          </Label>
          <Input id="title" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="desc">
            Description
          </Label>
          <TextArea name="" id="desc" cols="30" rows="5" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="archive">
            Archive
          </Label>
          <Select id="archive">
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
        </Wrapper>
        <Wrapper>
          <Button>Submit</Button>
        </Wrapper>
      </Form>
    </FormWrapper>
  )
}

export default AddForm