import React from 'react';
import * as BooksAPI from "../services/BooksAPI";
import { useState } from "react";


const SearchBooks = () => {

  //we need to set the query state to an empty string
  const [query, setQuery] = useState('');

  let handleChange = async (e) => {
    setQuery(e.target.value);
    BooksAPI.search(e.target.value, 20).then((books) => {
      console.log(books);
    });
  };

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
            >
              Close
            </a>
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
            <ol className="books-grid"></ol>
          </div>
        </div>
    )
}

export default SearchBooks;