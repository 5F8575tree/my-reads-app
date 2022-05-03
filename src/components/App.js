import "../styles/App.css";
import { useState, useEffect } from "react";
import BookStateTable from "./BookStateTable";
import * as BooksAPI from "../services/BooksAPI";

//TODO: build out the custom hook to replace the changeShelf props that run all the way down.


const App = () => {

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const [showSearchPage, setShowSearchpage] = useState(false);

  const [Books, setBooks] = useState([]);

  //we need a function to change the shelf status of a book
  const changeShelf = (book, shelf) => {
    const newShelf = Books.map((b) => {
      if (b.title === book.title) {
        b.shelf = shelf;
      }
      return b;
    });
    setBooks(newShelf);
    BooksAPI.update(book, shelf);
  };


  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookStateTable Books={Books} changeShelf={changeShelf}/>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
