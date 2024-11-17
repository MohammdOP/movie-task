import {
  CardContainer,
  ImageContainer,
  MovieImage,
  MenuIcon,
  CardInfo,
  Title,
  ReleaseDate,
  RatingBadgeContainer,
  StyledCircularProgressbar,
  OverviewText,
} from "./MovieCard.styles";
import { buildStyles } from "react-circular-progressbar";

/**
 * A card component for displaying movie details.
 *
 * @component
 * @param {Object} props - Props passed to the component.
 * @param {string} props.title - The title of the movie.
 * @param {string} props.releaseDate - The release date of the movie.
 * @param {number} props.rating - The rating of the movie (on a scale of 0-10).
 * @param {string} props.imageUrl - URL of the movie poster image.
 * @param {boolean} props.isBlurred - Whether the card is blurred (e.g., when showing a popup).
 * @param {Function} props.onTogglePopup - Callback function to toggle the popup display.
 * @param {string} props.overview - A short description or overview of the movie.
 * @returns {JSX.Element} The rendered movie card component.
 */
function MovieCard({
  title,
  releaseDate,
  rating,
  imageUrl,
  isBlurred,
  onTogglePopup,
  overview,
}) {
  return (
    <CardContainer blur={isBlurred}>
      <ImageContainer>
        <MovieImage src={imageUrl} alt={`${title} poster`} />
        <MenuIcon
          onClick={(e) => {
            e.stopPropagation();
            onTogglePopup();
          }}
        >
          ...
        </MenuIcon>

        <RatingBadgeContainer>
          <StyledCircularProgressbar
            value={rating * 10}
            text={`${Math.round(rating * 10)}%`}
            styles={buildStyles({
              pathColor: rating < 7 ? "#d2d531" : "#21d07a",
              trailColor: "#204529",
              textColor: "#ffffff",
              textSize: "32px",
            })}
          />
        </RatingBadgeContainer>
      </ImageContainer>

      <CardInfo>
        <Title>{title}</Title>
        <ReleaseDate>
          {new Date(releaseDate).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </ReleaseDate>
        <OverviewText>{overview}</OverviewText>
      </CardInfo>
    </CardContainer>
  );
}

export default MovieCard;
