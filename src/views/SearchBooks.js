import React from 'react';
import * as BooksAPI from "../services/BooksAPI";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBooks = ({ updateShelf }) => {

  //we need to set the query state to an empty string
  const [query, setQuery] = useState('');

  const [books, setBooks] = useState([]);

  let handleChange = async (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    BooksAPI.search(e.target.value, 20).then((books) => {
      //we need an if statement to check if the books are empty
      if (books.length === 0) {
        setBooks([]);
      } else {
        setBooks(books);
      }
    });
  };

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
                placeholder="Search by title, author, or ISBN"
                onChange={handleChange}
                value={query}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {books.length > 0 && books.map((book) => (
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