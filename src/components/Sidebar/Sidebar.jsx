import SortSection from "../SortSection/SortSection";
import WatchSection from "../WatchSection/WatchSection";

import { SidebarWrapper, SidebarTitle, SearchAnchor } from "./SideBar.styles";
import { useFilter } from "../../hooks/useFilter";
import { useState } from "react";
import FilterSection from "../FilterSection/FilterSection";

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
