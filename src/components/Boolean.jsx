import React from 'react';

const Boolean = ({bored}) => {
    const message = bored? '놀러가자' : '하던 일 열심히 마무리 하기'
    return (
        <div>
            {message}
        </div>
    );
};

export default Boolean;