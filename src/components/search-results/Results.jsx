import React from "react";
import Book from "../book/Book";
import "../../styles/book-styles/book.css";

function Results({ results, searchBy }) {
  if (!results.data) {
    return <div>Loading...</div>;
  }
  let { docs } = results.data;
  const displayLimit = searchBy === "author" ? 10 : 1;
  const booksToDisplay = docs.slice(0, displayLimit);

  return (
    <div>
      <h1 className="results">Your Search Results</h1>
      <div className="results-container">
        {booksToDisplay.map((book, index) => {
          let title = book.title;
          // Check if title length is greater than 30 and slice it if necessary
          if (title.length > 27) {
            title = title.slice(0, 27) + "..."; // Add ellipsis to indicate truncation
          }
          return (
            <Book
              key={index}
              coverImg={book.cover_i}
              title={title}
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
