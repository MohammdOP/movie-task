import SortSection from "./SortSection";
import WatchSection from "./WatchSection";
import FilterSection from "./FilterSection";
import { SidebarWrapper, SidebarTitle, SearchAnchor } from "./SideBar.styles";
import { useFilter } from "../FilterContext";
import { useState } from "react";

function Sidebar() {
  useState();
  const { sortOption, selectedGenres, executeSearch } = useFilter();

  const isSearchEnabled = sortOption || selectedGenres.length > 0;

  const handleSearchClick = () => {
    if (isSearchEnabled) {
      executeSearch();
    }
  };

  return (
    <SidebarWrapper>
      <SidebarTitle>Popular Movies</SidebarTitle>
      <SortSection />
      <WatchSection />
      <FilterSection />
      <SearchAnchor onClick={handleSearchClick} isEnabled={isSearchEnabled}>
        Search
      </SearchAnchor>
    </SidebarWrapper>
  );
}

export default Sidebar;
