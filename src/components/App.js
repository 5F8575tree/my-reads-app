import "../styles/App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "../services/BooksAPI";
import SearchBooks from "./SearchBooks";
import Home from "../views/Home";
import { Routes, Route } from "react-router-dom";


//TODO: build out the custom hook to replace the changeShelf props that run all the way down.
//TODO: Figure out state - at the moment the page requires refreshing to see the changes.


const App = () => {

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

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={
        <Home Books={Books} changeShelf={changeShelf} />
      } />
      <Route path="/search" element={
        <SearchBooks changeShelf={changeShelf} />}
        />
    </Routes>
  );
};

export default App;