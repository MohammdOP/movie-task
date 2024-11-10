import styled from "@emotion/styled";
export const FooterContainer = styled.footer`
  background-color: #032541;
  padding: 2rem 15rem;
  display: flex;
  justify-content: center;
  color: white;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
    margin-left: 1rem;
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 2rem;
  @media (max-width: 576px) {
    img {
      display: none;
    }
  }
`;

export const FooterLogo = styled.img`
  height: 100px;
  margin-top: -20px;
  object-fit: contain;
  position: relative;

  bottom: 1rem;
  left: 4rem;
  @media (max-width: 768px) {
    height: 80px;
  }
`;

export const JoinCommunityAnchor = styled.a`
  background-color: #ffffff;
  color: #235ea7;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  margin-top: 35px;
  &:hover {
    background-color: #019cbb;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1.25rem;

    margin-top: 0;
  }
`;

export const FooterSections = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
