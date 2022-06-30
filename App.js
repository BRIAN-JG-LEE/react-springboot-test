import logo from "./logo.svg";
import "./App.css";
import { createRef, useEffect, useRef, useState } from "react";

function App() {
  // useRef (디자인)
  // dom 을 변경할 때 사용

  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: "john" },
    { id: 2, name: "tony" },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          myRef.current.style.backgroundColor = "#87ceeb";
          console.log(myRefs);
          myRefs[1].current.style.backgroundColor = "#ff7f50";
        }}
      >
        색깔 변경
      </button>
      <div ref={myRef}>박스 in the house</div>
      <div>
        {list.map((user, index) => (
          <h1 ref={myRefs[index]}>{user.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
