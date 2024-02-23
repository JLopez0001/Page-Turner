import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "../../components/search-results/Results";
import Intro from "../../components/intro/Intro";
import firstBackground from "../../assets/intro-background-img/book-background.jpeg";
import "../../styles/home-page-styles/homePageStyles.css";

function HomePage() {
  const [searchBy, setSearchBy] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  let URL = "https://openlibrary.org/search.json?";

  //Sets state to either author or title
  const handleSearchBy = (e) => {
    setResults([]);
    console.log("shit");
    e.preventDefault();
    setSearchBy(e.target.name);
  };

  //Sets state to the value of what user types
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let temp = searchInput;
    let inputValue = temp.toLowerCase().split(" ").join("+");
    console.log(inputValue);
    try {
      const response = await axios(`${URL}${searchBy}=${inputValue}`);
      setResults(response);
      localStorage.setItem("searchResults", JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <Intro
        mainContent={
          "Welcome to Book Bank, where your next reading adventure awaits!"
        }
        subContent={"Happy Reading!! 📚✨"}
        backgroundImg={firstBackground}
        searchBy={searchBy}
        searchInput={searchInput}
        handleSearchBy={handleSearchBy}
        handleSearchInput={handleSearchInput}
        handleSubmit={handleSubmit}
        page="Home"
      />

      <main>
        {results && (
          <div>
            <Results results={results} searchBy={searchBy} />
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;
