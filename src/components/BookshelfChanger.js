import React from 'react';
import useChangeShelf from './useChangeShelf';

const BookshelfChanger = ({ Books}) => {

    //we need to pass the book shelf to the BookshelfChanger component
    const bookShelf = Books.shelf;

    return (
        <div className="book-shelf-changer">
            <select defaultValue={bookShelf} onChange={useChangeShelf()}>
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