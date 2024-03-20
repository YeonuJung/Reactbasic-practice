import React, { useState } from 'react';

const Radio = (props) => {
    const {regionList} = props

    function submitHandler(e){
        if(e.target.checked){
            e.preventDafault();
            alert(e.target.value);
        }
    }
    return (
        <div>
            <h1>라디오 버튼의 value를 출력</h1>
            <form onSubmit={submitHandler}>
            {regionList.map((item, index) => {
                return <> 
                 <input type = "radio" key = {index} value = {item}></input>{item}
                </>
            })}
            <input type = "submit" value= "확인"></input>
            </form>
        </div>
    );
};

export default Radio;