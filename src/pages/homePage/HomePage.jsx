import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "../../components/search-results/Results";
import "../../styles/home-page-styles/homePageStyles.css";

function HomePage() {
  const [searchBy, setSearchBy] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  let URL = "https://openlibrary.org/search.json?";

  const handleInputSearch = (e) => {
    e.preventDefault();
    setSearchBy(e.target.name);
  };

  useEffect(() => {
    // Check if there's data in localStorage
    const savedResults = localStorage.getItem("searchResults");
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  const onSubmit = async (e) => {
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
    <div>
      <section>
        <div className="intro intro-container">
          <div className="content-container">
            <p className="content main-sub-header">
              Welcome to Book Bank, where your next reading adventure awaits!
              <br />
              Happy Reading!! 📚✨
            </p>
          </div>

          <form onSubmit={onSubmit}>
            <div className="button-container">
              <button
                name="title"
                className="input-button"
                onClick={handleInputSearch}
              >
                Search by Title
              </button>
              <button
                name="author"
                className="input-button"
                onClick={handleInputSearch}
              >
                Search by Author
              </button>
            </div>

            <div className="input-container">
              {searchBy && (
                <div>
                  <input
                    className="input-search"
                    type="text"
                    placeholder={`Search by ${searchBy}`}
                    onChange={handleSearchChange}
                  />
                  <button type="submit" className="search-button">
                    Search
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

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
