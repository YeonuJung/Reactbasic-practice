import React, { useState } from 'react';

const ChangeValue = () => {
    const [value, setValue] = useState("안녕하세요")

    function changeValue(){
        setValue("반가워요");
    }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick = {changeValue}>바꾸기</button>            
        </div>
    );
};

export default ChangeValue;