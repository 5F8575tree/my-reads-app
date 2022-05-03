import "../styles/App.css";
import { useState } from "react";
import BookStateTable from "./BookStateTable";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const Books = [
    {
      title: "To Kill a Mockingbird",
      authors: ["Harper Lee"],
      shelf: "currentlyReading",
    },
    {
      title: "The Great Gatsby",
      authors: ["F. Scott Fitzgerald"],
      shelf: "wantToRead",
    },
    {
      title: "The Catcher in the Rye",
      authors: ["J. D. Salinger"],
      shelf: "read",
    },
    {
      title: "The Hobbit",
      authors: ["J. R. R. Tolkien"],
      shelf: "read",
    },
    {
      title: "The Grapes of Wrath",
      authors: ["John Steinbeck"],
      shelf: "read",
    },
  ];

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookStateTable Books={Books} />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
