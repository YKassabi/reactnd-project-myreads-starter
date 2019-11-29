import React from 'react'
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Search from './Components/Search';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state ={
    waitingToFetch:true,
    books:[],
    readingStatus: '' //read//wantToread//currentlyReading
  }




  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => console.log(`${book} : ${shelf}`))
  }




  componentDidMount() {
  BooksAPI.getAll()
    .then( (books) => {
      this.setState(() => ({
        books,
        waitingToFetch:false
      }))
    }).then(()=>console.log('>>>',this.state.books))
}

  render() {
    return (

      <div className="app">
        <Header />
        {this.state.waitingToFetch ? <h2> Loading..</h2>  : <LandingPage books={this.state.books} updateBook={this.updateBook}/>}
      </div>
        
    )
  }
}

export default BooksApp