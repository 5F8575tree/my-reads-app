import React from "react";

const Book = ({ Books }) => {

  console.log({Books});

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
            </div>
            <div className="book-title">{Books.title}</div>
            <div className="book-authors">{Books.authors}</div>
        </div>
    </li>
  )
}

export default Book;