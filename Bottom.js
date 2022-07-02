import React from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { decrease, increase } from "../store";

const Bottom = () => {
  const dispatcher = useDispatch();

  return (
    <div className="sub_container">
      BOTTOM
      <hr />
      <button onClick={() => dispatcher(increase("완료"))}>증가</button>
      <button onClick={() => dispatcher(decrease())}>감소</button>
    </div>
  );
};

export default Bottom;
