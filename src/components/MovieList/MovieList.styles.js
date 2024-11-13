import styled from "@emotion/styled";

export const MovieListOuterContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  @media (max-width: 576px) {
    max-width: 100%;
    padding: 0.5rem;
    margin: 0;
  }
`;

export const MovieListContainer = styled.div`
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadMoreLink = styled.a`
  display: block;
  width: 100%;
  padding: 1rem 0;
  background-color: #01b4e4;
  color: #ffffff;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  margin: 1rem auto;
`;
