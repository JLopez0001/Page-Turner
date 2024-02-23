import React from "react";
import { Link } from "react-router-dom";

import "../../styles/book-styles/book.css";

function Book({ keyId, coverImg, title, author, editions, firstPublished }) {
  let coverUrl = "https://covers.openlibrary.org";
  const truncatedTitle = title.length > 27 ? `${title.slice(0, 26)}...` : title;

  return (
    <div id="books">
      {/* {console.log(keyId)} */}
      <div className="books-container">
        {!coverImg ? (
          <img src="https://tse3.mm.bing.net/th?id=OIP.P-nIodv7WzkQ4wYYPsXWaQAAAA&pid=Api&P=0&h=220" />
        ) : (
          <img src={`${coverUrl}/b/id/${coverImg}-M.jpg`} />
        )}
        <h1 className="title">{truncatedTitle}</h1>
        <p className="author">
          <strong>Author:</strong> {author}
        </p>
        <p className="editions">
          <strong>Editions:</strong> {editions}
        </p>
        <p className="publish">
          <strong>First Published:</strong> {firstPublished};
        </p>
        <Link to={`/book${keyId}`}>
          {console.log(keyId)}
          <button>More Info</button>
        </Link>
      </div>
    </div>
  );
}

export default Book;
