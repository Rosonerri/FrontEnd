import React, {useState} from 'react'
import styled from 'styled-components'
import img from "../assets/todoList.jpeg"
import { GiArmorUpgrade, GiTeamUpgrade } from "react-icons/gi";
import {MdOutlineAddTask} from "react-icons/md";
import { CgGym} from "react-icons/cg";
import {FaPeopleRobbery} from "react-icons/fa6";

import {BsPlus, BsX} from "react-icons/bs"
import TodoScreen from "./Pages/TodoScreen"




const Sider = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  // const [state, setState] : Array<any> = useState<Array<{}>>([])

  return (
    <div>
        <Container>
      <Main>
        <Top>
          <Image src={img}/>
          <COntent>
            <Title>Dashboard</Title>
            <TitleSub>Software Project</TitleSub>
          </COntent>
        </Top>
        <TitleSub>
          You're on a <strong>FREE</strong> plan
        </TitleSub>

        <Upgrade>
          <Icon />
          <span>Upgrade</span>
        </Upgrade>

        <br />
        <hr />
        <br />

        <Project>Project</Project>
        <ProjectTask>
          <Icon1 />
          ProjectTask
          </ProjectTask>
          <ProjectTask>
          <Icon2 />
          Public Outrich
          </ProjectTask>
          <ProjectTask>
          <Icon3 />
          Task Me
          </ProjectTask>
          <ProjectTask>
          <Icon4 />
          GYM
          </ProjectTask>
       

        <br />
        <hr />
        <br />

        <Side>
    { toggle? (
      <Ball
      onClick={()=>{
        setToggle(!toggle)
      }}
      >
    <BsX/>
    </Ball>
    
    ) :(
<Ball
onClick={()=>{
  setToggle(!toggle)

}}
>
    <BsPlus/>
    </Ball>
    )}
    <Text2>ADD TASK</Text2>
  </Side>
      </Main>
    </Container>
    {toggle && <TodoScreen toggle={toggle} setToggle={setToggle}/>}
    </div>
  )
}

export default Sider;
const Icon4 = styled(CgGym)`
  font-size: 30px;
  margin-right: 10px;
  color: #d49a54;
`;
const Icon3 = styled(GiTeamUpgrade)`
  font-size: 30px;
  margin-right: 10px;
  color: #d49a54;
`;
const Icon2 = styled(FaPeopleRobbery)`
  font-size: 30px;
  margin-right: 10px;
  color: #d49a54;
`;
const Icon1 = styled(MdOutlineAddTask)`
  font-size: 30px;
  margin-right: 10px;
  color: #d49a54;
`;
const Side = styled.div`
width: 160px;
margin: 30px 0px 0px 60px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
flex-direction: column;
`
const Text2 = styled.h4``
const Ball = styled.div`
width: 70px;
color: white;
height: 70px;
background-color: #d49a54;
;
border-radius: 50%;
display: flex;
font-size: 50px;
font-weight: 800;
justify-content: center;
align-items: center;
`
const Container = styled.div`
    width: 300px;
    height: calc(100vh - 50px);
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const But = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const Button = styled.div`
  text-transform: uppercase;
  font-size: small;
  background-color: #7700ff;
  padding: 10px 18px;
  border-radius: 3px;
  color: white;
  transition: all 360ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const ProjectTask = styled.div`
  padding: 10px;
  margin: 6px 0;
   display: flex;
  align-items: center;
  /* justify-content: center; */
  border-radius: 3px;
  transition: all 360ms;
  &:hover {
    cursor: pointer;
    background-color: orange;
  }
`;

const Project = styled.div`
  font-weight: 800;
  font-size: 17px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Icon = styled(GiArmorUpgrade)`
  font-size: 30px;
  margin-right: 10px;
  color: #d49a54;
`;

const Upgrade = styled.button`
  margin: 30px 0px 0px 60px;
  border: 1px solid #d49a54;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 10px 20px;
  span{
    font-size: 17px;
    font-weight: 700;
  }
  
`;

const TitleSub = styled.div`
  font-size: 14px;
`;

const Title = styled.div`
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
`;

const COntent = styled.div`
  margin: 20px 0px 0px 10px;

`;

const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 3px;
  background-color: white;
  margin: 20px 0px;
`;

const Top = styled.div`
  display: flex;
  margin: 0px 0px 50px;
`;

const Main = styled.div`
  padding: 0 10px;
  /* margin-top: 50px; */
`;



