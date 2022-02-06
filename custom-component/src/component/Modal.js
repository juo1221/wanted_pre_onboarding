import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./common/GlobalStyle";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  background-color: #814aea;
  color: #ffffff;
  cursor: pointer;
`;
const ModalBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #303030;
  border-radius: 0;
  opacity: 0.5;
`;
const ModalWindow = styled(Button)`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 6rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  color: #814aea;
  cursor: auto;
`;
const CloseBtn = styled.button`
  color: #814aea;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Modal = () => {
  const [state, setState] = useState(false);
  return (
    <GlobalStyle title="Modal">
      <Button onClick={() => setState(!state)}>Open Modal</Button>
      {state && (
        <>
          <ModalBackground />
          <ModalWindow>
            <CloseBtn onClick={() => setState(!state)}>X</CloseBtn>
            <p>HELLO CODESTATES!</p>
          </ModalWindow>
        </>
      )}
    </GlobalStyle>
  );
};

export default Modal;
