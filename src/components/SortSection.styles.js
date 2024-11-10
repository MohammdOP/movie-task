import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const SectionContainer = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e0e0e0;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.5rem;
  margin-left: 0.4rem;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SectionSelect = styled.select`
  padding: 0.5rem;
  border: none;
  background-color: #e0e3e6;
  color: #333;
  border-radius: 5px;

  font-weight: 500;
  width: 85%;
  margin-left: 0.8rem;

  &:hover {
    background-color: #d0d3d6;
  }
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ToggleIcon = styled.div`
  content: "";
  color: #000;
  position: relative;
  font-size: 1.75rem;
  right: 9px;
  top: -9px;

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

export const HorizanitalWraper = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: calc(100% + 2rem);
  margin: 0 -1rem;
  position: relative;
  bottom: 6px;
`;

export const SortLabel = styled.label`
  font-size: 0.875rem;
  color: #5e5e5e;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-left: 0.4rem;
  display: block;
`;
