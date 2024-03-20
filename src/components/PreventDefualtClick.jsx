import React from 'react';

const PreventDefualtClick = () => {
    const linkClick = (e) => {
        e.preventDefault();
        console.log("Link is Clicked")
        console.log(e)
    }
    return (
        <div>
            <a href='https://www.naver.com' onClick = {linkClick}>클릭하세요</a>
        </div>
    );
};

export default PreventDefualtClick;