import styled from "styled-components"
import AddForm from "./AddForm"
import CardContainer from "./CardContainer"

const Container = styled.div`
padding: 10px 20px;
display: flex;
@media only screen and (max-width: 992px) {
  flex-direction: column;
}
`

const AddSection = styled.div`
flex: 1;
`
const NotesSection = styled.div`
flex: 1;
`
const ArchiveSection = styled.div`
flex: 1;
`

const Title = styled.div`
font-size: 1.5rem;
font-weight: 700;
color: #1c2e65;
`

const Content = () => {
  return (
    <Container>
      <AddSection>
        <Title>Add</Title>
        <AddForm />
      </AddSection>
      <NotesSection>
        <Title>Notes</Title>
        <CardContainer type="notes" />
      </NotesSection>
      <ArchiveSection>
        <Title>Archives</Title>
        <CardContainer type="archives" />
      </ArchiveSection>
    </Container>
  )
}

export default Content