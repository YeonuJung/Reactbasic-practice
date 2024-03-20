import React, { useState } from "react";

const Checkbox = (props) => {
  const { priceList } = props;
  const [total, setTotal] = useState(0);
  const changeHandler = (checkbox) => {
    if (checkbox.checked) {
      setTotal((prevState) => prevState + parseInt(checkbox.value));
    } else {
      setTotal((prevState) => prevState - parseInt(checkbox.value));
    }
  };

  return (
    <>
      {priceList.map((item, index) => {
        return (
          <>
            <label htmlFor="checkbox" />
            {item.name} {item.price}원
            <input
              className="checkbox"
              type="checkbox"
              key={index}
              value={item["price"]}
              onChange={(e) => {
                changeHandler(e.target);
              }}
            ></input>
            <br />
          </>
        );
      })}
      <p>합계 : {total}원</p>
    </>
  );
};

export default Checkbox;
