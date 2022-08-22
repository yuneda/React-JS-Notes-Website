import React from "react"
import styled from "styled-components"
import SearchForm from "./SearchForm"

const Container = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #e0e0e0;
margin-bottom: 20px;
@media only screen and (max-width: 992px) {
  flex-direction: column;
}
`

const Logo = styled.div`
font-size: 1.75rem;
font-weight: 800;
color: #1c2e65;
`

const Search = styled.div`
padding: 5px 10px;
border-radius: 5px;
border: 1px solid #e0e0e0;
display: flex;
align-items: center;
width: 300px;
`

const Creator = styled.div`
font-size: 1rem;
font-weight: 400;
color: #1c2e65;
@media only screen and (max-width: 992px) {
  display: none;
}
`

const Navbar = () => {
  return (
    <Container>
      <Logo>My Notes App</Logo>
      <Search>
        <SearchForm />
      </Search>
      <Creator>
        Achmad Yuneda Alfajr
      </Creator>
    </Container>
  )
}

export default Navbar