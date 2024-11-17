import axios from "axios";

/**
 * Fetche a list of movies from (TMDB) api
 *
 * @function fetchMovies
 * @async
 * @param {Object} options The options for the  api request
 * @param {number} [options.pageParam=1] The page number for the api request
 * @param {Object} [options.searchParams={}] Additional query parameters for filtering results
 * @param {string} [options.searchParams.sort_by] Sort order for the movies
 * @param {string} [options.searchParams.with_genres] Comma separated genre ids to filter movies
 * @returns {Promise<Array>} A promise that resolves to an array of movie objects
 * @throws Will throw an error if the  api request fails
 * @example
 *
 * const searchParams = { sort_by: "popularity.desc", with_genres: "28,12" };
 * const movies = await fetchMovies({ pageParam: 2, searchParams });
 * console.log(movies);
 */
import { BASE_URL, AUTH_HEADERS } from "./constants";

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
