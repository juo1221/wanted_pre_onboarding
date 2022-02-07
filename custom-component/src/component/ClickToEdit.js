import React, { useState } from "react";
import styled from "styled-components";
import ComponentContainer from "./common/ComponentContainer";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Input = styled.input`
  text-align: center;
`;
const Label = styled.label`
  margin-right: 1rem;
`;
const Box = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const Toggle = () => {
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState(20);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <ComponentContainer title="ClickToEdit">
      <Container>
        <Box>
          <Label htmlFor="name">이름</Label>
          <Input id="name" type="text" defaultValue={name} onBlur={handleNameChange} />
        </Box>
        <Box>
          <Label htmlFor="age">나이</Label>
          {<Input id="age" type="text" defaultValue={age} onBlur={handleAgeChange} />}
        </Box>
        <Box>
          이름 {name} 나이 {age}
        </Box>
      </Container>
    </ComponentContainer>
  );
};

export default Toggle;
