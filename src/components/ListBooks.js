import React from "react";
import Bookshelf from "./BookShelf";

const ListBooks = ({ books }) => {

    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");

    return (
        <div className="list-books-content">
            <Bookshelf />
        </div>
    )
}

export default ListBooks;