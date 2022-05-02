import React from "react";
import Bookshelf from "./Bookshelf";

const BookStateTable = () => {
    return (
        <div className="list-books-content">
            <div>
              <Bookshelf />
              <Bookshelf />
              <Bookshelf />
            </div>
        </div>
    )
}

export default BookStateTable