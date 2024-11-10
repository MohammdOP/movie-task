import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin: 1rem 0;
`;

export const HomeLink = styled(Link)`
  font-size: 1rem;
  color: #01b4e4;
  text-decoration: none;
  margin-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
