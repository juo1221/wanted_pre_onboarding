import React, { useState } from "react";
import styled from "styled-components";

const GlobalStyle = styled.div`
  display: flex;
  position: relative;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding-top: 1rem;
  padding-left: 1rem;
  width: 100%;
  height: 30vw;
  max-width: 40rem;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 900;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;
const TabWindow = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 3rem;
  background-color: #e0e0e0;
  padding: 0;
  margin: 0;
`;
const TabBar = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  color: ${({ isClicked }) => (isClicked ? "white" : "gray")};
  width: 29%;
  height: 3rem;
  background-color: ${({ isClicked }) => (isClicked ? "#814aea" : " #e0e0e0")};
  padding-left: 1rem;
  cursor: pointer;
`;
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Tab = () => {
  const defaultState = [true, false, false];
  const pages = ["ONE", "TWO", "THREE"];
  const [isClicked, setIsClicked] = useState(defaultState);

  const initState = (idx) => {
    let newArr = [false, false, false];
    newArr[idx] = !newArr[idx];
    setIsClicked(newArr);
  };

  return (
    <GlobalStyle>
      <Title>Tab</Title>
      <Container>
        <TabWindow>
          {pages.map((page, idx) => {
            return (
              <TabBar key={page} isClicked={isClicked[idx]} onClick={() => initState(idx)}>
                Tab{idx + 1}
              </TabBar>
            );
          })}
        </TabWindow>
        <Page>Tab menu {pages.filter((page, idx) => isClicked[idx])}</Page>
      </Container>
    </GlobalStyle>
  );
};

export default Tab;
