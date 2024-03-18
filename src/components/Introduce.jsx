import React from 'react';

const Introduce = (props) => {
    const {name, age, region, style} = props
    return (
        <div>
           <h1>안녕하세요. 제 이름은 <span style = {style[0]}>{name}</span>입니다.</h1>
           <h1>저는 만 <span style = {style[1]}>{age}</span>살이고, <span style = {style[2]}>{region}</span>에 살고 있습니다.</h1>
        </div>
    );
};

export default Introduce;