import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import { FilterProvider } from "./FilterContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <Navbar />
        <div className="app-container">
          <Sidebar />
          <MovieList />
        </div>
        <Footer />
      </FilterProvider>
    </QueryClientProvider>
  );
}

export default App;
