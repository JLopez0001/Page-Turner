import React from "react";
import "../../styles/book-styles/book.css";

function Book({ coverImg, title, author, editions, firstPublished }) {
  let coverUrl = "https://covers.openlibrary.org";

  return (
    <div id="books">
      <div className="books-container">
        <img src={`${coverUrl}/b/id/${coverImg}-M.jpg`} />
        <h1 className="title">{title}</h1>
        <p className="author">
          <strong>Author:</strong> {author}
        </p>
        <p className="editions">
          <strong>Editions:</strong> {editions}
        </p>
        <p className="publish">
          <strong>First Published:</strong> {firstPublished};
        </p>
      </div>
    </div>
  );
}

export default Book;
