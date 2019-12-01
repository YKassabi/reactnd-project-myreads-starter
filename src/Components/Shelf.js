import React from 'react';
import Book from './Book';

//-- DATA incoming as props--//  
// Title : props.title
// Array of the associate books props.ArrayOfBooks

const Reading = (props) =>{
    console.log(props.ArrayOfBooks)
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { 
                    props.ArrayOfBooks.map(b => (
                        <li key={b.id}>
                        <div>{b.id}</div>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select onChange={(e)=>props.updateBook( b , e.currentTarget.value)}>
                                                        {/* {props.menuOption(b.shelf)}  */}
                                                            <option selected value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                        <div className="book-title">
                                            {b.title}
                                        </div>
                                        <div className="book-authors">
                                            {b.authors}
                                        </div>
                                        <br />
                                        <div className="book-authors">
                                            {b.shelf}
                                        </div>
                                    </div>
                                </li>
                    
                    )
                    )
                    }
                </ol>
            </div>
        </div>

    )
}



export default Reading;


