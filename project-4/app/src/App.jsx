import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./Components/SearchResult";

export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch food date");
      }
    };

    fetchFoodData();
  }, []);
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading.....</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>

          <div className="search">
            <input type="text" placeholder="Search food" />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button>All </Button>
          <Button>Break-fast </Button>
          <Button>Lunch </Button>
          <Button>Dinner </Button>
        </FilterContainer>
      </Container>
      <SearchResult data={data} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-around;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: #fff;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: #fff;
`;
