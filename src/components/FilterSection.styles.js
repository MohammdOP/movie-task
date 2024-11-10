import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const SectionContainer = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  margin-bottom: 1.5rem;
  overflow: hidden;
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  margin-left: 0.4rem;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ToggleIcon = styled.div`
  font-size: 1.75rem;
  color: #000;
  position: relative;
  top: -7px;
  right: 8px;

  transition: transform 0.3s ease;
  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(0deg);
        `};
  &::after {
    content: "›";
  }
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
`;

export const GenreItem = styled.li`
  display: inline-flex;
  border: 1px solid #9e9e9e;
  border-radius: 14px;
  padding: 4px 12px;
  font-size: 0.9em;
  margin-right: 6px;
  margin-top: 8px;

  ${({ selected }) =>
    selected
      ? `
    background-color: #019cbb;
    color: #ffffff;
    border-color: #019cbb;
  `
      : `
    background-color: transparent;
    color: #333;
  `}

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const FilterLabel = styled.label`
  font-size: 0.875rem;
  color: #5e5e5e;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-left: 0.4rem;
  display: block;
`;

export const HorizanitalWraper = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: calc(100% + 2rem);
  margin: 0 -1rem;
  position: relative;
  bottom: 6px;
`;
