import React, { useState } from 'react';

const EventOnChange = () => {
    const [message, setMessage] = useState('onChange이벤트')

    function printConsole(e){
        console.log(e.target.value);
    }

    function onChangeHandler(e){
        setMessage(e.target.value);
    }
    return (
        <div>
            <h1>{message}</h1>
            <input type='text' name='msg1' placeholder='내용을 입력하세요' onChange={printConsole}></input>
            <input type='text' name='msg2' placeholder='내용을 입력하세요' onChange={onChangeHandler}></input>
        </div>
    );
};

export default EventOnChange;