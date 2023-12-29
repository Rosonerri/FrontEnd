import React from 'react'
import pix from "../assets/logo.png";
import img from "../assets/passport.jpg"
import { AiOutlineSearch } from "react-icons/ai";
import styled from 'styled-components';
const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            <Logo src={pix} />
            <Search>
              <Icon />
              <Input placeholder="Serach here" />
            </Search>
          </Holder>

          <Holder>
            <Button>LogOut</Button>
            <Avatar src={img}/>
          </Holder>
        </Main>
      </Container>
    </div>
  )
}

export default Header
const Avatar = styled.img`
  display: flex;
  
  justify-content: center;
  align-items: center;
  background-color: darkorange;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Button = styled.button`
  padding: 12px 38px;
  background-color: orange;
  color: white;
  font-size: 17px;
  letter-spacing: 0.2em;
  border-radius: 5px;
  margin-right: 10px;
  font-family: Poppins;
  outline: none;
  border: 0;
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  outline: none;
  border: 0;

  &::placeholder {
    font-family: Poppins;
  }
`;

const Icon = styled(AiOutlineSearch)`
  font-size: 30px;
`;

const Search = styled.div`
  border: 1px solid silver;
  width: 600px;
  border-radius: 30px;
  align-items: center;
  display: flex;
  padding-left: 10px;
  overflow: hidden;
  height: 45px;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 40px;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid silver;
  /* background-color: green; */
`;

