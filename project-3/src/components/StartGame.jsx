import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dise Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items:center;

  .content{
    h1{
        font-size:96px;
        white-space:nowrap;
    }
  }
`;

const Button = styled.button`
  color: #fff;
  padding: 10px 18px;
  background-color: #000;
  border-radius: 5px;
  min-width: 220px;
  font-size:16px;
  border:1px solid transparent;
cursor: pointer;
transition: .4s background ease-in;


  &:hover{
    background-color:#fff;
    border:1px solid #000;
    color:#000;
    transition: .4s background ease-in;
  }

`;
