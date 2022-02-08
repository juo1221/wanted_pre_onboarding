import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
  margin: 2rem 0;
  overflow: auto;
`;

const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 900;
`;

const ComoponentContainer = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default ComoponentContainer;
