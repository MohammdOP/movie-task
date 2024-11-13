import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [searchParams, setSearchParams] = useState(null);

  const toggleGenre = (genreId) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genreId)
        ? prevGenres.filter((id) => id !== genreId)
        : [...prevGenres, genreId]
    );
  };

  const setSort = (option) => {
    setSortOption(option);
  };

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
