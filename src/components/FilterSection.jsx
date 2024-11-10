import {
  SectionContainer,
  SectionTitle,
  SectionContent,
  GenresList,
  GenreItem,
  ToggleIcon,
  SectionTitleContainer,
  FilterLabel,
  HorizanitalWraper,
} from "./FilterSection.styles";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFilter } from "../FilterContext";

const fetchGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg2YzQwYWVjYzllYjVlMTJhMDkyOGRhYzkyMTdkNiIsIm5iZiI6MTczMDYyMDc4My44NDE2MDQsInN1YiI6IjY3MjcyYWQyOWUwODc3ZDFkOGFmODk2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8sEr7EtvE_Udy3OjM4meXraSV7zJKL3E-YkiJBPPaQ",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  );
  const data = await response.json();
  return data.genres;
};

function FilterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: genres = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  const { selectedGenres, toggleGenre } = useFilter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SectionContainer>
      <SectionTitleContainer onClick={handleToggle}>
        <SectionTitle>Filters</SectionTitle>
        <ToggleIcon isOpen={isOpen} />
      </SectionTitleContainer>

      {isOpen && (
        <SectionContent>
          <HorizanitalWraper />
          <FilterLabel>Genres</FilterLabel>
          {isLoading ? (
            <p>Loading genres...</p>
          ) : isError ? (
            <p>Error loading genres</p>
          ) : (
            <GenresList>
              {genres.map((genre) => (
                <GenreItem
                  key={genre.id}
                  onClick={() => toggleGenre(genre.id)}
                  selected={selectedGenres.includes(genre.id)}
                >
                  {genre.name}
                </GenreItem>
              ))}
            </GenresList>
          )}
        </SectionContent>
      )}
    </SectionContainer>
  );
}

export default FilterSection;
