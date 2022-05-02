import "../styles/App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import SearchBooks from "./SearchBooks";
import { useEffect } from "react";
import * as BooksAPI from "../services/BooksAPI";


function App() {
  let navigate = useNavigate();

  useEffect(() => {
    const Books = async () => {
      const response = await BooksAPI.getAll();
      console.log(response);
    };

    Books();
    navigate("/");

  }, []);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/"
        element={<Home />}/>
      </Routes>
      <Routes>
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
