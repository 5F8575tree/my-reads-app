import React from "react";
import Title from "./Title";
import Bookshelf from "./Bookshelf";
import SearchButton from "./SearchButton";

const Home = () => {
    return (
        <div className="list-books">
            <Title />
            <Bookshelf />
            <SearchButton />
        </div>
    );
};

export default Home;