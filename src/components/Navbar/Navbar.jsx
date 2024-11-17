import {
  NavbarWrapper,
  LogoLargeScreen,
  LogoSmallScreen,
  Links,
  Actions,
  IconWrapper,
  LanguageButton,
  SearchIconWrapper,
  ActionWrapper,
  LoginLink,
  JoinLink,
  DropdownMenu,
  PlusIconWrapper,
  MobileMenuWrapper,
  MobilePrimaryItem,
  MobileSecondaryList,
  MobileSecondaryItem,
  LogoAndLinksWrapper,
  ProfileIconWrapper,
} from "./Navbar.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/**
 * The main navigation bar for the application.
 *
 * @component
 * @returns {JSX.Element}
 */
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * When the user clicks the menu icon (burger icon), this function updates the state to show or hide the menu.
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarWrapper>
      <IconWrapper onClick={toggleMobileMenu}>
        <ProfileIconWrapper>
          <FontAwesomeIcon icon={faBars} />
        </ProfileIconWrapper>
      </IconWrapper>

      <LogoAndLinksWrapper>
        <LogoLargeScreen>
          <a href="/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="TMDB Logo Large"
            />
          </a>
        </LogoLargeScreen>

        <Links>
          <li>
            <a href="/">Movies</a>
            <DropdownMenu>
              <li>
                <a href="/">Popular</a>
              </li>
              <li>
                <a href="/">Now Playing</a>
              </li>
              <li>
                <a href="/">Upcoming</a>
              </li>
              <li>
                <a href="/">Top Rated</a>
              </li>
            </DropdownMenu>
          </li>
          <li>
            <a href="/">TV Shows</a>
            <DropdownMenu>
              <li>
                <a href="/">Popular</a>
              </li>
              <li>
                <a href="/">Airing Today</a>
              </li>
              <li>
                <a href="/">On TV</a>
              </li>
              <li>
                <a href="/">Top Rated</a>
              </li>
            </DropdownMenu>
          </li>
          <li>
            <a href="/">People</a>
            <DropdownMenu>
              <li>
                <a href="/">Popular People</a>
              </li>
            </DropdownMenu>
          </li>
          <li>
            <a href="/">More</a>
            <DropdownMenu>
              <li>
                <a href="/">Discussions</a>
              </li>
              <li>
                <a href="/">Leaderboard</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">API</a>
              </li>
            </DropdownMenu>
          </li>
        </Links>
      </LogoAndLinksWrapper>

      <LogoSmallScreen>
        <a href="/">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="TMDB Logo Small"
          />
        </a>
      </LogoSmallScreen>

      <Actions>
        <ActionWrapper>
          <PlusIconWrapper>
            <FontAwesomeIcon icon={faPlus} />
          </PlusIconWrapper>
          <LanguageButton>EN</LanguageButton>
          <LoginLink href="/">Login</LoginLink>
          <JoinLink href="/">Join TMDB</JoinLink>
        </ActionWrapper>

        <IconWrapper className="profile-icon">
          <FontAwesomeIcon icon={faUser} />
        </IconWrapper>

        <SearchIconWrapper>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIconWrapper>
      </Actions>

      {/* burger Menu */}
      <MobileMenuWrapper className={isMobileMenuOpen ? "active" : ""}>
        <MobileSecondaryList>
          <MobilePrimaryItem>
            <a href="/movies">Movies</a>
          </MobilePrimaryItem>
          <MobilePrimaryItem>
            <a href="/tv">TV Shows</a>
          </MobilePrimaryItem>
          <MobilePrimaryItem>
            <a href="/people">People</a>
          </MobilePrimaryItem>
        </MobileSecondaryList>

        <MobileSecondaryList>
          <MobileSecondaryItem>
            <a href="/contribution-bible">Contribution Bible</a>
          </MobileSecondaryItem>
          <MobileSecondaryItem>
            <a href="/discussions">Discussions</a>
          </MobileSecondaryItem>
          <MobileSecondaryItem>
            <a href="/leaderboard">Leaderboard</a>
          </MobileSecondaryItem>
          <MobileSecondaryItem>
            <a href="/api">API</a>
          </MobileSecondaryItem>
          <MobileSecondaryItem>
            <a href="/support">Support</a>
          </MobileSecondaryItem>
          <MobileSecondaryItem>
            <a href="/about">About</a>
          </MobileSecondaryItem>
        </MobileSecondaryList>

        <MobileSecondaryList>
          <MobileSecondaryItem>
            <a href="/login">Login</a>
          </MobileSecondaryItem>
        </MobileSecondaryList>
      </MobileMenuWrapper>
    </NavbarWrapper>
  );
}
export default Navbar;
