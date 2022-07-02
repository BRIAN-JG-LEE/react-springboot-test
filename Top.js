import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const Top = () => {
  const { number, username } = useSelector((store) => store);

  return (
    <div className="sub_container">
      TOP
      <hr />
      번호 : {number}
      <hr />
      이름 : {username}
    </div>
  );
};

export default Top;
