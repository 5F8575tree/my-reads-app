import React from 'react';
import Book from './Book';

const Bookshelf = ({ Books }) => {

    console.log({Books});

    return (
        <div className="list-books">
        <div className="bookshelf">
            <h2 className="bookshelf-title">Title</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {Books.map((book) => (
                      <Book key={book.id} Books={book} />
                    ))}
              </ol>
            </div>
          </div>
        </div>
    )
}


export default Bookshelf;