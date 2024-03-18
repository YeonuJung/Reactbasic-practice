import React from 'react';

const Movie = (props) => {
    const {title, date} = props
    return (
        <>
            <p>영화제목 : {title}</p>
            <p>개봉 : {date}</p>      
        </>
    );
};

export default Movie;  