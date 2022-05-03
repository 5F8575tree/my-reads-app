import "../styles/App.css";
import { useState, useEffect } from "react";
import BookStateTable from "./BookStateTable";
import * as BooksAPI from "../services/BooksAPI";
import SearchBooks from "./SearchBooks";
import Title from "./Title";

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

  //we need a function that just consolge logs the data that returns from the BooksAPI.search()
  const searchBooks = (query) => {
    BooksAPI.search(query, 20).then((books) => {
      console.log(books);
    });
    searchBooks(query);
  };



  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks />
      ) : (
        <div className="list-books">
          <Title />
          <BookStateTable Books={Books} changeShelf={changeShelf}/>
          <div className="open-search">
            <button onClick={() => setShowSearchpage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
