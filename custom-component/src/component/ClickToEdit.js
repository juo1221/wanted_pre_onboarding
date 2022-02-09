import React, { useState, useRef } from "react";
import styled from "styled-components";
import ComponentContainer from "./common/ComponentContainer";
import { err } from "../util/util";
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
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const nameTest = {
    regs: [/[~!@#$%^&*()_+|<>?:{}]/, /[0-9]/],
    test(name) {
      if (this.regs.some((reg) => reg.test(name))) {
        err(`invalid name : ${name}`);
      } else return false;
    },
  };
  const ageTest = {
    table: [(age) => isNaN(age), (age) => age < 0, (age) => age > 120],
    test(age) {
      if (this.table.some((f) => f(age))) {
        err(`invalid name : ${age}`);
      } else return false;
    },
  };

  const handleNameChange = () => {
    const newName = nameInputRef.current.value;
    try {
      if (!nameTest.test(newName)) setName(newName);
    } catch (err) {
      console.error(err);
      nameInputRef.current.value = name;
    }
  };
  const handleAgeChange = () => {
    const newAge = Number(ageInputRef.current.value);
    try {
      if (!ageTest.test(newAge)) setAge(newAge);
    } catch (err) {
      console.error(err);
      ageInputRef.current.value = age;
    }
  };
  return (
    <ComponentContainer title="ClickToEdit">
      <Container>
        <Box>
          <Label htmlFor="name">이름</Label>
          <Input ref={nameInputRef} id="name" type="text" placeholder="Name" defaultValue={name} onBlur={handleNameChange} />
        </Box>
        <Box>
          <Label htmlFor="age">나이</Label>
          {<Input ref={ageInputRef} id="age" type="text" placeholder="age" defaultValue={age} onBlur={handleAgeChange} />}
        </Box>
        <Box>
          이름 {name} 나이 {age}
        </Box>
      </Container>
    </ComponentContainer>
  );
};

export default Toggle;
