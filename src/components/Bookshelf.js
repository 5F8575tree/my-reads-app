import React from 'react';
import Book from './Book';

const Bookshelf = ({ Books, name, changeShelf }) => {

    return (
        <div className="list-books">
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {Books.map((book) => (
                      <Book Books={book} changeShelf={changeShelf}/>
                    ))}
              </ol>
            </div>
          </div>
        </div>
    )
}


export default Bookshelf;