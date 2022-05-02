import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SearchBooks from "./SearchBooks";


function App() {

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
