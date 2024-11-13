import MovieList from "../../components/MovieList/MovieList";
import Sidebar from "../../components/Sidebar/Sidebar";
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
