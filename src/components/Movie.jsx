import React from 'react';

const Movie = (props) => {
    const {title, date, img} = props
    return (
        <>
            <h1>영화제목 : {title}</h1>
            <h1>개봉 : {date}</h1>
            <img src= {img} alt = "MoviePoster" style = {{width : '150px', height : '200px'}}/>
            <hr/>      
        </>
    );
};

export default Movie;  