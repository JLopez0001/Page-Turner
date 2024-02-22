import React from "react";
import Intro from "../../components/intro/Intro";
import CatalogResults from "../../components/search-results/CatalogResults";
import secondBackground from "../../assets/intro-background-img/book-background-2.jpeg";

function CatalogPage() {
  return (
    <div>
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
