import React from "react";
import Bookshelf from "./Bookshelf";

const BookStateTable = ({ Books }) => {

    console.log({Books});

    const currentlyReading = Books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = Books.filter((book) => book.shelf === "wantToRead");
    const read = Books.filter((book) => book.shelf === "read");

    return (
        <div className="list-books-content">
            <div>
                <Bookshelf name="Currently Reading" Books={currentlyReading} />
                <Bookshelf name="Want to Read" Books={wantToRead} />
                <Bookshelf name="Read" Books={read} />
            </div>
        </div>
    )
}

export default BookStateTable