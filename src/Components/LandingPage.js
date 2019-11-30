import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';
import ActionReadMenu from './ActionReadMenu';



class LandingPage extends Component {

    currentlyReading = this.props.books.filter(i => i.shelf === 'currentlyReading');
    read = this.props.books.filter(i => i.shelf === 'read');
    wantToRead = this.props.books.filter(i => i.shelf === 'wantToRead');
    
    menuOption = (currentOption) => {
                return ['','currentlyReading', 'read', 'wantToRead', 'none'].filter(option => option !== currentOption).map((opt) => <option  value={opt}> {opt} </option>)
    }


    render(){
        return (
            <div className="list-books-content">
            <Shelf ArrayOfBooks={this.read} title={'Read...'} updateBook={this.props.updateBook} menuOption={this.menuOption}/>
            <Shelf ArrayOfBooks={this.currentlyReading} title={'Currently Reading...'} updateBook={this.props.updateBook} menuOption={this.menuOption}/>
            <Shelf ArrayOfBooks={this.wantToRead} title={'Want To Reading..'} updateBook={this.props.updateBook} menuOption={this.menuOption}/>
            </div>
        )
    }
}
LandingPage.propTypes = {
    books: PropTypes.array.isRequired,
};





export default LandingPage;