import React from 'react';
import Nav from './Nav';

const Header = () => {

        return (
            <div className="list-books-title">
                <h1>My Reads<span role='img' aria-label="Book">📚</span></h1>
                <Nav />
            </div>
        )
}



export default Header;