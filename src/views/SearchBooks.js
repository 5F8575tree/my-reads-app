import React from 'react';
import * as BooksAPI from "../services/BooksAPI";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBooks = ({ updateShelf }) => {

  //we need to set the query state to an empty string
  const [query, setQuery] = useState('');

  const [books, setBooks] = useState([]);

  const handleChange = (query) => {
    setQuery(query.trim());
    //if the query is empty prevent the API call
    if (query === '') {
      setBooks([]);
      return;
    }
    //if the query is not empty, run the API call
    BooksAPI.search(query).then((books) => {
      setBooks(books);
      console.log(query);
      console.log(books);
    }
    );
  }


  const searchResults =
  query === ""
  ? []
  : books.filter((b) => b.title.toLowerCase().includes(query.toLowerCase())
  );


    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/"
              className="close-search"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => handleChange(event.target.value)}
                value={query}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchResults.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${
                            book.imageLinks
                              ? book.imageLinks.thumbnail
                              : ""
                          })`
                        }}
                      />
                      <div className="book-shelf-changer">
                          <select defaultValue={book.shelf} onChange={(e) => updateShelf(book, e.target.value)}>
                              <option value="none" disabled>
                                  Move to...
                              </option>
                              <option value="none">
                                  None
                              </option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                          </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                      {book.authors ? book.authors : ""}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      );
}

export default SearchBooks;