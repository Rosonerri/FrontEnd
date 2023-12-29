import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { viewTodos} from '../../Api/Api';
import TodoScreen from './TodoScreen';
import moment from 'moment';
import img from '../../assets/avatar.png';
import { useParams } from 'react-router-dom';

const HomeScreen = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [state, setState]: Array<any> = useState<Array<{}>>([]);
  const { Id } = useParams();

  console.log(Id);

  useEffect(() => {
    viewTodos()
      .then((res: any) => {
        console.log('Fetched todos:', res);
        setState(res);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []); 

  const onEnd = (res: any) => {
    console.log(res);
    const { source, destination } = res;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      let SourceData = state[source.droppableId];
      let DesData = state[destination.droppableId];

      let SourceItem = [...SourceData.data];
      let DesItem = [...DesData.data];

      let [remove] = SourceItem.splice(source.index, 1);
      DesItem.splice(destination.index, 0, remove);

      setState({
        ...state,
        [source.droppableId]: {
          ...SourceData,
          data: SourceItem,
        },
        [destination.droppableId]: {
          ...DesData,
          data: DesItem,
        },
      });
    } else {
      let data = state[source.droppableId];
      let item = [...data.data];

      let [remove] = item.splice(source.index, 1);
      item.splice(destination.index, 0, remove);

      setState({
        ...state,
        [source.droppableId]: {
          ...data,
          data: item,
        },
      });

      console.log(item);
    }
  };

  return (
    <div>
      <Container>
        <Main>
          <Header>
            <Text0>TODO DASHBOAD</Text0>
            <Wrap2>
              <Avatar src={img} />
              <Text2>
                <sub>Over 20m Registered Companies</sub>
              </Text2>
            </Wrap2>
          </Header>
          <Body>
            <MainBody>
              <DragDropContext onDragEnd={onEnd}>
                {/* START section */}
                <Droppable droppableId="todo">
                  {(provided) => (
                    <Cards ref={provided.innerRef} {...provided.droppableProps}>
                      <Head>
                        <Wrap>
                          <sup>
                            <Count>5</Count>
                          </sup>
                          <Text3>START.....</Text3>
                        </Wrap>
                      </Head>
                      {state?.map((el: any) => (
                        <Draggable key={el._id} draggableId={el._id} index={0}>
                          {(provided) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Tasked>{el.task}</Tasked>
                              <Time rr="1">
                                <TimeWrap>
                                  <div>Created At:</div>
                                </TimeWrap>
                                {moment(Date.parse(el.createdAt)).format('LLLL')}
                              </Time>
                              <Time rr="1">
                                <TimeWrap>
                                  <div>Ended At: </div>
                                </TimeWrap>
                                {moment(Date.parse(el.deadLine)).format('LLLL')}
                              </Time>
                              <hr />
                              <hr />
                              <Space />
                              <br />
                              <But>
                                <Button
                                  // onClick={() => {
                                  //   deleteTodo(el._id);
                                  // }}
                                >
                                  Delete Task
                                </Button>
                              </But>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Cards>
                  )}
                </Droppable>

                <Droppable droppableId="inprogress">
                  {(provided) => (
                    <Cards ref={provided.innerRef} {...provided.droppableProps}>
                      <Head>
                        <Wrap>
                          <sup>
                            <Count>5</Count>
                          </sup>
                          <Text3>In Progress.....</Text3>
                        </Wrap>
                      </Head>
                      {state?.map((el: any) => (
                        <Draggable key={el._id} draggableId={el._id} index={0}>
                          {(provided) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Tasked>{el.task}</Tasked>
                              <Time rr="l">
                                <TimeWrap>
                                  <div>Created At: </div>
                                </TimeWrap>
                                {moment(Date.parse(el.createdAt)).format('LLLL')}
                              </Time>
                              <Time>
                                <TimeWrap>
                                  <div>Ended At: </div>
                                </TimeWrap>
                                {el.deadLine}
                              </Time>
                              <hr />
                              <hr />
                              <Space />
                              <br />
                              <But>
                                <Button
                                  // onClick={() => {
                                  //   deleteTodo(el._id);
                                  // }}
                                >
                                  Delete Task
                                </Button>
                              </But>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Cards>
                  )}
                </Droppable>

                <Droppable droppableId="finished">
                  {(provided) => (
                    <Cards ref={provided.innerRef} {...provided.droppableProps}>
                      <Head>
                        <Wrap>
                          <sup>
                            <Count>5</Count>
                          </sup>
                          <Text3>FINISHED.....</Text3>
                        </Wrap>
                      </Head>
                      {state?.map((el: any) => (
                        <Draggable key={el._id} draggableId={el._id} index={0}>
                          {(provided) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Tasked>{el.task}</Tasked>
                              <Time rr="l">
                                <TimeWrap>
                                  <div>Created At: </div>
                                </TimeWrap>
                                7:30, Friday
                              </Time>
                              <Time rr="l">
                                <TimeWrap>
                                  <div>Ended At: </div>
                                </TimeWrap>
                                7:30, Friday
                              </Time>
                              <hr />
                              <Div2>
                                <Ball2>
                                  {/* <ImCheckmark /> */}
                                </Ball2>
                                Task Completed!!
                              </Div2>
                              <hr />
                              <Space />
                              <br />
                              <But>
                                <Button />
                              </But>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Cards>
                  )}
                </Droppable>
              </DragDropContext>
            </MainBody>
          </Body>
        </Main>
      </Container>
      {toggle && <TodoScreen toggle={toggle} setToggle={setToggle} />}
    </div>
  );
};

// export default HomeScreen;

const Text2 = styled.h4`
  text-align: center;
  margin: 20px 0px 0px 5px;
  color: white;
  font-weight: 600;
  font-style: italic;
`;
const Wrap2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  height: 50px;
`;

const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  flex: 1;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Head = styled.div`
  background-color: white;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.div`
  font-size: 20px;
  color: green;
  margin: 0px 10px 20px;
`;

const Text3 = styled.h2`
  font-size: 22px;
  font-style: italic;
  text-transform: uppercase;
`;

const Cards = styled.h4`
  height: 700px;
  width: 450px;
  border: 1px solid silver;
  border-radius: 10px;
  overflow-y: auto;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Ball2 = styled.div`
  width: 40px;
  text-align: center;
  height: 40px;
  margin: 0px 5px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  font-size: 22px;
  font-weight: 800;
  justify-content: center;
  align-items: center;
`;

const MainBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const Body = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text0 = styled.h1`
  letter-spacing: 1.2em;
  color: white;
  text-align: center;
`;

const Header = styled.div`
  width: 90%;
  height: 65px;
  background-color: #d49a54;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Main = styled.div``;

const Container = styled.div``;

const Br = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  text-align: center;
  margin: 10px 0;
  font-size: 12px;
  font-weight: 600;
`;

const But = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(RiDeleteBin6Line)`
  padding: 10px 18px;
  background-color: #d49a54;
  color: white;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 600;
  margin: 0px 10px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

const TimeWrap = styled.div`
  width: 90%;
`;

const Time = styled.div<{ rr?: string }>`
  font-size: 12px;
  margin: 10px 0;
  line-height: 1;

  display: flex;
  flex-direction: column;

  ${TimeWrap} {
    display: flex;
    flex-direction: ${({ rr }) => (rr ? 'row' : 'row-reverse')};
    div {
      font-size: 10px;
      font-weight: 600;
      margin-bottom: 5px;
    }
  }
`;

const Tasked = styled.div`
  border-radius: 5px;
  border: 1px solid silver;
  padding: 5px;
  font-size: 15px;
  line-height: 1.2;
`;

const Card = styled.div`
  width: 300px;
  min-height: 250px;
  border-radius: 5px;
  border: 1px solid silver;
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: rgba(66, 0, 66, 0.103);
  overflow: hidden;
`;

export default HomeScreen;