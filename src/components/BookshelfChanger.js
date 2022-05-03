import React from 'react';

const BookshelfChanger = ({ Books, changeShelf }) => {

    //we need to pass the book shelf to the BookshelfChanger component
    const bookShelf = Books.shelf;

    return (
        <div className="book-shelf-changer">
            <select defaultValue={bookShelf} onChange={(e) => changeShelf(Books, e.target.value)}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookshelfChanger;