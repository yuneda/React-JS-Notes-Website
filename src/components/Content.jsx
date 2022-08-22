import styled from "styled-components"
import AddForm from "./AddForm"
import CardContainer from "./CardContainer"
import { useSelector } from "react-redux"

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
  const data = useSelector((state) => state.note);
  return (
    <Container>
      <AddSection>
        <Title>Add</Title>
        <AddForm />
      </AddSection>
      <NotesSection>
        <Title>Notes</Title>
        <CardContainer type="notes" data={data.data} archived={false} />
      </NotesSection>
      <ArchiveSection>
        <Title>Archives</Title>
        <CardContainer type="archives" data={data.data} archived={true} />
      </ArchiveSection>
    </Container>
  )
}

export default Content