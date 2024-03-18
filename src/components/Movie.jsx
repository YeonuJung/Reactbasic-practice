import React from 'react';

const Movie = (props) => {
    const {title, date} = props
    return (
        <>
            <h1>영화제목 : {title}</h1>
            <h1>개봉 : {date}</h1>
            <hr/>      
        </>
    );
};

export default Movie;  