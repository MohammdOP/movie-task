import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import MoviesPage from "./routes/MoviesPage";
import NotFoundPage from "./routes/NotFoundPage";
import MainLayout from "./routes/MainLayout";
import { FilterProvider } from "./FilterContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="movies" element={<MoviesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </QueryClientProvider>
  );
}

export default App;
