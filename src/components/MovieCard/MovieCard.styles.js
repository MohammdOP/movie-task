import styled from "@emotion/styled";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 190px;
  min-width: 150px;
  min-height: 390px;
  text-align: center;
  position: relative;
  filter: ${({ blur }) => (blur ? "blur(10px)" : "none")};
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    max-width: none;
    align-items: flex-start;
    display: block;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  @media (max-width: 576px) {
    width: 100%;
    height: auto;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const MenuIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00bcd4;
  }
`;

export const CardInfo = styled.div`
  padding: 0.5rem;
  text-align: left;
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;

  &:hover {
    color: #01b4e4;
  }
`;

export const ReleaseDate = styled.p`
  color: #666;
  font-size: 0.875rem;
`;

export const OverviewText = styled.p`
  color: #666;
  font-size: 0.875rem;
  display: none;

  @media (max-width: 576px) {
    display: block;
    margin-top: 0.5rem;
  }
`;

export const RatingBadgeContainer = styled.div`
  position: absolute;
  bottom: -7px;
  left: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #0d253f;
`;

export const StyledCircularProgressbar = styled(CircularProgressbar)`
  width: 100%;
  height: 100%;

  & .CircularProgressbar-text {
    fill: white;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 6rem;
  left: 8rem;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  text-align: left;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: bold;
    margin: 0;
    padding: 10px;
    white-space: nowrap;
    font-size: 12px;
    padding-bottom: 0;
  }

  hr {
    width: 100%;
    border: none;
    border-top: 1px solid #ddd;
  }
`;

export const PopupText = styled.p`
  font-weight: bold;
  white-space: nowrap;
  margin: 0;
`;

export const PopupLink = styled.a`
  text-decoration: none;
  display: inline-block;
  color: rgba(0, 0, 0, 0.6);
  font-size: 10px;
  padding-left: 5px;
  &:hover {
    background-color: #000000;
  }
`;

export const Separator = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 0.5rem 0;
`;

export const PopupLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003366;
  }
`;
