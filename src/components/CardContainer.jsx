import styled from "styled-components"
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
const Container = styled.div`
margin-top: 7px;
padding: 8px 20px;
`

const Card = styled.div`
padding: 15px;
border-radius: 10px;
background: #12c4ec;
background: ${props => props.type === "notes" ? "#12c4ec" : "#c82eff"};
margin-bottom: 10px;
display: flex;
justify-content: space-between;
`

const ContentCard = styled.div`
`
const ActionButton = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

const Title = styled.div`
font-size: 1rem;
font-weight: 700;
color: #fff;
width: 100%;
`

const Time = styled.div`
display: flex;
align-items: center;
justify-content: start;
`

const TimeLogo = styled.div`
margin-right: 5px;
`
const TimeContent = styled.div`
color: #fff;
font-size: 0.75rem;
font-weight: 700;
`

const Description = styled.div`
color: #fff;
width: 100%;
font-size: 0.75rem;
`

const Button = styled.button`
border: none;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
font-size: 0.5rem;
margin-bottom: 5px;
cursor: pointer;
background: ${props => props.action === "action" ? "#178efc" : "#ff2e60"};
color: #fff;
`

const CardContainer = (props) => {
  return (
    <Container>
      <Card type={props.type}>
        <ContentCard>
          <Title>Ini Judul</Title>
          <Time>
            <TimeLogo>📆</TimeLogo>
            <TimeContent>12:00</TimeContent>
          </Time>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque omnis minus, possimus quas quidem commodi!
          </Description>
        </ContentCard>
        <ActionButton>
          {props.type === "notes" ? (
            <Button action="action"><ArchiveIcon /></Button>
          ) : (
            <Button action="action"><StickyNote2Icon /></Button>
          )}
          <Button action="delete"><DeleteIcon /></Button>
        </ActionButton>
      </Card>
    </Container>
  )
}

export default CardContainer