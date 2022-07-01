import React from "react";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const { history } = props;
  console.log("LoginPage", props);

  return (
    <div>
      <h1>로그인하세요!</h1>
      <button onClick={() => history.push("/")}>이전페이지</button>
      <Link to="/">홈으로 돌아가기 링크 투</Link>
      {/* <button onClick={() => history.goBack()}>이전페이지</button> */}
    </div>
  );
};

export default LoginPage;
