import axios from "axios";
import { BASE_URL, AUTH_HEADERS } from "../utils/constants";

/**
 * Fetches a list of movies from TMDB API.
 *
 * @async
 * @function fetchMovies
 * @param {Object} options - The options for the API request.
 * @param {number} [options.pageParam=1] - The page number for the API request.
 * @param {Object} [options.searchParams={}] - Additional query parameters for filtering results.
 * @param {string} [options.searchParams.sort_by] - Sort order for the movies.
 * @param {string} [options.searchParams.with_genres] - Comma-separated genre IDs to filter movies.
 * @returns {Promise<Array>} A promise that resolves to an array of movie objects.
 * @throws {Error} If the API request fails.
 */
export const fetchMovies = async ({ pageParam = 1, searchParams }) => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    headers: AUTH_HEADERS,
    params: {
      page: pageParam,
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      ...searchParams,
    },
  });
  return response.data.results;
};

/**
 * Fetches the list of movie genres from TMDB API.
 *
 * @async
 * @function fetchGenres
 * @returns {Promise<Array>} A promise that resolves to an array of genre objects.
 * @throws {Error} If the API request fails.
 */
export const fetchGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    headers: AUTH_HEADERS,
  });
  return response.data.genres;
};
