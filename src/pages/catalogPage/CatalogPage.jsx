import React from "react";
import Intro from "../../components/intro/Intro";
import CatalogResults from "../../components/search-results/CatalogResults";
import secondBackground from "../../assets/intro-background-img/book-background-2.jpeg";
import "../../styles/catalog-styles/catalog.css";

function CatalogPage() {
  return (
    <div className="cpage">
      <Intro
        mainContent={"Browse through our catalogs!📚✨"}
        backgroundImg={secondBackground}
        page="Catalog"
      />
      <CatalogResults />
    </div>
  );
}

export default CatalogPage;
