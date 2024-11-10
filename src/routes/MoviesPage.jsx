import Sidebar from "../components/Sidebar";
import MovieList from "../components/MovieList";
import { MoviesPageContainer } from "./MoviesPage.styles";

function MoviesPage() {
  return (
    <MoviesPageContainer>
      <Sidebar />
      <MovieList />
    </MoviesPageContainer>
  );
}

export default MoviesPage;
