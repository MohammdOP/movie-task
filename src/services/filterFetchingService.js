import axios from "axios";

export const fetchGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg2YzQwYWVjYzllYjVlMTJhMDkyOGRhYzkyMTdkNiIsIm5iZiI6MTczMDYyMDc4My44NDE2MDQsInN1YiI6IjY3MjcyYWQyOWUwODc3ZDFkOGFmODk2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8sEr7EtvE_Udy3OjM4meXraSV7zJKL3E-YkiJBPPaQ",
    },
  };

  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  );

  return response.data.genres;
};
