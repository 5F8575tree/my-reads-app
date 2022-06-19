import React from "react";
import Bookshelf from "./Bookshelf";

const BookStateTable = ({ Books, updateShelf }) => {
  const currentlyReading = Books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = Books.filter((book) => book.shelf === "wantToRead");
  const read = Books.filter((book) => book.shelf === "read");

  return (
    <div className="list-books-content">
      <div className="shelf-title">
        <Bookshelf
          name="Currently Reading"
          Books={currentlyReading}
          updateShelf={updateShelf}
        />
        <Bookshelf
          name="Want to Read"
          Books={wantToRead}
          updateShelf={updateShelf}
        />
        <Bookshelf name="Read" Books={read} updateShelf={updateShelf} />
      </div>
    </div>
  );
};

export default BookStateTable;
