import React from 'react';

const UserPW = (props) => {
    const addChildPasswordValue = (e) => {
        props.addPasswordValue(e.target.value)
    }
    return (
        <div>
            <h1>PW : <input type = "password" name = "password" onChange = {addChildPasswordValue}></input></h1>
        </div>
    );
};

export default UserPW;