import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import Footer from "./components/footer/Footer";
import BookDetails from "./components/book/BookDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/book/works/:keyId" element={<BookDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
