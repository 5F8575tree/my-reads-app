import "../styles/App.css";
import { useState, useEffect } from "react";
import BookStateTable from "./BookStateTable";
import * as BooksAPI from "../services/BooksAPI";
import SearchBooks from "./SearchBooks";
import Title from "./Title";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <Routes>
      <Route exact path="/" element={
        <div className="list-books">
          <Title />
          <BookStateTable Books={Books} changeShelf={changeShelf} />
          <div className="open-search">
            <Link to="/search" className="link-button" onClick={setShowSearchpage}>Add a book</Link>
          </div>
        </div>
      } />
      <Route path="/search" element={
        <SearchBooks Books={Books} changeShelf={changeShelf} />}
        />
    </Routes>
  );
};

export default App;