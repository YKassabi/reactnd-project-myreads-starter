import React from 'react';
import Book from './Book';

const Reading = (props) =>{
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { 
                    props.read.map(b=>(
                    <li>
                        <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                                <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                                </select>
                            </div>
                            </div>
                            <div className="book-title">{b.title}</div>
                            <div className="book-authors">{b.authors}</div>
                        </div>
                    </li>))
                    }
                </ol>
            </div>
        </div>

    )
}

export default Reading;


