import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Reading from './Reading';
import WantToRead from './WantToRead';
import * as BooksAPI from './../BooksAPI'



class LandingPage extends Component {

// updateBook = (book, shelf) => {
//     // this.setState((currentState) => ({
//     //   contacts: currentState.books.map((c) => {
//     //     return c.id !== contact.id
//     //   })
//     // }))
//     BooksAPI.update(book, shelf)
// }


  // update(book, shelf)
    //setting the states.
//wantToRead//currentlyReading//read
    // currentlyReading = this.props.books.forEach( i => ('-=-'));
    currentlyReading = this.props.books.filter(i => i.shelf === 'currentlyReading');
    read = this.props.books.filter(i => i.shelf === 'read');
    wantToRead = this.props.books.filter(i => i.shelf === 'wantToRead');
    

    render(){

        return (
            
            <div className="list-books-content">
            {this.props.books.map( b => (

                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                        {console.log(b.shelf)}
                                            {/* <select onChange={(e)=>console.log( b,e.currentTarget.value)}> */}
                                            
                                            <select onChange={(e)=>this.props.updateBook( b , e.currentTarget.value)}>
                                                <p> {b.shelf}</p> 
                                                <option  value="" >Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="book-title">{b.title}</div>
                                        <div className="book-authors">{b.authors}</div>
                                        <br />
                                        <div className="book-authors">{b.shelf}</div>
                                    </div>
                                </li>
            ))}
            {/* <Reading read={this.read} />

            <WantToRead read={this.wantToRead} /> */}

            </div>
        )
    }
}
LandingPage.propTypes = {
    books: PropTypes.array.isRequired,
};





export default LandingPage;