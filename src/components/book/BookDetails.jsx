import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/book-detail/book-details.css";

function BookDetails() {
  let coverUrl = "https://covers.openlibrary.org";

  const [bookData, setBookData] = useState({});
  const [title, setTitle] = useState("");
  const { keyId } = useParams();

  const getDescriptionAndCharacters = async () => {
    try {
      const response = await axios(
        `https://openlibrary.org/works/${keyId}.json`
      );

      const { data } = response;
      console.log(data);

      setBookData(data);
      setTitle(data.title.toLowerCase());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDescriptionAndCharacters();
  }, []);

  return (
    <div className="book-detail-container">
      {bookData.title && (
        <div className="book-details">
          <div className="cover-image">
            {bookData.covers ? (
              <img
                className="book-image-detail"
                src={`${coverUrl}/b/id/${bookData.covers[0]}-L.jpg`}
              />
            ) : (
              <img
                className="no-cover"
                src="https://tse3.mm.bing.net/th?id=OIP.P-nIodv7WzkQ4wYYPsXWaQAAAA&pid=Api&P=0&h=220"
              />
            )}
          </div>

          <h2 className="book-title">{bookData.title}</h2>

          <p>
            <strong>Description:</strong> {""}
            {
              // Check if description is an object with a value, otherwise use it directly or show a default message
              (bookData.description && typeof bookData.description === "object"
                ? bookData.description.value
                : bookData.description) || "No Description for this book"
            }
          </p>

          {bookData.first_publish_date && (
            <p>
              <strong>First Published: </strong>
              {""}
              <span>{bookData.first_publish_date}</span>
            </p>
          )}

          {bookData.subject_people && bookData.subject_people.length > 0 && (
            <p>
              <strong>Main Characters: </strong> {""}
              {bookData.subject_people.map((character, index) => (
                <span key={index}>
                  {character}
                  {index < bookData.subject_people.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          )}

          {bookData.subjects && (
            <p>
              <strong>Subjects:</strong> {""}
              {bookData.subjects.map((subject, index) => (
                <span key={index}>
                  {subject} {index < bookData.subjects.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          )}

          {bookData.subject_places && (
            <p>
              <strong>Subject Places:</strong> {""}
              {bookData.subject_places.map((place, index) => (
                <span key={index}>
                  {place} {index < bookData.subject_places - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          )}

          {bookData.subject_times && (
            <p>
              <strong>Time Period:</strong> {""}
              {bookData.subject_times.map((period, index) => (
                <span key={index}>
                  {period}{" "}
                  {index < bookData.subject_times.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          )}

          {bookData.revision && (
            <p>
              <strong>Total Revisions: </strong>
              {""}
              <span>{bookData.revision}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default BookDetails;
