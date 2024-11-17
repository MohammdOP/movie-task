import axios from "axios";
import { BASE_URL, AUTH_HEADERS } from "./constants";
/**
 *Fetche the list of movie genres from the TMDB api
 * @async
 * @function fetchGenres
 * @returns {Promise<Array>}  A promise that resolves to an array of genre objects
 *      each genre object contains "id" (number) and "name" (string)
 * @throws {Error} If the api request fails
 * @example
 * const genres = await fetchGenres();
 * console.log(genres);
 */
export const fetchGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    headers: AUTH_HEADERS,
  });
  return response.data.genres;
};
