import axios from "axios";

export const fetchMovies = async ({ pageParam = 1, searchParams }) => {
  const baseUrl = `https://api.themoviedb.org/3/discover/movie`;

  const params = {
    page: pageParam,
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    ...searchParams,
  };

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg2YzQwYWVjYzllYjVlMTJhMDkyOGRhYzkyMTdkNiIsIm5iZiI6MTczMDYyMDc4My44NDE2MDQsInN1YiI6IjY3MjcyYWQyOWUwODc3ZDFkOGFmODk2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8sEr7EtvE_Udy3OjM4meXraSV7zJKL3E-YkiJBPPaQ",
    },
    params,
  };

  const response = await axios.get(baseUrl, options);
  return response.data.results;
};
