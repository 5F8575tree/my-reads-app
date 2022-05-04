import React from 'react';
import Title from '../components/Title';
import BookStateTable from '../components/BookStateTable';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = ({ Books, updateShelf }) => {

    const [ setShowSearchpage ] = useState(false);

    return (
        <div className="list-books">
            <Title />
            <BookStateTable Books={Books} updateShelf={updateShelf} />
            <div className="open-search">
                <Link to="/search" className="link-button" onClick={setShowSearchpage}>Add a book</Link>
            </div>
        </div>
    );
};


export default Home;