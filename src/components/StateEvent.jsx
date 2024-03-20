import React, { useState } from "react";

const StateEvent = () => {
  const [message, setMessage] = useState({ title: "제목", color: "black" });
  const style = { color: message.color };

  const submitHandler = (e) => {
    e.preventDefault() 
    alert(message.title)
  };
  function changeHandler(input){
    const copySetMessage = {...message, title : input.value, color : "red"}
    setMessage(copySetMessage)
  };

  return (
    <div>
      <h1 style={style}>{message.title}</h1>
      <hr />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          placeholder="내용을 입력하세요"
          onChange={(e) => {
            changeHandler(e.target);
          }}
        ></input>
        <input type="submit" value="클릭" name="color"></input>
      </form>
    </div>
  );
};

export default StateEvent;
