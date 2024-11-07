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
} from "./MovieCard.styles";
import { buildStyles } from "react-circular-progressbar";

function MovieCard({
  title,
  releaseDate,
  rating,
  imageUrl,
  isBlurred,
  onTogglePopup,
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
      </CardInfo>
    </CardContainer>
  );
}

export default MovieCard;
