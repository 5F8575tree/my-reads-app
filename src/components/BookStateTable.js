import React from "react";
import Bookshelf from "./Bookshelf";

const BookStateTable = ({ Books }) => {

    console.log({Books});

    return (
        <div className="list-books-content">
            <div>
                <Bookshelf Books={Books} />
                <Bookshelf Books={Books} />
                <Bookshelf Books={Books} />
            </div>
        </div>
    )
}

export default BookStateTable