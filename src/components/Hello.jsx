import React from 'react';
 
const Hello = () => {
    const name = '정연우'
    //여기선 if for 등 다 쓸 수 있음.  

    return (
    // JSX 문법만
    // if, for, switch등 못 씀
    // if 대신 삼항연산자 사용
    // 삼항연산자에서 조건이 true일 때만 뭘 하고 싶으면? false일 때 null값 넣어주기
    // 또는 AND연산자를 사용하면 뒤에 null값 넣은 것과 동일한 효과
    // {name === '정연우' && <h1>남자</h1>} -> 앞에가 true이면 뒤에 반환하기 때문에.
    // HTML 태그는 반드시 닫아야 함 <img/> 이런 식으로
    // class는 자바스크립트 예약어이기 때문에 className으로 명명
    // CSS Style을 적용할 때는 객체 형태로 작성, 속성 이름은 카멜 표기법으로
    // 인라인으로 스타일을 작성할 때는 왜 중괄호가 2개인지??
    // 객체 형태로 작성하는 방식이 자바스크립트 방식이기 때문에 먼저 중괄호 적고 그 안에 객체형태로 적기 때문
    // 컴포넌트를 작성할 때는 함수명을 대문자로 작성
    // 컴포넌트의 파일 확장자는 jsx로 하는 것이 좋음
    <>
        <div>안녕하세요.</div>
        <div>정연우입니다.</div>
        <div className = "className">{name}입니다.</div>
        {name === '정연우'? <h1>남자</h1> : <h1>여자</h1>}
        {name === '정연우'? <h1>남자</h1> : null}
    </>
    );
};

export default Hello;