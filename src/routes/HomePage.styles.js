import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
`;

export const WelcomeMessage = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const DiscoverLink = styled(Link)`
  font-size: 1.2rem;
  color: #01b4e4;
  margin-top: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
