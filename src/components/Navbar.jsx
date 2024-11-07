import {
  NavbarWrapper,
  LogoLargeScreen,
  LogoSmallScreen,
  Links,
  Actions,
  IconWrapper,
  DropdownMenu,
} from "./Navbar.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <NavbarWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faBars} />
      </IconWrapper>

      <LogoLargeScreen>
        <a href="/">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB Logo Large"
          />
        </a>
      </LogoLargeScreen>
      <LogoSmallScreen>
        <a href="/">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="TMDB Logo Small"
          />
        </a>
      </LogoSmallScreen>

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

      <Actions>
        <IconWrapper className="profile-icon">
          <FontAwesomeIcon icon={faUser} />
        </IconWrapper>
        <FontAwesomeIcon icon={faSearch} />
      </Actions>
    </NavbarWrapper>
  );
}

export default Navbar;
