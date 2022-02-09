import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ComponentContainer from "./common/ComponentContainer";

const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ToggleWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 5rem;
  height: 2rem;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`;
const Progressbar = styled.div`
  width: 100%;
  transform: ${({ state }) => (state ? "translateX(0)" : "translateX(-100%)")};
  height: 2rem;
  background-color: #814aea;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
`;
const Button = styled.div`
  position: absolute;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  transform: ${({ state, parentW }) => (state ? `translateX(${(parentW / 1.5 - 1) * 100 - 20}%)` : "translateX(20%)")};
  margin-top: 0.25rem;
  border-radius: 50%;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const Toggle = () => {
  const [state, setState] = useState(false);
  const [width, setWidth] = useState(0);
  const btnRef = useRef();
  useEffect(() => {
    const w = btnRef.current.getBoundingClientRect().width / 16;
    setWidth(w);
  }, []);
  return (
    <ComponentContainer title="Toggle">
      <ToggleBox>
        <ToggleWrapper ref={btnRef}>
          <Progressbar state={state} />
          <Button parentW={width} state={state} onClick={() => setState(!state)} />
        </ToggleWrapper>
        <p>Toggle Switch{state ? " ON" : " OFF"}</p>
      </ToggleBox>
    </ComponentContainer>
  );
};

export default Toggle;
