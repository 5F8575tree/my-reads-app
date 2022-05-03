import { useState } from "react";

export default function useChangeShelf(Books, changeShelf) {
  const [bookShelf, setBookShelf] = useState(Books.shelf);

  function handleChange(e) {
    setBookShelf(e.target.value);
    changeShelf(Books, e.target.value);
  }

  return [bookShelf, handleChange];
}