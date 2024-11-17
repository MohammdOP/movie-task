import { HomeContainer, WelcomeMessage, DiscoverLink } from "./HomePage.styles";

function HomePage() {
  return (
    <>
      <HomeContainer>
        <WelcomeMessage>Welcome to Our Movie Website</WelcomeMessage>
        <DiscoverLink to="/movies">Discover Movies</DiscoverLink>
      </HomeContainer>
    </>
  );
}

export default HomePage;
