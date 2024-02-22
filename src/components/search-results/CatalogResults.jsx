import { useState, useEffect } from "react";
import Book from "../book/Book";
import axios from "axios";
import "../../styles/catalog-styles/catalog.css";

function CatalogResults() {
  const url = "https://openlibrary.org/subjects/";
  const [subjectData, setSubjectData] = useState([]);

  useEffect(() => {
    const subjects = [
      "manga",
      "sci+fi",
      "adventure",
      "history",
      "travel",
      "romance",
      "fitness",
      "biography",
      "mystery",
      "thriller",
      "horror",
      "fantasy",
      "fiction",
      "non+fiction",
      "dystopian",
    ];

    const fetchBooks = async () => {
      try {
        // Fetch all subjects in parallel and wait for all of them to complete
        const responses = await Promise.all(
          subjects.map((subject) => axios.get(`${url}${subject}.json`))
        );
        const books = responses.map((response) => response.data);
        setSubjectData(books);
      } catch (error) {
        console.error("Error fetching book data", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {subjectData.map((subject, index) => (
        <div key={index}>
          <h2 className="subject-topic">
            {subject.name.charAt(0).toUpperCase() + subject.name.slice(1)}
          </h2>
          <div className="subject-container">
            {subject.works.map((bookInfo, index) => (
              <Book
                key={index}
                coverImg={bookInfo.cover_id}
                title={bookInfo.title}
                author={bookInfo.authors[0]?.name} // Optional chaining for safety
                editions={bookInfo.edition_count}
                firstPublished={bookInfo.first_publish_year}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatalogResults;
