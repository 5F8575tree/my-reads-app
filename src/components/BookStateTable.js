import React from "react";
import Bookshelf from "./Bookshelf";

const BookStateTable = ({ Books, changeShelf }) => {

    const currentlyReading = Books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = Books.filter((book) => book.shelf === "wantToRead");
    const read = Books.filter((book) => book.shelf === "read");

    return (
        <div className="list-books-content">
            <div>
                <Bookshelf name="Currently Reading" Books={currentlyReading} changeShelf={changeShelf} />
                <Bookshelf name="Want to Read" Books={wantToRead} changeShelf={changeShelf} />
                <Bookshelf name="Read" Books={read} changeShelf={changeShelf} />
            </div>
        </div>
    )
}

export default BookStateTable