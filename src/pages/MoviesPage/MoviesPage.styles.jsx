import styled from "@emotion/styled";

export const MoviesPageContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 15rem;

  @media (max-width: 1370px) {
    padding: 0 14rem;
  }

  @media (max-width: 1310px) {
    padding: 0 12rem;
  }

  @media (max-width: 1240px) {
    padding: 0 8rem;
  }

  @media (max-width: 1113px) {
    padding: 0 6rem;
  }

  @media (max-width: 1050px) {
    padding: 0 4rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 600px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 414px) {
    padding: 1rem 0.5rem;
    flex-direction: column;
  }
`;
