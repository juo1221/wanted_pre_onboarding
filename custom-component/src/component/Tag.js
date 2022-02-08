import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ComponentContainer from "./common/ComponentContainer";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 30rem;
  padding: 0.5rem;
  border: 1px solid ${({ isFocused }) => (isFocused ? "#53424C" : "lightgray")};
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
`;
const Input = styled.input`
  height: 100%;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #eeeeee;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.1rem 0.5rem;
  margin: 0.51rem;
  background: #814bea;
  border-radius: 5px;
`;
const Text = styled.span`
  color: white;
  font-weight: bold;
  padding-right: 2rem;
`;
const CloseBtn = styled.button`
  position: absolute;
  right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  border: none;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
`;
const Toggle = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [tags, setTags] = useState([{ text: "Hi", id: uuidv4() }]);
  const inputRef = useRef();

  const focusInput = () => inputRef.current.focus();

  const hadleMouseDown = (e) => {
    if (e.keyCode !== 13 || !e.target.value.trim()) return;
    const text = inputRef.current.value;
    setTags((prev) => [...prev, { text, id: uuidv4() }]);
    focusInput();
    inputRef.current.value = "";
  };
  const deleteBlock = (targetId) => {
    const newTags = tags.filter(({ _, id }) => id !== targetId);
    setTags(newTags);
    focusInput();
  };
  useEffect(() => {
    focusInput();
  }, []);
  return (
    <ComponentContainer title="Tag">
      <Container isFocused={isFocused} onClick={() => setIsFocused(true)}>
        {tags.map(({ text, id }) => {
          return (
            <Block key={id}>
              <Text>{text}</Text>
              <CloseBtn onClick={() => deleteBlock(id)}>&times;</CloseBtn>
            </Block>
          );
        })}
        <Input size="40" ref={inputRef} placeholder="Press endter to add tags" onKeyDown={hadleMouseDown} />
      </Container>
    </ComponentContainer>
  );
};

export default Toggle;
