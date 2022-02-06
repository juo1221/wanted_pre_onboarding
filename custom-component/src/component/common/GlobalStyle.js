import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 1rem;
  width: 100%;
  height: 50vh;
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

const GlobalStyle = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default GlobalStyle;
