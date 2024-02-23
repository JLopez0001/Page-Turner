import React from "react";
import Book from "../book/Book";
import "../../styles/results-styles/results.css";

function Results({ results, searchBy }) {
  if (!results.data) {
    return <div>Loading...</div>;
  }
  let { docs } = results.data;

  //Displays results of books with different title not the same
  let uniqueTitles = new Set();
  const filteredDocs = docs.filter((book) => {
    let title = book.title;

    if (uniqueTitles.has(title)) {
      return false; // Skip this book
    }
    uniqueTitles.add(title);
    return true; // Include this book
  });

  const displayLimit = searchBy === "author" ? 10 : 1;
  const booksToDisplay = filteredDocs.slice(0, displayLimit);

  return (
    <div>
      <h1 className="results">Your Search Results</h1>
      <div className="results-container">
        {booksToDisplay.map((book, index) => {
          console.log(book);
          return (
            <Book
              key={index}
              keyId={book.key}
              coverImg={book.cover_i}
              title={book.title}
              author={book.author_name[0]}
              editions={book.edition_count}
              firstPublished={book.first_publish_year}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Results;
