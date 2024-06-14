import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectNumber] = useState();

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => {
              setSelectNumber(value);
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Selected Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  cursor: pointer;
  height: 72px;
  width: 72px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};
  color: ${(props) => (!props.isSelected ? "#000" : "#fff")};
`;
