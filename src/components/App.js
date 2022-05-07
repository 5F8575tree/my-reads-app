import "../styles/App.css";
import { useState, useEffect, useCallback } from "react";
import * as BooksAPI from "../services/BooksAPI";
import SearchBooks from "../views/SearchBooks";
import Home from "../views/Home";
import { Routes, Route } from "react-router-dom";

//TODO: build out the custom hook to replace the changeShelf props that run all the way down.

const App = () => {
  const [Books, setBooks] = useState([]);

  const updateShelf = useCallback((book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks(Books.map((b) => (b.id === book.id ? { ...book, shelf } : b)));
    });
  }, []);

  //we need to use the BooksAPI to getAll() the books within a useEffect
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, [updateShelf]);

  const updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks(Books.map((b) => (b.id === book.id ? { ...book, shelf } : b)));
    });
  };
  console.log(Books);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home Books={Books} updateShelf={updateBooks} />}
      />
      <Route
        path="/search"
        element={<SearchBooks Books={Books} updateShelf={setBooks} />}
      />
    </Routes>
  );
};

export default App;
