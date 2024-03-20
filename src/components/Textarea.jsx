import React, { useState } from 'react';

const Textarea = () => {
    const [text, setText] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit으로 받은 데이터 : ", text)
    }
    const updateValue = (e) => {
        setText(e.target.value)
    }
    return (

        <div>
            <form onSubmit={submitHandler}>
                <h1>내용 : {text}</h1>
                <textarea value= {text} onChange={updateValue}/>
                <input type='submit' value="전송"/>
            </form>
        </div>
    );
};


export default Textarea;