import React from 'react';

const UserID = (props) => {
const addChildIdValue = (e) => {
    props.addIdValue(e.target.value)
}
    

    return (
        <div>
            <h1>ID : <input type = "text" name = "id" onChange = {addChildIdValue}></input></h1>
        </div>
    );
};

export default UserID;