import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sider from "../Component/Sider";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
     <Container>
     <Header />
     <Main>
      <Sider/>
        <Div>
        <Outlet/>
        </Div>
     </Main>
     </Container>
    </div>
  );
};

export default Layout;
const Container = styled.div``
const Div = styled.div`
  width: calc(100% - 101px);
  /* background-color: green; */
`;

const Holder = styled.div`
  width: calc(100%);
  display: flex;
  background-color: pink;
  justify-content: end;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  /* background-color: grey; */
`;
