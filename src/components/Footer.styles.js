import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background-color: #032541;
  padding: 2rem 15rem;
  display: flex;
  justify-content: center;
  color: white;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 2rem;
`;

export const FooterLogo = styled.img`
  height: 100px;
  margin-top: -20px;
  object-fit: contain;
`;

export const JoinCommunityAnchor = styled.a`
  background-color: #01b4e4;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  margin-top: 35px;
  &:hover {
    background-color: #019cbb;
  }
`;

export const FooterSections = styled.div`
  display: flex;
  gap: 2rem;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;
