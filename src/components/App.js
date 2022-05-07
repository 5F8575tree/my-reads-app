import "../styles/App.css";
import { useState, useEffect, useCallback } from "react";
import * as BooksAPI from "../services/BooksAPI";
import SearchBooks from "../views/SearchBooks";
import Home from "../views/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [Books, setBooks] = useState([]);

  const updateShelf = useCallback((book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks(Books.map((b) => (b.id === book.id ? { ...book, shelf } : b)));

      //if a book has been set to 'none', update it in the Books state
      if (shelf === "none") {
        setBooks(Books.filter((b) => b.id !== book.id));
      }
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
