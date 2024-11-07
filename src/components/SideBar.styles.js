import styled from "@emotion/styled";

export const SidebarWrapper = styled.aside`
  width: 290px;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1.5rem;
    margin: 0 auto;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 25px;
    text-align: left;
  }
`;

export const SearchAnchor = styled.div`
  padding: 0.75rem;
  background-color: ${({ isEnabled }) => (isEnabled ? "#019cbb" : "#c5c5c5")};
  color: ${({ isEnabled }) => (isEnabled ? "#ffffff" : "white")};
  text-align: center;
  border-radius: 99px;
  font-weight: bold;
  cursor: ${({ isEnabled }) => (isEnabled ? "pointer" : "not-allowed")};
  text-decoration: none;
  display: block;

  @media (max-width: 768px) {
    display: block;
    margin: 1rem auto 0;
    width: 100%;
  }
`;
