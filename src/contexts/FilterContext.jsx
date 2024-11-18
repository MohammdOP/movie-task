import { createContext, useContext, useState } from "react";

/**
 * Context to manage movie filtering options and parameters.
 * Provides state and utility functions for filtering movies based on genres, sorting options, and search parameters.
 */
const FilterContext = createContext();

/**
 * A provider component to manage filter-related state and provide it to child components.
 * @function
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that require access to the filter context.
 * @returns {JSX.Element} The FilterProvider component.
 */
export function FilterProvider({ children }) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [searchParams, setSearchParams] = useState(null);

  /**
   * Toggles a genre in the selected genres array.
   * Adds the genre if not present, or removes it if already selected.
   * @function
   * @param {number} genreId - The ID of the genre to toggle.
   */
  const toggleGenre = (genreId) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genreId)
        ? prevGenres.filter((id) => id !== genreId)
        : [...prevGenres, genreId]
    );
  };

  /**
   * Sets the sorting option for movies.
   * @function
   * @param {string} option - The sorting option (e.g., "popularity.desc").
   */
  const setSort = (option) => {
    setSortOption(option);
  };

  /**
   * Generates search parameters based on selected genres and sorting options.
   * Updates the `searchParams` state with the new parameters.
   * @function
   */
  const executeSearch = () => {
    const params = {};
    if (selectedGenres.length) {
      params.with_genres = selectedGenres.join(",");
    }
    if (sortOption) {
      params.sort_by = sortOption;
    }
    setSearchParams(params);

    console.log("Updated searchParams:", params);
  };

  return (
    <FilterContext.Provider
      value={{
        selectedGenres,
        toggleGenre,
        sortOption,
        setSort,
        searchParams,
        executeSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);
