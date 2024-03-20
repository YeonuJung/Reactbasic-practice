import React, { useState } from 'react';

const ChangeFont = () => {
    const [value, setValue] = useState('안녕하세요');
    const [font, setFont] = useState('50px');

    const fstyle = {fontSize : font}
    const changeFont = (size) => {
        setFont(size)
    }
    return (
        <>
        <div style = {fstyle}>
            {value}
        </div>
        <button onClick = {() => {changeFont('100px')}}>크기바꾸기</button>
        <button onClick = {() => {setFont('100px')}}>더 간단히 크기바꾸기</button>
        <button onClick = {() => {setFont('50px')}}>리셋</button>
        </>
    );
};

export default ChangeFont;