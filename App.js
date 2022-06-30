import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Sub from "./Sub";

function App() {
  // let number = 1; -> 상태값 아님

  const [number, setNumber] = useState(1); // -> React 안에 hooks 라이브러리 상태값이 됨

  const add = () => {
    setNumber(number + 1); // -> React 한테 number 값 변경할게 라고 요청
    console.log("add=", number);
  };
  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <div>
        <h1>숫자:{number}</h1>
        <button onClick={add}>더하기 계산</button>
        <Sub />
      </div>
    </div>
  );
}

export default App;
