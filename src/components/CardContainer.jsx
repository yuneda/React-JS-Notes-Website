import styled from "styled-components"
import { useSelector } from "react-redux/es/exports"
import imgNotes from "../images/not_found_note.png"
import imgArchive from "../images/not_found_archive.png"
import React from "react";
import CustomCard from "./CustomCard";

const Container = styled.div`
margin-top: 7px;
padding: 8px 20px;
`

const Img = styled.img`
width: 100%;
`

const Text = styled.div`
font-size: 1.25rem;
font-weight: 600;
text-align: center;
color: #2F2E41;
`

const CardContainer = (props) => {
  const dataKeyword = useSelector((state) => state.note).keyword;
  return (
    <Container>
      {dataKeyword.length === 0 && props.data.map((item) => {
        if (props.archived === item.archived) {
          return (
            <CustomCard type={props.type} item={item} key={item.id} />
          )
        }
        return null;
      })}
      {dataKeyword.length > 0 && props.data.map((item) => {
        if (item.title.toLowerCase().includes(dataKeyword.toLowerCase()) && props.archived === item.archived) {
          return (
            <CustomCard type={props.type} item={item} key={item.id} />
          )
        }
        return null;
      })}
      {props.data.filter((item) => (props.archived === item.archived)).length === 0 && (
        <>
          <Img src={props.type === "notes" ? imgNotes : imgArchive} alt="" />
          <Text>Tidak ada catatan</Text>
        </>
      )}
    </Container>
  )
}

export default CardContainer