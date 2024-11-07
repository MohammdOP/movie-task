import styled from "@emotion/styled";

export const SidebarWrapper = styled.aside`
  width: 290px;
  padding: 1rem;
`;

export const SidebarTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

export const SearchAnchor = styled.div`
  padding: 0.75rem;
  background-color: ${({ isEnabled }) =>
    isEnabled ? "#019cbb" : "rgba(0, 0, 0, 0.5)"};
  color: ${({ isEnabled }) => (isEnabled ? "#ffffff" : "#888888")};
  text-align: center;
  border-radius: 99px;
  font-weight: bold;
  cursor: ${({ isEnabled }) => (isEnabled ? "pointer" : "not-allowed")};
  text-decoration: none;
  display: block;

  &:hover {
    background-color: ${({ isEnabled }) =>
      isEnabled ? "#017a9b" : "rgba(0, 0, 0, 0.5)"};
  }
`;
