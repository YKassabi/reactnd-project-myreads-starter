import React from 'react'
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Shelf from './Components/Shelf';
import Search from './Components/Search';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state ={
    waitingToFetch:true,
    getAllBooksRaw:[], // Array(4) [ {…}, {…}, {…}, {…} ]
    updatedBooksObject:{},
    readingStatus: '' //read//wantToread//currentlyReading
  }

  DictionaryWithIdAsKeys = (bookID) => {
    let dd = this.state.getAllBooksRaw.reduce((obj, book) => {
      obj[book.id] = book
      return obj;
    }, {});
    console.log('dd', dd)
    let rightBook = dd[bookID]
    return rightBook;
  }

  shieldsObjBooks = (data) => {
        let dblank = {read:[],wantToRead:[],currentlyReading:[]}
        let objData = data.reduce((obj, book) => {
          (obj[book.shelf]) ?  obj[book.shelf] = obj[book.shelf].concat([book]) :  obj[book.shelf] = [].concat([book]);
          return obj
        }, {})
        objData = {...dblank, ...objData} //to make sure all the shield are present
        console.log('-=-=-=-=-=-=-')
        console.log('interest objData',objData)
        this.setState(() => ({
          getAllBooksRaw: data,
          updatedBooksObject:objData,
          waitingToFetch: false
        }))
        // return d
      }


  gettingAllBooks = () => {
    BooksAPI.getAll()
    .then(data => data)
    .then(data => this.shieldsObjBooks(data))
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((books) => books)
      .then(data=>{
        return Object.keys(data).reduce((obj,k) =>{
          let array = data[k].map((id) => this.DictionaryWithIdAsKeys(id))
          obj[k] = array
          return obj
        }, {})
      })
      .then((updatedBooksObject) => {
        this.setState(() => ({
          updatedBooksObject
        }))
      })
  }

  componentDidMount() {
  this.gettingAllBooks();
}

    menuOption = (currentOption) => {
      return ['','currentlyReading', 'read', 'wantToRead', 'none'].filter(option => option !== currentOption).map((opt) => <option  value={opt}> {opt} </option>)
    }

  render() {
    return (

      <div className="app">
        <Header />
        {this.state.waitingToFetch ? <h2> Loading..</h2>  : <>
        <div className="list-books-content">
            <Search />
            <Shelf ArrayOfBooks={this.state.updatedBooksObject.read} title={'Read...'} updateBook={this.updateBook} />
            <Shelf ArrayOfBooks={this.state.updatedBooksObject.currentlyReading} title={'Currently Reading...'} updateBook={this.updateBook} menuOption={this.menuOption}/>
            <Shelf ArrayOfBooks={this.state.updatedBooksObject.wantToRead} title={'Want To Reading..'} updateBook={this.updateBook} menuOption={this.menuOption}/> 
            </div>
        {/* <LandingPage updatedBooksObject={this.state.updatedBooksObject} updateBook={this.updateBook}/> */}
        </>
        }
      </div>
        
    )
  }
}

export default BooksApp