import React from 'react'
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Shelf from './Components/Shelf';
import Search from './Components/Search';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state ={
    waitingToFetch:true,
    getAllBooksRaw:[], // Array(4) [ {…}, {…}, {…}, {…} ]
    updatedBooksObject:{},
    readingStatus: '' ,//read//wantToread//currentlyReading
    dataSearch:[],
  }

  DictionaryWithIdAsKeys = (bookID) => {
    let dd = this.state.getAllBooksRaw.reduce((obj, book) => {
      obj[book.id] = book
      return obj;
    }, {});
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
      this.setState(() => ({
        getAllBooksRaw: data,
        updatedBooksObject:objData,
        waitingToFetch: false
      }))
  }


  gettingAllBooks = () => {
    BooksAPI.getAll()
    .then(data => data)
    .then(data => this.shieldsObjBooks(data))
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      // .then((books) => books)// maybe delete because it useless
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

searching = () => {
  BooksAPI.search('iOS')
  // .then((data)=>console.log(data))
    .then((dataSearch) => {
      this.setState(() => ({
        dataSearch
      }))
    })
}


  componentDidMount() {
  this.gettingAllBooks();
  this.searching();
}



  render() {
    return (
        <div className="app">
            <Header />
            {this.state.waitingToFetch 
              ? <h2> Loading..</h2>  
              :
              <div className="list-books-content">
                <Route exact path='/search' render ={ ({history}) => (
                    <Search dataSearch ={this.state.dataSearch} updateBook={this.updateBook}
                      // history.push('/')
                    />
                )
                } />

                <Route exact path='/' render ={ () =>(
                  <>
                    <Shelf ArrayOfBooks={this.state.updatedBooksObject.read} title={'Read...'} updateBook={this.updateBook} />
                    <Shelf ArrayOfBooks={this.state.updatedBooksObject.currentlyReading} title={'Currently Reading...'} updateBook={this.updateBook} />
                    <Shelf ArrayOfBooks={this.state.updatedBooksObject.wantToRead} title={'Want To Reading..'} updateBook={this.updateBook} /> 
                    </>
                    )
                } />
              </div>
            }
        </div>
    )
  }
}

export default BooksApp