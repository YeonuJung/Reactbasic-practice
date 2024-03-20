import React, { useState } from 'react';

const Select = () => {
    const [select, setSelect] = useState('')

    function submitHandler(e){
        e.preventDefault();
        console.log("제출된 데이터 : ", select)
    }

    function updateValue(e){
        setSelect(e.target.value)
    }

    return (
        <div>
            <form onSubmit = {submitHandler}>
            <h1>선택한 과일 : {select}</h1>
            <select value = {select} onChange = {updateValue}>
                <option value= "apple">사과</option>
                <option value= "mango">망고</option>
                <option value= "banana">바나나</option>
                <option value= "watermelon">수박</option>
            </select>
            <input type='submit' value='제출'></input>
            </form>
        </div>
    );
};

export default Select;