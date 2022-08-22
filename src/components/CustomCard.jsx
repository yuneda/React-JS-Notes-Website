import styled from "styled-components"
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { showFormattedDate } from "../helper";
import { useDispatch } from "react-redux/es/exports"
import { deleteNote, updateNote } from "../redux/noteSlice"

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
padding-right: 10px;
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

const CustomCard = ({ item, type }) => {
  const dispatch = useDispatch();
  return (
    <Card type={type} key={item.id}>
      <ContentCard>
        <Title>{item.title}</Title>
        <Time>
          <TimeLogo>📆</TimeLogo>
          <TimeContent>{showFormattedDate(item.createdAt)}</TimeContent>
        </Time>
        <Description>
          {item.body}
        </Description>
      </ContentCard>
      <ActionButton>
        <Button action="action" onClick={(e) => {
          e.preventDefault();
          const data = {
            id: item.id,
            archived: item.archived
          }
          dispatch(updateNote(data));
        }}>{type === "notes" ? <ArchiveIcon /> : <StickyNote2Icon />}</Button>
        <Button action="delete" onClick={(e) => {
          e.preventDefault();
          dispatch(deleteNote(item.id));
        }}><DeleteIcon /></Button>
      </ActionButton>
    </Card>
  )
}

export default CustomCard