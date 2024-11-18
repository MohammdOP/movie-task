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

import { fetchGenres } from "../../services/fetchingService";
import { useFilter } from "../../contexts/FilterContext";
useFilter;
/**
 * A component that renders a filter section allowing users to select genres.
 * Genres are fetched dynamically from the TMDB API, and user selections
 * update the application state for filtering movies.
 * @component
 * @returns {JSX.Element} The rendered FilterSection component.
 */

function FilterSection() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Fetches a list of genres from the TMDB API using react-query.
   * @see fetchGenres
   */
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
