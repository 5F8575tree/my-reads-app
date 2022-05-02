import "../styles/App.css";
import { useState } from "react";
import Title from "./Title";
import BookStateTable from "./BookStateTable";
import SearchBooks from "./SearchBooks";
import SearchButton from "./SearchButton";

function App() {

  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks />
      ) : (
        <div className="list-books">
          <Title />
          <BookStateTable />
          <SearchButton />
        </div>
      )}
    </div>
  );
}

export default App;
