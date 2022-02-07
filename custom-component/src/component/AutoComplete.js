import React, { useState } from "react";
import styled, { css } from "styled-components";
import ComponentContainer from "./common/ComponentContainer";

const BackgroundLayer = styled.div`
  height: 100%;
`;
const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.7rem;
  border: none;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  ${({ isMatched }) =>
    isMatched
      ? css`
          border-radius: 0.7rem 0.7rem 0 0;
          &:focus {
            outline: none;
            box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.2);
          }
        `
      : css`
          &:focus {
            outline: none;
            box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.2);
          }
        `}
`;
const CloseBtn = styled.div`
  position: absolute;
  right: 1rem;
  cursor: pointer;
`;
const DropDownContainer = styled.ul`
  position: absolute;
  top: 2.5rem;
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 0 0 0.7rem 0.7rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.2);
`;
const DropDownList = styled.li`
  list-style: none;
  padding: 0 1rem;
  margin: 0.5rem 0;
  &:hover {
    width: 100%;
    background-color: #eeeeee;
  }
`;
const AutoComplete = () => {
  const defaulData = ["antique", "vintage", "중고A급", "rustic", "refurbished"];
  const [isMatched, setIsMatched] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(defaulData);
  const convertor = {
    data: {
      string: (v) => v.toLowerCase(),
    },
    convert(v) {
      return this.data[typeof v](v) ?? v;
    },
  };
  const clearStates = () => {
    setIsMatched(false);
    setValue("");
    setData(defaulData);
  };
  const getSearchData = (v) => {
    return defaulData.filter((str) => str.toLowerCase().indexOf(v) !== -1);
  };
  const handleOnChange = (e) => {
    const v = convertor.convert(e.target.value);
    if (!v) return clearStates();
    const searchData = getSearchData(v);
    searchData.length ? setIsMatched(true) : setIsMatched(false);
    setValue(v);
    setData(searchData);
  };
  const handleOnClickList = (str) => setValue(str);

  return (
    <ComponentContainer title="AutoComplete">
      <BackgroundLayer onClick={clearStates} />
      <Container>
        <Input isMatched={isMatched} type="text" autoComplete="off" value={value} onChange={handleOnChange} />
        <CloseBtn onClick={clearStates}>&times;</CloseBtn>
        {isMatched && (
          <DropDownContainer>
            {data.map((str, idx) => (
              <DropDownList key={idx} onClick={() => handleOnClickList(str)}>
                {str}
              </DropDownList>
            ))}
          </DropDownContainer>
        )}
      </Container>
    </ComponentContainer>
  );
};

export default AutoComplete;
