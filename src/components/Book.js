import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ Books }) => {

  return (
    <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                     width: 128,
                     height: 193,
                     backgroundImage:
                     `url(${Books.url})`
                  }}
                  ></div>
                  <BookshelfChanger Books={Books} />
            </div>
            <div className="book-title">{Books.title}</div>
            <div className="book-authors">{Books.authors}</div>
        </div>
    </li>
  )
}

export default Book;