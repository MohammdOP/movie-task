import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FilterProvider } from "../FilterContext";

function RootLayout() {
  return (
    <FilterProvider>
      <Navbar />
      <main className="app-container">
        <Outlet />
      </main>
      <Footer />
    </FilterProvider>
  );
}

export default RootLayout;
