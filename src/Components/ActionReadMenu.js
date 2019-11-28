import React from 'react';
//not sure!
const ActionReadMenu = () => {
    return (
        <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}
export default ActionReadMenu;