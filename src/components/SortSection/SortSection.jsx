import { useState } from "react";
import {
  SectionContainer,
  SectionTitleContainer,
  SectionTitle,
  SectionContent,
  SectionSelect,
  ToggleIcon,
  HorizanitalWraper,
  SortLabel,
} from "./SortSection.styles";
import { useFilter } from "../../contexts/FilterContext";

/**
 * SortSection Component
 * @component
 * @description A section in the sidebar that allows users to select sorting options for movies.
 */
function SortSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { setSort } = useFilter();

  /**
   * Update the global sorting option in the FilterContext.
   * @function
   * @param {string} option - The sorting option selected by the user.
   */
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handles the change event for the sorting dropdown.
   * @function
   * @param {Object} e - The event object from the select dropdown.
   */
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSort(option);
  };

  return (
    <SectionContainer>
      <SectionTitleContainer onClick={handleToggle}>
        <SectionTitle>Sort</SectionTitle>
        <ToggleIcon isOpen={isOpen} />
      </SectionTitleContainer>
      {isOpen && (
        <SectionContent>
          <HorizanitalWraper />
          <SortLabel htmlFor="sort">Sort Results By</SortLabel>

          <SectionSelect id="sort" onChange={handleSortChange}>
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
            <option value="vote_average.desc">Rating Descending</option>
            <option value="vote_average.asc">Rating Ascending</option>
            <option value="primary_release_date.desc">
              Release Date Descending
            </option>
            <option value="primary_release_date.asc">
              Release Date Ascending
            </option>
            <option value="original_title.asc">Title (A-Z)</option>
            <option value="original_title.desc">Title (Z-A)</option>
          </SectionSelect>
        </SectionContent>
      )}
    </SectionContainer>
  );
}

export default SortSection;
