import styled from "@emotion/styled";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16rem;
  background-color: #0d253f;
  color: #ffffff;
  height: 64px;

  @media (max-width: 1370px) {
    padding: 0 14rem;
  }

  @media (max-width: 1310px) {
    padding: 0 12rem;
  }

  @media (max-width: 1240px) {
    padding: 0 8rem;
  }

  @media (max-width: 1113px) {
    padding: 0 6rem;
  }

  @media (max-width: 1050px) {
    padding: 0 4rem;
  }

  @media (max-width: 845px) {
    padding: 0 2rem;

    .main-nav {
      display: none;
    }

    .burger-menu-icon {
      display: inline-block;
    }
  }

  @media (max-width: 790px) {
    padding: 0 3rem;
  }

  @media (max-width: 414px) {
    padding: 0 1rem;
  }
`;

export const LogoLargeScreen = styled.div`
  display: inline-block;
  a img {
    height: 30px;
    margin-right: 1rem;
  }

  @media (max-width: 845px) {
    display: none;
  }
`;

export const LogoSmallScreen = styled.div`
  display: none;
  a img {
    height: 35px;
    position: relative;
    left: 9rem;
  }

  @media (max-width: 845px) {
    display: inline-block;
  }
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  color: #ffffff;

  li {
    position: relative;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  li:hover > ul {
    display: block;
  }

  @media (max-width: 845px) {
    display: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;

  .navbar__login,
  .navbar__join {
    font-weight: bold;
  }

  @media (max-width: 845px) {
    gap: 1rem;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageButton = styled.button`
  background-color: #0d253f;
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid;

  &:hover {
    background-color: #ffffff;
    color: #0d253f;
  }
`;

export const LoginLink = styled.a`
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

export const JoinLink = styled(LoginLink)``;

export const IconWrapper = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  color: #ffffff;
  display: none;

  &:hover {
    color: #01b4e4;
  }

  @media (max-width: 845px) {
    display: inline-block;
  }
`;

export const SearchIconWrapper = styled.div`
  font-size: 1.2rem;
  color: #01b4e4;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const PlusIconWrapper = styled.div`
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const ProfileIconWrapper = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 845px) {
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

export const LogoAndLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  width: 90%;
  height: 100%;
  background: rgba(13, 37, 63, 0.9);
  backdrop-filter: blur(20px);
  z-index: 9999;
  padding: 20px;
  box-sizing: border-box;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.active {
    transform: translateX(0);
  }
`;

export const MobilePrimaryItem = styled.li`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const MobileSecondaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  color: #ffffff;
`;

export const MobileSecondaryItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.6);

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const MobileLoginItem = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffffff;
  margin-top: 2rem;

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;
