import styled from "styled-components";

const RoleDice = () => {
  return (
    <DiceContainer>
      <div className="dice">
        <img src="/images/dice/dice_1.png" alt="" />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;

  p{
    font-size:24px;
  }
`;
