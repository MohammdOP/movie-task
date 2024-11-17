import {
  Wrapper,
  ImageSection,
  MobileMovieImage,
  ContentSection,
  TitleDateContainer,
  MobileTitle,
  MobileReleaseDate,
  MobileOverview,
} from "./MobileMovieCard.styles";

/**
 * A card component for displaying movie details on samller secreen
 *
 * @component
 * @param {Object} props - Props passed to the component.
 * @param {string} props.title - The title of the movie.
 * @param {string} props.releaseDate - The release date of the movie.
 * @param {string} props.imageUrl - URL of the movie poster image.
 * @param {string} props.overview - A short description or overview of the movie.
 * @returns {JSX.Element} The rendered mobile movie card component.
 */
function MobileMovieCard({ title, releaseDate, imageUrl, overview }) {
  return (
    <Wrapper>
      <ImageSection>
        <MobileMovieImage src={imageUrl} alt={`${title} poster`} />
      </ImageSection>
      <ContentSection>
        <TitleDateContainer>
          <MobileTitle>{title}</MobileTitle>
          <MobileReleaseDate>
            {new Date(releaseDate).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </MobileReleaseDate>
        </TitleDateContainer>
        <MobileOverview>{overview}</MobileOverview>{" "}
      </ContentSection>
    </Wrapper>
  );
}

export default MobileMovieCard;
