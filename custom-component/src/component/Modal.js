import React, { useState } from "react";
import styled from "styled-components";
import ComponentContainer from "./common/ComponentContainer";
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
  const toggleState = () => setState(!state);

  return (
    <ComponentContainer title="Modal">
      <Button onClick={toggleState}>Open Modal</Button>
      {state && (
        <>
          <ModalBackground onClick={toggleState} />
          <ModalWindow>
            <CloseBtn onClick={toggleState}>X</CloseBtn>
            <p>HELLO CODESTATES!</p>
          </ModalWindow>
        </>
      )}
    </ComponentContainer>
  );
};

export default Modal;
