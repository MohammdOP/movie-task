import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

/**
 * A custom hook to access the filter context.
 *
 * @returns {Object} The current filter context value.
 */
export const useFilter = () => useContext(FilterContext);
