import React from 'react';


const ActionReadMenu = () => {
    return (
        <>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </>
)
}
export default ActionReadMenu;