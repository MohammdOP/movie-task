import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-bottom: 1rem;
  max-width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImageSection = styled.div`
  flex-shrink: 0;
  width: 90px;
  height: 135px;
  overflow: hidden;
  border-radius: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  flex-grow: 1;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const TitleDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileTitle = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
  margin: 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileReleaseDate = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin: 0.2rem 0 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileOverview = styled.p`
  font-size: 0.875rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (min-width: 768px) {
    display: none;
  }
`;
