import React, { useState } from 'react';

const FormSubmit = () => {
    const [form, setForm] = useState('');

    function updateValue(e){
        setForm(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault();
        console.log("submit으로 받은 데이터 : ", form)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>이름 : {form}</h1>
                <input type='text' onChange = {updateValue}/>
                <input type='submit' value= "전송"/>
            </form>
        </div>
    );
};

export default FormSubmit;