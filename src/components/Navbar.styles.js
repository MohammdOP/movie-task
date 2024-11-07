import styled from "@emotion/styled";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15rem;
  background-color: #0d253f;
  color: #ffffff;
  height: 64px;

  @media (max-width: 768px) {
    padding: 0 1rem;
    max-width: 100vw;
  }

  @media (max-width: 414px) {
    padding: 0 0.5rem;
  }
`;

export const LogoLargeScreen = styled.div`
  display: inline-block;

  a img {
    height: 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoSmallScreen = styled.div`
  display: none;

  a img {
    height: 40px;
  }

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;

  li {
    position: relative;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.8;
  }

  li:hover > ul {
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    .navbar__action,
    .navbar__login,
    .navbar__join {
      display: none;
    }
  }
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff;
  display: none;

  &:hover {
    color: #01b4e4;
  }

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  color: #333;
  border-radius: 4px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
  list-style: none;
  min-width: 150px;
  z-index: 10;

  li {
    padding: 0.2rem 0.5rem;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  li a {
    color: #333;
    text-decoration: none;
  }
`;
