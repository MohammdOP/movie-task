import styled from "@emotion/styled";

export const MoviesPageContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 15rem;

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
