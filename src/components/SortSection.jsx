import { useState } from "react";
import {
  SectionContainer,
  SectionTitleContainer,
  SectionTitle,
  SectionContent,
  SectionSelect,
  ToggleIcon,
} from "./SortSection.styles";
import { useFilter } from "../FilterContext";

function SortSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { setSort } = useFilter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
          <label htmlFor="sort">Sort Results By</label>
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
