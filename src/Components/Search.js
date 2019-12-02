import React,{Component} from 'react';
import Shelf from './Shelf';

class Search extends Component{
    render(){
        console.log(this.props.dataSearch)
        return(
            <div className="search-books">
                <div className="search-books-bar">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                    <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                <div className="bookshelf">
        <h2 className="bookshelf-title">reasearch...</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { 
                    this.props.dataSearch.map(b => (
                        <li key={b.id}>
                            <div>{b.id}</div>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})` }}>
                                    </div>
                                    <div className="book-shelf-changer">
                                        <select onChange={(e)=>this.props.updateBook( b , e.currentTarget.value)}>
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
                    ))}
                </ol>
            </div>
        </div>

    

                        )}
                </div>
            </div>
        )
    }
}


export default Search;