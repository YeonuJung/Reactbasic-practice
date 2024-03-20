import React, { useState } from 'react';

const MultiInput = () => {
    const[form, setForm] = useState({username : '', message : ''});
    
    const onChangeHandler = (e) => {
        const copyForm = {...form, [e.target.name] : e.target.value}
        setForm(copyForm);
    }
    return (
        <div>
            <h1>사용자 이름 : {form.username}</h1>
            <h1>내용 : {form.message}</h1>
            <input type='text' name='username' placeholder='사용자 이름'
            onChange={onChangeHandler}></input>
            <input type='text' name='message' placeholder='내용을 입력하세요'
            onChange={onChangeHandler}></input>
        </div>
    );
};

export default MultiInput;