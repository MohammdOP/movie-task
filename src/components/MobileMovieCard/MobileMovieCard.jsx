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
